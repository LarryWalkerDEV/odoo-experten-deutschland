import { NextResponse } from 'next/server'

// Mock article data
const mockArticle = {
  id: '1',
  keyword_id: 1,
  primary_keyword: 'Odoo ERP',
  url_slug: 'odoo-erp-einfuehrung',
  title: 'Odoo ERP Einführung für deutsche Unternehmen',
  meta_description: 'Erfahren Sie alles über Odoo ERP für deutsche Unternehmen',
  content: {
    sections: [
      {
        title: 'Was ist Odoo ERP?',
        content: 'Odoo ist eine moderne, modulare ERP-Software, die speziell für kleine und mittlere Unternehmen entwickelt wurde. Mit über 30 integrierten Geschäftsanwendungen bietet Odoo eine All-in-One-Lösung für die Digitalisierung Ihrer Geschäftsprozesse.'
      },
      {
        title: 'Vorteile von Odoo',
        content: 'Die Vorteile von Odoo liegen in seiner Flexibilität, Benutzerfreundlichkeit und dem hervorragenden Preis-Leistungs-Verhältnis. Deutsche Unternehmen profitieren besonders von der DSGVO-konformen Implementierung und der Möglichkeit, das System an lokale Anforderungen anzupassen.'
      }
    ]
  },
  author: 'Odoo Experten',
  word_count: 1500,
  status: 'published',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  category: 'odoo'
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    // For now, return mock data
    if (params.slug === mockArticle.url_slug) {
      return NextResponse.json({ data: mockArticle, error: null })
    }
    
    return NextResponse.json({ data: null, error: 'Article not found' }, { status: 404 })
  } catch (error) {
    return NextResponse.json({ data: null, error: 'Failed to fetch article' }, { status: 500 })
  }
}