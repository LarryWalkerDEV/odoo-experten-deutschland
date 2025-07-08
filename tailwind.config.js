import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Business Content Colors
      colors: {
        primary: '#FF6B35', // Vibrant Orange
        secondary: '#000000', // Pure Black
        accent: '#FFFFFF', // Clean White
        'primary-50': '#FFF4F1',
        'primary-100': '#FFE6DD',
        'primary-500': '#FF6B35',
        'primary-900': '#B8341A'
      },
      
      // Mobile-First Spacing
      spacing: {
        '35': '140px',   // 320px breakpoint
        '44': '176px',   // 480px breakpoint
        '52': '208px',   // 640px breakpoint
        '68': '272px',   // 768px breakpoint
        '84': '336px',   // 1024px breakpoint
        '100': '400px'   // 1280px+ breakpoint
      },
      
      // Responsive Heights
      height: {
        'svh': '100svh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '60vh': '60vh',
        '80vh': '80vh'
      },
      
      // Min/Max Heights
      minHeight: {
        'svh': '100svh',
        '44': '44px', // Touch targets
        '160': '160px' // Min visualization height
      },
      
      maxHeight: {
        '20vh': '20vh' // Headline constraint
      },
      
      // Container Queries
      container: {
        center: true,
        padding: {
          DEFAULT: '0.5rem',
          sm: '1rem',
          md: '1.5rem',
          lg: '2rem',
          xl: '2.5rem'
        }
      },
      
      // Animation Optimizations
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'scale-in': 'scaleIn 0.2s ease-out'
      },
      
      // Breakpoint-specific font sizes
      fontSize: {
        'responsive-xs': ['clamp(0.75rem, 2vw, 0.875rem)', '1.4'],
        'responsive-sm': ['clamp(0.875rem, 2.5vw, 1.125rem)', '1.5'],
        'responsive-base': ['clamp(1rem, 3vw, 1.25rem)', '1.6'],
        'responsive-lg': ['clamp(1.125rem, 3.5vw, 1.5rem)', '1.4'],
        'responsive-xl': ['clamp(1.25rem, 4vw, 2rem)', '1.3'],
        'responsive-2xl': ['clamp(1.5rem, 5vw, 3rem)', '1.2'],
        'responsive-3xl': ['clamp(2rem, 6vw, 4rem)', '1.1']
      },
      
      // Adding transformations
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      
      // Z-index system
      zIndex: {
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
      }
    },
    
    // Mobile-first breakpoints
    screens: {
      'xs': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }
  },
  
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    
    // Custom mobile-first utilities
    function({ addUtilities }: any) {
      addUtilities({
        '.contain-layout': {
          contain: 'layout'
        },
        '.contain-style': {
          contain: 'style'
        },
        '.contain-paint': {
          contain: 'paint'
        },
        '.contain-strict': {
          contain: 'layout style paint'
        },
        '.touch-manipulation': {
          'touch-action': 'manipulation'
        },
        '.transform-gpu': {
          transform: 'translateZ(0)'
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden'
        },
        '.break-words': {
          'word-wrap': 'break-word',
          'overflow-wrap': 'break-word'
        },
        '.hyphens-auto': {
          hyphens: 'auto'
        }
      })
    }
  ]
}

export default config