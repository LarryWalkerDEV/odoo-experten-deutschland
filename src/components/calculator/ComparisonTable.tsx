"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HostingProvider, calculatePrice } from '@/data/hostingProviders'
import { Star, AlertTriangle, TrendingUp, ArrowUpDown, ChevronDown, ChevronUp } from 'lucide-react'

interface ComparisonTableProps {
  providers: HostingProvider[]
  employees: number
  recommendedId: string
}

type SortKey = 'price' | 'rating' | 'name'

export default function ComparisonTable({ providers, employees, recommendedId }: ComparisonTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('price')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [expandedProvider, setExpandedProvider] = useState<string | null>(null)

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortOrder('asc')
    }
  }

  const sortedProviders = [...providers].sort((a, b) => {
    const priceA = calculatePrice(a, employees).monthly
    const priceB = calculatePrice(b, employees).monthly

    switch (sortKey) {
      case 'price':
        return sortOrder === 'asc' ? priceA - priceB : priceB - priceA
      case 'rating':
        return sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating
      case 'name':
        return sortOrder === 'asc' 
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      default:
        return 0
    }
  })

  const prices = providers.map(p => calculatePrice(p, employees).monthly).filter(price => price > 0)
  const lowestPrice = prices.length > 0 ? Math.min(...prices) : 0

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-4 text-left">
                <button
                  onClick={() => handleSort('name')}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-violet-600"
                >
                  Anbieter
                  <ArrowUpDown className="w-4 h-4" />
                </button>
              </th>
              <th className="px-6 py-4 text-left">
                <button
                  onClick={() => handleSort('price')}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-violet-600"
                >
                  Monatl. Kosten
                  <ArrowUpDown className="w-4 h-4" />
                </button>
              </th>
              <th className="px-6 py-4 text-left hidden md:table-cell">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Setup-Gebühr
                </span>
              </th>
              <th className="px-6 py-4 text-left hidden lg:table-cell">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Support
                </span>
              </th>
              <th className="px-6 py-4 text-left hidden lg:table-cell">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Standort
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <button
                  onClick={() => handleSort('rating')}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-violet-600"
                >
                  Bewertung
                  <ArrowUpDown className="w-4 h-4" />
                </button>
              </th>
              <th className="px-6 py-4 text-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Aktion
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {sortedProviders.map((provider, index) => {
              const pricing = calculatePrice(provider, employees)
              const isRecommended = provider.id === recommendedId
              const priceDifference = lowestPrice > 0 && pricing.monthly > 0 
                ? ((pricing.monthly - lowestPrice) / lowestPrice) * 100
                : 0
              const isExpanded = expandedProvider === provider.id

              return (
                <React.Fragment key={provider.id}>
                  <motion.tr
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`
                      ${isRecommended ? 'bg-violet-50 dark:bg-violet-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'}
                      transition-colors cursor-pointer
                    `}
                    onClick={() => setExpandedProvider(isExpanded ? null : provider.id)}
                  >
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {provider.name}
                          </span>
                          {isRecommended && (
                            <span className="px-2 py-1 text-xs font-medium bg-violet-600 text-white rounded-full">
                              Empfohlen
                            </span>
                          )}
                        </div>
                        {provider.highlight && (
                          <span className="text-xs text-violet-600 dark:text-violet-400 mt-1">
                            {provider.highlight}
                          </span>
                        )}
                        {provider.developmentNote && (
                          <div className="flex items-center gap-1 mt-1">
                            <AlertTriangle className="w-3 h-3 text-yellow-600" />
                            <span className="text-xs text-yellow-600 dark:text-yellow-400">
                              Entwickler benötigt
                            </span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          €{pricing.monthly}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          pro Monat
                        </span>
                        {priceDifference > 0 && (
                          <span className="text-xs text-gray-500 mt-1">
                            +{priceDifference.toFixed(0)}% vs. günstigster
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="text-gray-700 dark:text-gray-300">
                        {pricing.setupFee > 0 ? `€${pricing.setupFee}` : 'Keine'}
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {provider.supportLevel || 'Community'}
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <span className="text-gray-700 dark:text-gray-300">
                        {provider.location}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(provider.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          />
                        ))}
                        <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                          {provider.rating}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <a
                          href={provider.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-sm font-medium transition-colors"
                        >
                          Anfragen
                        </a>
                        <button className="text-gray-500 hover:text-gray-700">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                  
                  {/* Expanded Details */}
                  {isExpanded && (
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td colSpan={7} className="px-6 py-4">
                        <div className="space-y-4">
                          {/* Features */}
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                              Hauptmerkmale:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {provider.features.map((feature, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Unique Features */}
                          {provider.uniqueFeatures && (
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                                Besondere Vorteile:
                              </h4>
                              <ul className="list-disc list-inside space-y-1">
                                {provider.uniqueFeatures.map((feature, idx) => (
                                  <li key={idx} className="text-sm text-gray-700 dark:text-gray-300">
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {/* Development Warning */}
                          {provider.developmentNote && (
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                                <div>
                                  <p className="font-medium text-yellow-800 dark:text-yellow-200">
                                    Entwicklerkosten beachten:
                                  </p>
                                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                                    {provider.developmentNote}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {/* Pricing Details */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Monatlich</p>
                              <p className="text-xl font-bold text-gray-900 dark:text-white">
                                €{pricing.monthly}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Jährlich</p>
                              <p className="text-xl font-bold text-gray-900 dark:text-white">
                                €{pricing.yearly}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Ersparnis/Jahr</p>
                              <p className="text-xl font-bold text-green-600 dark:text-green-400">
                                €{pricing.monthly * 12 - pricing.yearly}
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}