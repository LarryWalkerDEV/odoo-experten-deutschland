"use client"

import React from 'react'

interface DataVisualizationProps {
  type: string
  data?: any
  title?: string
}

export default function DataVisualization({ type, data, title }: DataVisualizationProps) {
  // If the type contains actual SVG markup, render it directly
  if (type && type.includes('<svg') || type.includes('<div')) {
    return (
      <div className="my-4 sm:my-6 md:my-8 visual-container">
        <div dangerouslySetInnerHTML={{ __html: type }} className="w-full h-full" />
      </div>
    )
  }
  
  // Generate unique IDs for gradients to avoid conflicts
  const uniqueId = `gradient-${Math.random().toString(36).substr(2, 9)}`
  
  const renderVisualization = () => {
    // Map title keywords to visualization types
    const normalizedType = type.toLowerCase()
    
    if (normalizedType.includes('performance') || normalizedType.includes('steigerung')) {
      return (
        <svg viewBox="0 0 800 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`${uniqueId}-performance`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <line
              key={i}
              x1="100"
              y1={80 + i * 60}
              x2="700"
              y2={80 + i * 60}
              stroke="#E5E7EB"
              strokeDasharray="5,5"
            />
          ))}
          
          {/* Bars */}
          <rect x="150" y="200" width="100" height="120" fill="#E5E7EB" rx="8" />
          <rect x="300" y="140" width="100" height="180" fill="#A78BFA" rx="8" />
          <rect x="450" y="80" width="100" height="240" fill={`url(#${uniqueId}-performance)`} rx="8" />
          
          {/* Labels */}
          <text x="200" y="350" textAnchor="middle" className="fill-gray-700 text-sm font-medium">Odoo 17</text>
          <text x="350" y="350" textAnchor="middle" className="fill-gray-700 text-sm font-medium">Odoo 18</text>
          <text x="500" y="350" textAnchor="middle" className="fill-gray-700 text-sm font-medium">Odoo 19</text>
          
          {/* Values */}
          <text x="200" y="190" textAnchor="middle" className="fill-gray-900 mobile-text font-bold">100%</text>
          <text x="350" y="130" textAnchor="middle" className="fill-gray-900 mobile-text font-bold">125%</text>
          <text x="500" y="70" textAnchor="middle" className="fill-violet-600 mobile-text font-bold">140%</text>
          
          {/* Title */}
          <text x="400" y="30" textAnchor="middle" className="fill-gray-900 mobile-text mobile-text font-bold">
            Performance-Steigerung in Odoo 19
          </text>
        </svg>
      )
    }
    
    if (normalizedType.includes('timeline') || normalizedType.includes('roadmap') || normalizedType.includes('entwicklung')) {
      return (
        <svg viewBox="0 0 800 300" className="w-full h-full min-h-svh" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`${uniqueId}-timeline`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          
          {/* Timeline line */}
          <line x1="100" y1="150" x2="700" y2="150" stroke={`url(#${uniqueId}-timeline)`} strokeWidth="3" />
          
          {/* Timeline points */}
          {[
            { x: 200, label: 'Q1 2024', feature: 'KI-Integration' },
            { x: 350, label: 'Q2 2024', feature: 'UI/UX Update' },
            { x: 500, label: 'Q3 2024', feature: 'Performance' },
            { x: 650, label: 'Q4 2024', feature: 'Release' }
          ].map((point, i) => (
            <g key={i}>
              <circle cx={point.x} cy="150" r="12" fill="#8B5CF6" />
              <circle cx={point.x} cy="150" r="6" fill="white" />
              <text x={point.x} y="190" textAnchor="middle" className="fill-gray-700 text-sm">
                {point.label}
              </text>
              <text x={point.x} y="120" textAnchor="middle" className="fill-gray-900 text-sm font-medium">
                {point.feature}
              </text>
            </g>
          ))}
          
          <text x="400" y="40" textAnchor="middle" className="fill-gray-900 mobile-text mobile-text font-bold">
            Odoo 19 Entwicklungs-Roadmap
          </text>
        </svg>
      )
    }
    
    if (normalizedType.includes('roi') || normalizedType.includes('return') || normalizedType.includes('investment')) {
      return (
        <svg viewBox="0 0 800 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`${uniqueId}-roi`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Area chart */}
          <path
            d="M 100 300 L 200 280 L 300 240 L 400 180 L 500 120 L 600 80 L 700 60 L 700 320 L 100 320 Z"
            fill={`url(#${uniqueId}-roi)`}
          />
          <path
            d="M 100 300 L 200 280 L 300 240 L 400 180 L 500 120 L 600 80 L 700 60"
            fill="none"
            stroke="#10B981"
            strokeWidth="3"
          />
          
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <line
              key={i}
              x1="100"
              y1={80 + i * 60}
              x2="700"
              y2={80 + i * 60}
              stroke="#E5E7EB"
              strokeDasharray="5,5"
              strokeOpacity="0.5"
            />
          ))}
          
          {/* Labels */}
          <text x="100" y="350" className="fill-gray-700 text-sm">0 Monate</text>
          <text x="700" y="350" textAnchor="end" className="fill-gray-700 text-sm">12 Monate</text>
          
          {/* ROI Percentage */}
          <text x="600" y="50" className="fill-green-600 text-2xl font-bold">+240% ROI</text>
          
          {/* Title */}
          <text x="400" y="30" textAnchor="middle" className="fill-gray-900 mobile-text mobile-text font-bold">
            Return on Investment mit Odoo 19
          </text>
        </svg>
      )
    }
    
    // Default chart - bar chart
    return (
      <svg viewBox="0 0 800 400" className="w-full h-full min-h-svh" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`${uniqueId}-default`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map(i => (
          <line
            key={i}
            x1="100"
            y1={80 + i * 60}
            x2="700"
            y2={80 + i * 60}
            stroke="#E5E7EB"
            strokeDasharray="5,5"
          />
        ))}
        
        {/* Bars */}
        <rect x="150" y="180" width="80" height="140" fill="#A78BFA" rx="8" />
        <rect x="260" y="220" width="80" height="100" fill="#8B5CF6" rx="8" />
        <rect x="370" y="160" width="80" height="160" fill={`url(#${uniqueId}-default)`} rx="8" />
        <rect x="480" y="200" width="80" height="120" fill="#7C3AED" rx="8" />
        <rect x="590" y="140" width="80" height="180" fill="#6D28D9" rx="8" />
        
        {/* Title */}
        <text x="400" y="30" textAnchor="middle" className="fill-gray-900 mobile-text mobile-text font-bold">
          {title || 'Datenanalyse'}
        </text>
        
        {/* Y-axis label */}
        <text x="50" y="200" textAnchor="middle" className="fill-gray-700 text-sm" transform="rotate(-90 50 200)">
          Wert
        </text>
        
        {/* X-axis labels */}
        <text x="190" y="350" textAnchor="middle" className="fill-gray-700 text-sm">Jan</text>
        <text x="300" y="350" textAnchor="middle" className="fill-gray-700 text-sm">Feb</text>
        <text x="410" y="350" textAnchor="middle" className="fill-gray-700 text-sm">Mär</text>
        <text x="520" y="350" textAnchor="middle" className="fill-gray-700 text-sm">Apr</text>
        <text x="630" y="350" textAnchor="middle" className="fill-gray-700 text-sm">Mai</text>
      </svg>
    )
  }

  return (
    <div className="my-8 bg-gray-50 dark:bg-gray-800 mobile-card rounded-lg sm:rounded-xl">
      <div className="w-full h-[400px]">
        {renderVisualization()}
      </div>
    </div>
  )
}