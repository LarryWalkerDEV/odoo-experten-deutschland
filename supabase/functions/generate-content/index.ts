import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContentRequest {
  keywords: Array<{
    id: number
    primaryKeyword: string
    secondaryKeywords: string[]
    supportingKeywords: string[]
    urlSlug: string
    wordCount: number
    persona: string
    internalLinks: Array<{text: string, href: string}>
    externalLinks: Array<{text: string, href: string, rel: string}>
  }>
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { keywords } = await req.json() as ContentRequest
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const anthropicApiKey = Deno.env.get('Anthropic_API_KEY')!

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Create batch request for Anthropic with proper model
    const batchRequests = keywords.map(keyword => ({
      custom_id: `article-${keyword.id}-${keyword.urlSlug}`,
      params: {
        model: "claude-sonnet-4-20250514",
        max_tokens: 8000,
        temperature: 0.7,
        messages: [{
          role: "user",
          content: generatePrompt(keyword)
        }]
      }
    }))

    // Send batch request to Anthropic
    const batchResponse = await fetch('https://api.anthropic.com/v1/messages/batches', {
      method: 'POST',
      headers: {
        'x-api-key': anthropicApiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-beta': 'message-batches-2024-09-24',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        requests: batchRequests
      })
    })

    const batchData = await batchResponse.json()
    
    console.log('Batch API Response:', batchData)
    
    // Check if we have an error
    if (batchData.error || !batchData.id) {
      throw new Error(batchData.error?.message || 'Failed to create batch')
    }

    // Store batch ID for later retrieval
    const { error: insertError } = await supabase
      .from('batch_jobs')
      .insert({
        batch_id: batchData.id,
        status: 'processing',
        keyword_count: keywords.length
      })

    if (insertError) throw insertError

    return new Response(
      JSON.stringify({ 
        success: true, 
        batchId: batchData.id,
        message: `Batch job created for ${keywords.length} articles`,
        debug: batchData
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

function generatePrompt(keyword: any): string {
  const persona = getPersonaPrompt(keyword.persona)
  
  return `# Expert Odoo Content Generation System 2025

${persona}

KRITISCH: Du schreibst AUSSCHLIESSLICH AUF DEUTSCH für deutsche Geschäftsinhaber!

DEINE AUFGABE: Erstelle einen umfassenden Artikel über "${keyword.primaryKeyword}" (MINIMUM 1500 DEUTSCHE WÖRTER)

## KEYWORDS ZUR NATÜRLICHEN INTEGRATION:
- Hauptkeyword: ${keyword.primaryKeyword}
- Sekundäre Keywords: ${keyword.secondaryKeywords.join(', ')}
- Unterstützende Keywords: ${keyword.supportingKeywords.join(', ')}

## BUSINESS OWNER FOCUSED ARTICLE STRUCTURE:

### 1. SOFORTIGER BUSINESS-NUTZEN HOOK (120-150 Wörter)
- Beginne mit konkretem Business-Problem
- Zeige sofortige Lösung
- Nenne konkrete Zahlen (€ Ersparnisse)
- Verspreche schnelle Antworten ("In 5 Minuten...")

### 2. SCHNELLE ÜBERSICHT (100 Wörter)
⚡ Was der Leser sofort erfährt:
• Kostenfalle #1 die 67% übersehen
• Einfacher Test für gutes ${keyword.primaryKeyword}
• Konkrete Preise und Empfehlungen
• 3-Schritte Plan

### 3. HAUPTSEKTIONEN (je 400-500 Wörter):
- Was ${keyword.primaryKeyword} wirklich kostet (mit Kostentransparenz-SVG)
- Technische Anforderungen einfach erklärt (mit Server-Größen-SVG)
- DSGVO und deutsche Gesetze (mit Compliance-Checkliste-SVG)
- Schneller 5-Minuten-Entscheidungstest

## LINKS NATÜRLICH EINBAUEN:
Interne Links (mindestens 3, dofollow):
${keyword.internalLinks.map(l => `- Erwähne "${l.text}" und verlinke zu ${l.href}`).join('\n')}

Externe Links (mindestens 3, dofollow):
${keyword.externalLinks.map(l => `- Nutze "${l.text}" als Autorität und verlinke zu ${l.href}`).join('\n')}

## WICHTIGE REGELN:
- IMMER konkrete Zahlen: "Sparen Sie €2.400 pro Jahr"
- KEINE IT-Fachbegriffe ohne Erklärung
- Zeitersparnis betonen: "In 5 Minuten entschieden"
- ROI-Fokus: "Das bringt Ihnen €X"
- Klare nächste Schritte am Ende

## OUTPUT JSON FORMAT:
{
  "title": "[Primary Keyword]: [Klare Lösung für Unternehmer] (2025)",
  "metaDescription": "[Sofortiger Nutzen] [Konkrete Zahl] [Handlungsaufforderung] - max 155 Zeichen",
  "sections": [
    {
      "heading": "[Business-fokussierte H2 Überschrift]",
      "content": "[HTML mit natürlich eingebauten Links, konkreten Beispielen, direkter Ansprache]",
      "svgData": {
        "type": "bar|pie|comparison",
        "data": [
          {"label": "[Geschäftsrelevante Metrik]", "value": [realistische Zahl]},
          {"label": "[Vergleichswert]", "value": [realistische Zahl]}
        ],
        "title": "[Aussagekräftiger Titel für Unternehmer]",
        "description": "[Erklärung was die Daten bedeuten]"
      }
    }
  ],
  "wordCount": [tatsächliche deutsche Wortzahl ohne HTML/SVG]
}`
}

function getPersonaPrompt(personaId: string): string {
  const personas = {
    'sandra-weber': `Du bist Sandra Weber, Odoo Hosting-Spezialistin mit 12+ Jahren Erfahrung.
Dein Stil: Direkt, kostentransparent, lösungsorientiert. Du sprichst aus eigener Erfahrung.
Beginne mit: "Ihre Hosting-Kosten explodieren? Hier ist, was ich in 12 Jahren gelernt habe..."`,
    
    'klaus-weber': `Du bist Klaus Weber, Odoo Implementierungs-Experte mit 15+ Jahren Praxis.
Dein Stil: Pragmatisch, erfahren, motivierend. Du kennst jeden Stolperstein.
Beginne mit: "80% der Odoo-Projekte scheitern an diesem Fehler. So vermeiden Sie ihn..."`,
    
    'michael-schneider': `Du bist Michael Schneider, Odoo KI & Innovation Analyst.
Dein Stil: Visionär, analytisch, inspirierend. Du siehst Trends bevor sie mainstream werden.
Beginne mit: "Während andere noch Excel nutzen, revolutioniert KI bereits..."`
  }
  
  return personas[personaId] || personas['klaus-weber']
}