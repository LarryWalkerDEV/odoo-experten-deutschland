interface ArticleStructuredDataProps {
  title: string
  description: string
  author: {
    name: string
    url?: string
  }
  datePublished: string
  dateModified?: string
  image?: string
  url: string
  category: string
}

export function ArticleStructuredData({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
  category
}: ArticleStructuredDataProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author.name,
      ...(author.url && { url: author.url })
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    publisher: {
      '@type': 'Organization',
      name: 'Odoo Experten Deutschland',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/Logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image
      }
    }),
    articleSection: category,
    inLanguage: 'de-DE'
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface OrganizationStructuredDataProps {
  name: string
  url: string
  logo: string
  sameAs?: string[]
}

export function OrganizationStructuredData({
  name,
  url,
  logo,
  sameAs = []
}: OrganizationStructuredDataProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: name,
    url: url,
    logo: logo,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@odoo-experten-deutschland.de',
      contactType: 'customer service',
      availableLanguage: ['German', 'English']
    },
    sameAs: sameAs,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sheridan',
      addressRegion: 'Wyoming',
      addressCountry: 'US',
      streetAddress: '1309 Coffeen Avenue STE 1200'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface WebsiteStructuredDataProps {
  name: string
  url: string
  description: string
}

export function WebsiteStructuredData({
  name,
  url,
  description
}: WebsiteStructuredDataProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: name,
    url: url,
    description: description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}