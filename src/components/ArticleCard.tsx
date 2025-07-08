"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ArticleCardProps {
  article: {
    id: string
    title: string
    meta_description: string
    slug?: string
    url_slug: string
    category?: string
    author?: string
    author_id?: string
    created_at: string
    word_count: number
  }
  author?: {
    name: string
    image_url?: string
    title?: string
  }
  index?: number
}

export default function ArticleCard({ article, author, index = 0 }: ArticleCardProps) {
  const readTime = Math.ceil(article.word_count / 200)
  const articleUrl = `/${article.category || 'odoo'}/${article.slug || article.url_slug}`
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link href={articleUrl} className="block h-full">
        <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 sm:duration-300 overflow-hidden group">
          {/* Category Badge */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <span className={cn(
                "px-3 py-1 text-xs font-semibold rounded-full",
                article.category === 'odoo-19' && "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
                article.category === 'odoo-hosting' && "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
                (!article.category || article.category === 'odoo') && "bg-primary/10 text-primary"
              )}>
                {article.category === 'odoo-19' && 'Odoo 19'}
                {article.category === 'odoo-hosting' && 'Hosting'}
                {(!article.category || article.category === 'odoo') && 'Odoo'}
              </span>
            </div>

            {/* Gradient overlay */}
            <div className="h-48 bg-gradient-to-br from-primary/10 to-purple-600/10 dark:from-primary/20 dark:to-purple-600/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
              <motion.div
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
                animate={{ className="gpu-accelerate"
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 -mt-12 relative z-10">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="mobile-text mobile-text font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 md:mb-4 line-clamp-3">
                {article.meta_description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-3 md:mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.created_at).toLocaleDateString('de-DE', { 
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{readTime} Min. Lesezeit</span>
                </div>
              </div>

              {/* Author */}
              {author && (
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    {author.image_url ? (
                      <Image
                        src={author.image_url}
                        alt={author.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-5 h-5 sm:w-6 sm:h-6 sm:w-8 sm:h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {author.name}
                      </p>
                      {author.title && (
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {author.title}
                        </p>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}