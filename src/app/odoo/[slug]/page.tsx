import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import DataVisualization from '@/components/DataVisualization'
import AuthorEEAT from '@/components/AuthorEEAT'
import ContentRenderer from '@/components/ContentRenderer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { ArticleStructuredData } from '@/components/StructuredData'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  
  const { data: article } = await supabase
    .from('articles')
    .select('title, meta_title, meta_description')
    .or(`slug.eq.${slug},url_slug.eq.${slug}`)
    .eq('category', 'odoo')
    .single()

  if (!article) {
    return {
      title: 'Artikel nicht gefunden',
      description: 'Der angeforderte Artikel konnte nicht gefunden werden.'
    }
  }

  return {
    title: article.meta_title || article.title,
    description: article.meta_description,
    alternates: {
      canonical: `https://odoo-experten-deutschland.de/odoo/${slug}`,
    },
    openGraph: {
      title: article.meta_title || article.title,
      description: article.meta_description,
      type: 'article',
    }
  }
}

// Helper function to determine visualization type
function getVisualizationType(placeholder: string): string {
  const lowerPlaceholder = placeholder.toLowerCase()
  if (lowerPlaceholder.includes('performance')) return 'performance-comparison'
  if (lowerPlaceholder.includes('timeline') || lowerPlaceholder.includes('roadmap')) return 'feature-timeline'
  if (lowerPlaceholder.includes('roi') || lowerPlaceholder.includes('return')) return 'roi-calculator'
  return 'default'
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  
  // Fetch article
  const { data: article, error } = await supabase
    .from('articles')
    .select('*')
    .or(`slug.eq.${slug},url_slug.eq.${slug}`)
    .eq('category', 'odoo')
    .eq('status', 'published')
    .single()

  if (error || !article) {
    notFound()
  }

  // Fetch author if needed
  let author = null
  if (article.author_id) {
    const { data } = await supabase
      .from('authors')
      .select('*')
      .eq('id', article.author_id)
      .single()
    author = data
  }

  // Parse content
  const content = typeof article.content === 'string' 
    ? JSON.parse(article.content) 
    : article.content

  const readTime = Math.ceil(article.word_count / 200)

  return (
    <>
      <ArticleStructuredData
        title={article.title}
        description={article.meta_description}
        author={{
          name: author?.name || 'Odoo Experten Deutschland',
          url: author?.social_links?.linkedin
        }}
        datePublished={article.created_at}
        dateModified={article.updated_at}
        url={`https://odoo-experten-deutschland.de/odoo/${slug}`}
        category="Odoo ERP"
      />
      <Navigation />
      <main className="min-min-h-svh bg-white dark:bg-gray-900">
        {/* Article Header */}
        <article className="pt-24 pb-12">
          <div className="max-w-full md:max-w-4xl mx-auto mobile-container overflow-hidden">
            {/* Breadcrumb */}
            <Breadcrumbs 
              items={[
                { label: 'Odoo', href: '/odoo' },
                { label: article.title }
              ]}
            />

            {/* Category Badge */}
            <div className="mb-3 sm:mb-2 sm:mb-3 md:mb-4 md:mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                Odoo ERP
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:mobile-headline font-bold text-gray-900 dark:text-white mb-3 sm:mb-2 sm:mb-3 md:mb-4 md:mb-6">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-2 sm:gap-3 md:gap-4 md:gap-6 text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 md:mb-4 sm:mb-3 sm:mb-2 sm:mb-3 md:mb-4 md:mb-6 md:mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={article.created_at}>
                  {new Date(article.created_at).toLocaleDateString('de-DE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readTime} Min. Lesezeit</span>
              </div>
              {author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{author.name}</span>
                </div>
              )}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 pb-8 border-b border-gray-200 dark:border-gray-700">
              <button className="touch-target" className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Teilen</span>
              </button>
              <button className="touch-target" className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Bookmark className="w-4 h-4" />
                <span>Speichern</span>
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-full md:max-w-4xl mx-auto mobile-container mt-8 overflow-hidden">
            <div className="prose prose-lg max-w-none">
              {/* Hook/Introduction */}
              {content.hook && (
                <div className="mobile-text mobile-text text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 md:mb-4 sm:mb-3 sm:mb-2 sm:mb-3 md:mb-4 md:mb-6 md:mb-8 leading-relaxed">
                  {content.hook}
                </div>
              )}

              {/* Quick Overview */}
              {content.quick_overview && (
                <div className="bg-gray-50 dark:bg-gray-800 mobile-card rounded-lg sm:rounded-xl mb-2 sm:mb-3 md:mb-4 sm:mb-3 sm:mb-2 sm:mb-3 md:mb-4 md:mb-6 md:mb-8">
                  <h2 className="mobile-text mobile-text font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
                    Auf einen Blick
                  </h2>
                  <div className="text-gray-700 dark:text-gray-300">
                    {content.quick_overview}
                  </div>
                </div>
              )}

              {/* Content Sections */}
              {content.content_sections?.map((section: any, index: number) => (
                <section key={index} className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
                    {section.heading}
                  </h2>
                  <ContentRenderer content={section.content} />
                  
                  {/* SVG Visualization */}
                  {section.svg_placeholder && (
                    <DataVisualization 
                      type={getVisualizationType(section.svg_placeholder)}
                      title={section.svg_placeholder}
                    />
                  )}
                </section>
              ))}

              {/* FAQ Section */}
              {content.faq_section && (
                <section className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-2 sm:mb-3 md:mb-4 md:mb-6">
                    {content.faq_section.heading}
                  </h2>
                  <div className="space-mobile">
                    {content.faq_section.questions?.map((qa: any, index: number) => (
                      <div key={index}>
                        <h3 className="mobile-text font-semibold text-gray-900 dark:text-white mb-2">
                          {qa.question}
                        </h3>
                        <div className="text-gray-700 dark:text-gray-300">
                          <ContentRenderer content={qa.answer} />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Conclusion */}
              {content.conclusion && (
                <section className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-xl">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
                    Fazit und nächste Schritte
                  </h2>
                  <div className="text-gray-700 dark:text-gray-300">
                    {content.conclusion}
                  </div>
                </section>
              )}
            </div>

            {/* EEAT Author Section */}
            {author && <AuthorEEAT author={author} />}

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/odoo"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Zurück zur Übersicht</span>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}