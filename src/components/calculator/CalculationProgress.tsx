"use client"

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle } from 'lucide-react'

interface CalculationProgressProps {
  isCalculating: boolean
  onComplete: () => void
}

const calculationSteps = [
  'Branchenspezifische Anforderungen analysieren...',
  'Odoo Enterprise Lizenzkosten ermitteln...',
  'Server-Infrastruktur dimensionieren...',
  'Support-Level bestimmen...',
  'Hosting-Anbieter vergleichen...',
  'Gesamtkosten kalkulieren...'
]

export default function CalculationProgress({ isCalculating, onComplete }: CalculationProgressProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  useEffect(() => {
    if (!isCalculating) {
      setCurrentStep(0)
      setCompletedSteps([])
      return
    }

    const stepDuration = 400 // milliseconds per step
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < calculationSteps.length - 1) {
          setCompletedSteps(completed => [...completed, prev])
          return prev + 1
        } else {
          clearInterval(timer)
          setTimeout(() => {
            setCompletedSteps(completed => [...completed, prev])
            onComplete()
          }, stepDuration)
          return prev
        }
      })
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isCalculating, onComplete])

  if (!isCalculating) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ className="gpu-accelerate" opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ className="gpu-accelerate" scale: 1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 max-w-md w-full"
        >
          <h3 className="mobile-text mobile-text font-bold text-gray-900 dark:text-white mb-3 sm:mb-2 sm:mb-3 md:mb-4 md:mb-6 text-center">
            Berechne optimale Hosting-Lösung...
          </h3>
          
          <div className="space-y-3">
            {calculationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ className="gpu-accelerate" opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0">
                  {completedSteps.includes(index) ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ className="gpu-accelerate" scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </motion.div>
                  ) : index === currentStep ? (
                    <Loader2 className="w-5 h-5 text-violet-600 animate-spin" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                  )}
                </div>
                <span
                  className={`text-sm ${
                    completedSteps.includes(index)
                      ? 'text-green-600 dark:text-green-400 font-medium'
                      : index === currentStep
                      ? 'text-violet-600 dark:text-violet-400 font-medium'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {step}
                </span>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full min-h-svh bg-gradient-to-r from-violet-600 to-purple-600"
                initial={{ width: '0%' }}
                animate={{ className="gpu-accelerate" width: `${((currentStep + 1) / calculationSteps.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}