"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Odoo',
    href: '/odoo',
    submenu: [
      { name: 'Alle Artikel', href: '/odoo' },
      { name: 'Grundlagen', href: '/odoo?filter=grundlagen' },
      { name: 'Module', href: '/odoo?filter=module' },
      { name: 'Implementierung', href: '/odoo?filter=implementierung' },
    ]
  },
  {
    name: 'Odoo 19',
    href: '/odoo-19',
    submenu: [
      { name: 'Neue Features', href: '/odoo-19' },
      { name: 'KI-Integration', href: '/odoo-19?filter=ki' },
      { name: 'Migration', href: '/odoo-19?filter=migration' },
    ]
  },
  {
    name: 'Hosting',
    href: '/odoo-hosting',
    submenu: [
      { name: 'Hosting-Vergleich', href: '/odoo-hosting' },
      { name: 'Kostenrechner', href: '/odoo-hosting-rechner' },
      { name: 'Cloud vs On-Premise', href: '/odoo-hosting?filter=cloud' },
      { name: 'Sicherheit', href: '/odoo-hosting?filter=security' },
    ]
  },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-200 sm:duration-300",
      scrolled ? "glass shadow-lg py-2" : "bg-transparent py-4"
    )}>
      <div className="max-w-full md:max-w-7xl mx-auto mobile-container overflow-hidden">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/Logo.png" 
              alt="Odoo Experten Deutschland Logo" 
              width={40} 
              height={40}
              className="w-5 h-5 sm:w-6 sm:h-6 sm:w-8 sm:h-8 sm:w-10 sm:h-10"
              priority
            />
            <span className="mobile-text mobile-text font-bold gradient-text">Odoo Experten</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setOpenSubmenu(item.name)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1",
                    pathname === item.href || pathname.startsWith(item.href + '/')
                      ? "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  )}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Submenu */}
                <AnimatePresence>
                  {item.submenu && openSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ className="gpu-accelerate" opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-full sm:w-56 md:w-64 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-2 sm:gap-3 md:gap-4">
            <Link
              href="/odoo-hosting-rechner"
              className="px-4 sm:px-6 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform active:scale-95 sm:hover:scale-105 transition-all duration-200 sm:duration-200 sm:duration-300"
            >
              Kostenrechner
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="touch-target"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ className="gpu-accelerate" opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      pathname === item.href || pathname.startsWith(item.href + '/')
                        ? "bg-primary/10 text-primary"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/odoo-hosting-rechner"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full px-4 sm:touch-target px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg font-medium text-center mt-4"
              >
                Kostenrechner
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}