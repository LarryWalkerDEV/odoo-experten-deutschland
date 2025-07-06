"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, Award, TrendingUp, BookOpen } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-violet-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust badges */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">198+</span> fundierte Artikel verfügbar
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Das umfassende{' '}
              <span className="gradient-text">Odoo Wissensportal</span>{' '}
              für Deutschland
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Neutrale, fundierte Informationen zu Odoo ERP. Treffen Sie informierte Entscheidungen 
              mit unserem unabhängigen Expertenwissen.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                100% Unabhängig
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                Neutrale Berichterstattung
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                Aktuelle Informationen
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                Kostenlos zugänglich
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/odoo"
                className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Wissen erkunden
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/odoo-19"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-700"
              >
                <Star className="w-5 h-5" />
                Odoo 19 Neuheiten
              </Link>
            </div>
          </motion.div>

          {/* Stats/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <BookOpen className="w-8 h-8 text-violet-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">198</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Fachartikel</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <Award className="w-8 h-8 text-violet-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">3</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Kategorien</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <TrendingUp className="w-8 h-8 text-violet-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">2025</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Aktuell</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <Users className="w-8 h-8 text-violet-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">3</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Experten</div>
              </motion.div>
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 glass rounded-2xl p-6"
            >
              <div className="flex items-start gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                "Die umfassenden Artikel haben uns geholfen, die richtige Entscheidung für unser 
                ERP-System zu treffen. Endlich neutrale Informationen ohne Verkaufsdruck."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Lisa Müller</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">IT-Leiterin, MittelstandsGmbH</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}