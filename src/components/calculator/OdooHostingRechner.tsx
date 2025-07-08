"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectorSelector from './SectorSelector'
import EmployeeSlider from './EmployeeSlider'
import CalculationProgress from './CalculationProgress'
import ComparisonTable from './ComparisonTable'
import SEOContent from './SEOContent'
import { hostingProviders, getRecommendation } from '@/data/hostingProviders'
import { Calculator, Sparkles } from 'lucide-react'

export default function OdooHostingRechner() {
  const [sector, setSector] = useState('')
  const [employees, setEmployees] = useState(10)
  const [isCalculating, setIsCalculating] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [recommendedId, setRecommendedId] = useState('')

  const handleCalculate = () => {
    if (!sector) return
    
    setIsCalculating(true)
    setShowResults(false)
  }

  const handleCalculationComplete = () => {
    setIsCalculating(false)
    setShowResults(true)
    const recommended = getRecommendation(employees, sector)
    setRecommendedId(recommended)
  }

  const providers = Object.values(hostingProviders)

  return (
    <div className="max-w-full md:max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 dark:bg-violet-900/30 rounded-full text-violet-700 dark:text-violet-300 font-medium mb-2 sm:mb-3 md:mb-4"
        >
          <Sparkles className="w-4 h-4" />
          <span>Kostenloser Hosting-Vergleich</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:mobile-headline font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4"
        >
          Odoo Hosting Rechner
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mobile-text mobile-text text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          Finden Sie die beste Hosting-Lösung für Ihr Unternehmen. 
          Vergleichen Sie 7 Anbieter mit transparenten Preisen.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:responsive-grid gap-2 sm:gap-3 md:gap-4 sm:gap-3 sm:gap-2 sm:gap-3 md:gap-4 md:gap-6 md:gap-8 mb-12">
        {/* Calculator Input */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ className="gpu-accelerate" opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-2 sm:mb-3 md:mb-4 md:mb-6 flex items-center gap-2">
            <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />
            Ihre Anforderungen
          </h2>
          
          <div className="space-mobile">
            <SectorSelector value={sector} onChange={setSector} />
            <EmployeeSlider value={employees} onChange={setEmployees} />
            
            <button className="touch-target"
              onClick={handleCalculate}
              disabled={!sector}
              className={`
                w-full py-4 px-6 rounded-lg font-medium text-white transition-all duration-200 sm:duration-200 sm:duration-300
                ${sector 
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:shadow-lg transform active:scale-95 sm:hover:scale-105' 
                  : 'bg-gray-400 cursor-not-allowed'
                }
              `}
            >
              Hosting-Kosten berechnen
            </button>
          </div>
        </motion.div>

        {/* Quick Benefits */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ className="gpu-accelerate" opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-mobile"
        >
          {/* Compact Benefits Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h3 className="text-center font-bold mb-3 text-gray-900 dark:text-white">
              ⚡ Warum professionelles Hosting wählen?
            </h3>
            <div className="grid responsive-grid gap-3 text-xs">
              <span className="bg-blue-100 dark:bg-blue-900/30 px-3 py-2 rounded text-center">
                <strong className="text-blue-700 dark:text-blue-300">24/7</strong> Support
              </span>
              <span className="bg-green-100 dark:bg-green-900/30 px-3 py-2 rounded text-center">
                <strong className="text-green-700 dark:text-green-300">GDPR</strong> Konform
              </span>
              <span className="bg-purple-100 dark:bg-purple-900/30 px-3 py-2 rounded text-center">
                <strong className="text-purple-700 dark:text-purple-300">Enterprise</strong> Features
              </span>
              <span className="bg-yellow-100 dark:bg-yellow-900/30 px-3 py-2 rounded text-center">
                <strong className="text-yellow-700 dark:text-yellow-300">Backup</strong> Inklusive
              </span>
            </div>
          </div>

          {/* Key Considerations */}
          <div className="bg-violet-50 dark:bg-violet-900/20 mobile-card rounded-lg sm:rounded-xl">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
              Wichtige Überlegungen
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-violet-600 mobile-text mobile-text">💰</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Versteckte Kosten vermeiden</strong>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Self-Hosting benötigt oft €1000-3000 für Setup + laufende Entwicklerkosten
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-600 mobile-text mobile-text">🔒</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">DSGVO-Compliance</strong>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Wählen Sie Anbieter mit EU-Servern oder entsprechenden Datenschutzabkommen
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-600 mobile-text mobile-text">📈</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Skalierbarkeit</strong>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ihr Hosting sollte mit Ihrem Unternehmen mitwachsen können
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Statistics */}
          <div className="grid responsive-grid gap-2 sm:gap-3 md:gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
              <div className="text-3xl font-bold text-violet-600 mb-1">7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Anbieter im Vergleich</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
              <div className="text-3xl font-bold text-violet-600 mb-1">€18</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Ab pro Monat</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
              <div className="text-3xl font-bold text-violet-600 mb-1">99.9%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Uptime Garantie</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
              <div className="text-3xl font-bold text-violet-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Support verfügbar</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Calculation Progress */}
      <CalculationProgress 
        isCalculating={isCalculating} 
        onComplete={handleCalculationComplete}
      />

      {/* Results */}
      {showResults && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-mobile"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Ihre persönliche Empfehlung
            </h2>
            <p className="mobile-text text-gray-600 dark:text-gray-400">
              Basierend auf {employees} Mitarbeitern in der Branche {sector}
            </p>
          </div>

          <ComparisonTable 
            providers={providers}
            employees={employees}
            recommendedId={recommendedId}
          />

          {/* Additional Info */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
            <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-2">
              💡 Profi-Tipp
            </h3>
            <p className="text-amber-700 dark:text-amber-300">
              Die angezeigten Preise sind Richtwerte. Viele Anbieter bieten individuelle Pakete für größere 
              Unternehmen. Kontaktieren Sie die Anbieter direkt für ein maßgeschneidertes Angebot!
            </p>
          </div>
        </motion.div>
      )}

      {/* SEO Content */}
      <SEOContent />
    </div>
  )
}