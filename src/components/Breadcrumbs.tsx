import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://odoo-experten-deutschland.de'
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.href && { item: `https://odoo-experten-deutschland.de${item.href}` })
      }))
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <nav aria-label="Breadcrumb" className="mb-3 sm:mb-2 sm:mb-3 md:mb-4 md:mb-6">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          <li className="flex items-center">
            <Link 
              href="/" 
              className="text-gray-500 hover:text-violet-600 transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
              {item.href ? (
                <Link 
                  href={item.href}
                  className="text-gray-500 hover:text-violet-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}