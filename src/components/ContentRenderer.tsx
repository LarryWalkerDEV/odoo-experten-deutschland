import React from 'react'

interface ContentRendererProps {
  content: string
}

export default function ContentRenderer({ content }: ContentRendererProps) {
  // Process content to properly format links
  const processContent = (text: string) => {
    // Replace Odoo4Projects links with proper hyperlinks
    const linkPattern = /Anbieter wie Odoo4Projects \((https:\/\/[^)]+)\)/g
    let processedContent = text.replace(linkPattern, (match, url) => {
      return `Anbieter wie <a href="${url}" target="_blank" rel="dofollow" class="touch-target text-violet-600 hover:text-violet-700 underline font-medium">Odoo4Projects</a>`
    })
    
    // Also handle simpler patterns
    const simpleLinkPattern = /Odoo4Projects \((https:\/\/[^)]+)\)/g
    processedContent = processedContent.replace(simpleLinkPattern, (match, url) => {
      return `<a href="${url}" target="_blank" rel="dofollow" class="touch-target text-violet-600 hover:text-violet-700 underline font-medium">Odoo4Projects</a>`
    })
    
    return processedContent
  }
  
  return (
    <div 
      className="text-gray-700 dark:text-gray-300 leading-relaxed"
      dangerouslySetInnerHTML={{ __html: processContent(content) }}
    />
  )
}