import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { batchId } = await req.json()
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const anthropicApiKey = Deno.env.get('Anthropic_API_KEY')!

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Check batch status
    const statusResponse = await fetch(`https://api.anthropic.com/v1/messages/batches/${batchId}`, {
      method: 'GET',
      headers: {
        'x-api-key': anthropicApiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-beta': 'message-batches-2024-09-24'
      }
    })

    const statusData = await statusResponse.json()

    if (statusData.processing_status === 'ended') {
      // Retrieve results
      const resultsResponse = await fetch(statusData.results_url, {
        headers: {
          'x-api-key': anthropicApiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-beta': 'message-batches-2024-09-24'
        }
      })

      const resultsText = await resultsResponse.text()
      const results = resultsText.trim().split('\n').map(line => JSON.parse(line))

      let processedCount = 0
      let errors = []

      // Process and save each result
      for (const result of results) {
        if (result.result.type === 'succeeded') {
          try {
            const customId = result.custom_id
            const [, keywordId, urlSlug] = customId.split('-')
            let content = result.result.message.content[0].text
            
            // Remove markdown code blocks if present
            content = content.replace(/^```json\n/, '').replace(/\n```$/, '')
            const articleData = JSON.parse(content)

            // Combine all sections content including FAQ
            let fullContent = articleData
            if (articleData.faqSection) {
              // Add FAQ as a regular section
              const faqContent = `<h3>${articleData.faqSection.heading}</h3>` +
                articleData.faqSection.questions.map(q => 
                  `<h4>${q.question}</h4><p>${q.answer}</p>`
                ).join('')
              
              fullContent.sections.push({
                heading: articleData.faqSection.heading,
                content: faqContent,
                svgData: null
              })
            }

            // Save article to database
            const { data: article, error: articleError } = await supabase
              .from('articles')
              .insert({
                keyword_id: parseInt(keywordId),
                primary_keyword: articleData.title.split(':')[0].trim(),
                url_slug: urlSlug,
                title: articleData.title,
                meta_description: articleData.metaDescription,
                content: fullContent,
                author_id: 'sandra-weber', // Will be set based on keyword
                word_count: articleData.wordCount || 1500,
                status: 'published'
              })
              .select()
              .single()

            if (articleError) throw articleError

            // Save sections
            for (let i = 0; i < fullContent.sections.length; i++) {
              const section = fullContent.sections[i]
              const { error: sectionError } = await supabase
                .from('article_sections')
                .insert({
                  article_id: article.id,
                  section_order: i,
                  heading: section.heading,
                  content: section.content,
                  svg_data: section.svgData
                })

              if (sectionError) throw sectionError
            }

            processedCount++
          } catch (err) {
            errors.push({ customId: result.custom_id, error: err.message })
          }
        } else {
          errors.push({ customId: result.custom_id, error: result.result.error })
        }
      }

      // Update batch job status
      await supabase
        .from('batch_jobs')
        .update({
          status: 'completed',
          completed_at: new Date().toISOString()
        })
        .eq('batch_id', batchId)

      return new Response(
        JSON.stringify({ 
          success: true, 
          status: 'completed',
          processedCount,
          totalCount: results.length,
          errors: errors.length > 0 ? errors : undefined
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        status: statusData.processing_status,
        requestCounts: statusData.request_counts
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})