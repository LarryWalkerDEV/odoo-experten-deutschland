"use client"

import React from 'react'

interface EmployeeSliderProps {
  value: number
  onChange: (value: number) => void
}

export default function EmployeeSlider({ value, onChange }: EmployeeSliderProps) {
  const popularRanges = [
    { min: 1, max: 10, label: '1-10' },
    { min: 11, max: 25, label: '11-25' },
    { min: 26, max: 50, label: '26-50' },
    { min: 51, max: 100, label: '51-100' },
    { min: 101, max: 200, label: '100+' }
  ]

  const getCurrentRange = () => {
    return popularRanges.find(range => value >= range.min && value <= range.max)
  }

  const currentRange = getCurrentRange()

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="employees" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Anzahl Mitarbeiter
        </label>
        <div className="text-center mb-2 sm:mb-3 md:mb-4">
          <span className="text-3xl font-bold text-violet-600 dark:text-violet-400">
            {value}
          </span>
          <span className="mobile-text text-gray-600 dark:text-gray-400 ml-2">
            Mitarbeiter
          </span>
        </div>
      </div>
      
      <div className="relative">
        <input
          type="range"
          id="employees"
          min="1"
          max="200"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, #8B5CF6 0%, #8B5CF6 ${(value / 200) * 100}%, #E5E7EB ${(value / 200) * 100}%, #E5E7EB 100%)`
          }}
        />
        
        {/* Popular range indicators */}
        <div className="flex justify-between mt-2 text-xs text-gray-600 dark:text-gray-400">
          {popularRanges.map((range) => (
            <span
              key={range.label}
              className={`cursor-pointer hover:text-violet-600 ${
                currentRange?.label === range.label ? 'text-violet-600 font-semibold' : ''
              }`}
              onClick={() => onChange(range.min)}
            >
              {range.label}
            </span>
          ))}
        </div>
      </div>

      {currentRange && (
        <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-3 mt-4">
          <p className="text-sm text-violet-700 dark:text-violet-300">
            <strong>Empfohlene Kategorie:</strong> {currentRange.label} Mitarbeiter
            {value <= 10 && ' - Ideal für Startups und kleine Teams'}
            {value > 10 && value <= 25 && ' - Perfekt für wachsende Unternehmen'}
            {value > 25 && value <= 50 && ' - Mittelständische Unternehmen'}
            {value > 50 && ' - Enterprise-Lösungen erforderlich'}
          </p>
        </div>
      )}
    </div>
  )
}