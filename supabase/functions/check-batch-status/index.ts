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

      // Process and save each result
      for (const result of results) {
        if (result.result.type === 'succeeded') {
          const customId = result.custom_id
          const [, keywordId, urlSlug] = customId.split('-')
          let content = result.result.message.content[0].text
          // Remove markdown code blocks if present
          content = content.replace(/^```json\n/, '').replace(/\n```$/, '')
          const articleData = JSON.parse(content)

          // Save article to database
          const { data: article, error: articleError } = await supabase
            .from('articles')
            .insert({
              keyword_id: parseInt(keywordId),
              primary_keyword: articleData.title,
              url_slug: urlSlug,
              title: articleData.title,
              meta_description: articleData.metaDescription,
              content: articleData,
              author_id: 'sandra-weber', // Will be set based on keyword
              word_count: articleData.wordCount,
              status: 'published'
            })
            .select()
            .single()

          if (articleError) throw articleError

          // Save sections
          for (let i = 0; i < articleData.sections.length; i++) {
            const section = articleData.sections[i]
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
          processedCount: results.length
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        status: statusData.processing_status,
        processed: statusData.request_counts?.processing || 0,
        total: statusData.request_counts?.total || 0
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