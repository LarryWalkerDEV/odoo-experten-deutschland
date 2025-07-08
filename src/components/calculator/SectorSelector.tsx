"use client"

import React from 'react'
import { sectors } from '@/data/hostingProviders'

interface SectorSelectorProps {
  value: string
  onChange: (value: string) => void
}

export default function SectorSelector({ value, onChange }: SectorSelectorProps) {
  return (
    <div className="space-y-3">
      <label htmlFor="sector" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Branche auswählen
      </label>
      <select
        id="sector"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
      >
        <option value="">Bitte wählen Sie Ihre Branche</option>
        {sectors.map((sector) => (
          <option key={sector.id} value={sector.id}>
            {sector.icon} {sector.name}
          </option>
        ))}
      </select>
      {value && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {sectors.find(s => s.id === value)?.complexity === 'high' 
            ? '⚠️ Ihre Branche hat komplexe Anforderungen'
            : '✅ Standardlösung für Ihre Branche verfügbar'}
        </p>
      )}
    </div>
  )
}