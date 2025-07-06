"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Cookie } from 'lucide-react'

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setShowBanner(true)
    } else {
      // Apply saved preferences
      const savedPreferences = JSON.parse(cookieConsent)
      applyCookiePreferences(savedPreferences)
    }
  }, [])

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // Apply preferences (e.g., enable/disable analytics)
    if (prefs.analytics) {
      // Enable analytics cookies
      console.log('Analytics cookies enabled')
    }
    if (prefs.marketing) {
      // Enable marketing cookies
      console.log('Marketing cookies enabled')
    }
  }

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted))
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    applyCookiePreferences(allAccepted)
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary))
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    applyCookiePreferences(onlyNecessary)
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    applyCookiePreferences(preferences)
    setShowBanner(false)
    setShowDetails(false)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center">
                <Cookie className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Cookie-Einstellungen
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
                Einige Cookies sind technisch notwendig, während andere uns helfen, unsere Website 
                und Services zu optimieren. Sie haben die volle Kontrolle über Ihre Cookie-Einstellungen.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {/* Equal prominence for Accept and Reject buttons as required by EU law */}
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Nur notwendige
                </button>
                
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2.5 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors"
                >
                  Alle akzeptieren
                </button>
                
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="px-6 py-2.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Einstellungen anpassen
                </button>
                
                <Link
                  href="/cookie-richtlinien"
                  className="px-6 py-2.5 text-violet-600 dark:text-violet-400 hover:underline font-medium flex items-center"
                >
                  Cookie-Richtlinien
                </Link>
              </div>
            </div>
            
            <button
              onClick={() => setShowBanner(false)}
              className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              aria-label="Banner schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Detailed Settings */}
          {showDetails && (
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
                Cookie-Kategorien
              </h4>
              
              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-1">
                      Notwendige Cookies
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="w-5 h-5 text-violet-600 border-gray-300 rounded cursor-not-allowed opacity-60"
                    />
                  </div>
                </div>
                
                {/* Analytics Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-1">
                      Analyse-Cookies
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="w-5 h-5 text-violet-600 border-gray-300 rounded focus:ring-violet-500"
                    />
                  </div>
                </div>
                
                {/* Marketing Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-1">
                      Marketing-Cookies
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Diese Cookies werden verwendet, um Werbung relevanter für Sie und Ihre Interessen zu gestalten.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="w-5 h-5 text-violet-600 border-gray-300 rounded focus:ring-violet-500"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2.5 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors"
                >
                  Einstellungen speichern
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}