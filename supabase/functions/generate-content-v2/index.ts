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

    // Create batch request for Anthropic with improved prompts
    const batchRequests = keywords.map(keyword => ({
      custom_id: `article-${keyword.id}-${keyword.urlSlug}`,
      params: {
        model: "claude-sonnet-4-20250514",
        max_tokens: 8000,
        temperature: 0.7,
        messages: [{
          role: "user",
          content: generateImprovedPrompt(keyword)
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

function generateImprovedPrompt(keyword: any): string {
  const persona = getPersonaPrompt(keyword.persona)
  
  return `# SEO-Optimierter Odoo Content Generator 2025

${persona}

KRITISCH: Erstelle einen VOLLSTÄNDIGEN deutschen Artikel mit MINDESTENS 1500 WÖRTERN (ohne HTML/JSON gezählt)!

HAUPTAUFGABE: Schreibe einen umfassenden, actionable Artikel über "${keyword.primaryKeyword}"

## KEYWORDS NATÜRLICH INTEGRIEREN:
- Hauptkeyword: ${keyword.primaryKeyword} (5-7x verwenden)
- Sekundäre: ${keyword.secondaryKeywords.join(', ')} (je 2-3x)
- Unterstützende: ${keyword.supportingKeywords.join(', ')} (je 1-2x)

## ARTIKEL-STRUKTUR (MINIMUM 1500 DEUTSCHE WÖRTER):

### 1. FESSELNDER EINSTIEG (150-200 Wörter)
- Starte mit konkretem Problem/Schmerzpunkt
- Zeige sofortigen Nutzen ("€X sparen", "Y% effizienter")
- Verspreche konkrete Lösungen
- Baue Vertrauen durch Erfahrung auf

### 2. UMFASSENDE EINFÜHRUNG (200-250 Wörter)
- Was ist ${keyword.primaryKeyword} genau?
- Warum ist es für deutsche Unternehmen wichtig?
- Welche konkreten Vorteile bringt es?
- Kurzer Überblick über Artikelinhalte

### 3. HAUPTTEIL - 4-5 DETAILLIERTE SEKTIONEN (je 300-400 Wörter)
Mögliche Themen (wähle passende):
- Kosten und ROI-Analyse
- Technische Anforderungen verständlich erklärt
- Schritt-für-Schritt Implementierung
- Häufige Fehler und wie man sie vermeidet
- Best Practices aus der Praxis
- Vergleiche und Alternativen
- Deutsche Besonderheiten (DSGVO, GoBD, etc.)

### 4. ACTIONABLE ADVICE (250-300 Wörter)
- Konkrete Handlungsschritte (nummeriert)
- Checklisten zum Abhaken
- Zeitplan für Umsetzung
- Ressourcen und Tools

### 5. FAQ SEKTION (300-400 Wörter)
Mindestens 5 relevante Fragen:
- Was kostet ${keyword.primaryKeyword}?
- Wie lange dauert die Einführung?
- Welche Voraussetzungen brauche ich?
- Für wen eignet sich ${keyword.primaryKeyword}?
- Was sind die häufigsten Probleme?

### 6. FAZIT & NÄCHSTE SCHRITTE (200-250 Wörter)
- Zusammenfassung der Kernpunkte
- Klare Handlungsempfehlung
- Motivierender Abschluss
- Call-to-Action

## LINKS EINBAUEN (PRODUCTION URLs):
Interne Links (verwende VOLLSTÄNDIGE URLs):
${keyword.internalLinks.map(l => `- Verlinke "${l.text}" zu ${l.href.replace('/odoo/', 'https://odoo-experten-deutschland.de/odoo/')}`).join('\n')}

Externe Links:
${keyword.externalLinks.map(l => `- Verlinke "${l.text}" zu ${l.href} (rel="${l.rel}")`).join('\n')}

## QUALITÄTSKRITERIEN:
- MINDESTENS 1500 deutsche Wörter (zähle genau!)
- Konkrete Zahlen, Beispiele, Statistiken
- Direkte Ansprache ("Sie", "Ihr Unternehmen")
- Praktische Tipps, keine Theorie
- Professionell aber verständlich
- Strukturiert mit klaren Überschriften
- 3 aussagekräftige SVG-Visualisierungen

## JSON OUTPUT FORMAT:
{
  "title": "${keyword.primaryKeyword}: [Nutzenversprechen] - Komplettguide 2025",
  "metaDescription": "[Konkreter Nutzen] für ${keyword.primaryKeyword}. [Zahlen/Fakten]. Jetzt lesen & [Aktion].",
  "sections": [
    {
      "heading": "[Präzise H2 Überschrift mit Keyword]",
      "content": "[300-400 Wörter HTML mit natürlich eingebauten Links]",
      "svgData": {
        "type": "bar|pie|comparison|flow",
        "data": [{"label": "[Beschreibung]", "value": [Zahl]}],
        "title": "[Aussagekräftiger Diagrammtitel]",
        "description": "[Was zeigt das Diagramm?]"
      }
    }
  ],
  "faqSection": {
    "heading": "Häufig gestellte Fragen zu ${keyword.primaryKeyword}",
    "questions": [
      {
        "question": "[Natürliche Frage wie Nutzer sie stellen]",
        "answer": "[40-80 Wörter präzise Antwort]"
      }
    ]
  },
  "wordCount": [EXAKTE Anzahl deutscher Wörter ohne HTML/JSON]
}`
}

function getPersonaPrompt(personaId: string): string {
  const personas = {
    'sandra-weber': `Du bist Sandra Weber, erfahrene Odoo Hosting-Expertin.
DEIN STIL: Direkt, kostentransparent, lösungsorientiert. Du sprichst aus 12+ Jahren Praxis.
DEINE STÄRKE: Komplexe Hosting-Themen so erklären, dass Geschäftsführer sie verstehen.
TYPISCHER EINSTIEG: "In meinen 12 Jahren habe ich über 500 Unternehmen bei [Thema] begleitet..."`,
    
    'klaus-weber': `Du bist Klaus Weber, pragmatischer Odoo-Implementierer.
DEIN STIL: Praxisnah, erfahren, motivierend. 15+ Jahre Projekterfahrung.
DEINE STÄRKE: Stolpersteine kennen und Unternehmen davor bewahren.
TYPISCHER EINSTIEG: "80% aller Odoo-Projekte scheitern an diesem einen Fehler..."`,
    
    'michael-schneider': `Du bist Michael Schneider, Odoo Innovation Analyst.
DEIN STIL: Visionär aber bodenständig, analytisch, inspirierend.
DEINE STÄRKE: Zukunftstrends erkennen und für den Mittelstand übersetzen.
TYPISCHER EINSTIEG: "Während Ihre Konkurrenz noch [altes System] nutzt, revolutioniert [Innovation]..."`
  }
  
  return personas[personaId] || personas['klaus-weber']
}