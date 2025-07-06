import { NextResponse } from 'next/server'

// Mock data for now - replace with Edge Function calls later
const mockArticles = [
  {
    id: '1',
    keyword_id: 1,
    primary_keyword: 'Odoo ERP',
    url_slug: 'odoo-erp-einfuehrung',
    title: 'Odoo ERP Einführung für deutsche Unternehmen',
    meta_description: 'Erfahren Sie alles über Odoo ERP für deutsche Unternehmen',
    content: 'Odoo ist eine umfassende ERP-Lösung...',
    author: 'Odoo Experten',
    word_count: 1500,
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category: 'odoo'
  }
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  
  try {
    // For now, return mock data
    const articles = category 
      ? mockArticles.filter(a => a.category === category)
      : mockArticles
    
    return NextResponse.json({ data: articles, error: null })
  } catch (error) {
    return NextResponse.json({ data: null, error: 'Failed to fetch articles' }, { status: 500 })
  }
}