import React from 'react'
import Image from 'next/image'
import { Award, Briefcase, BookOpen, Users, CheckCircle, Star, Linkedin } from 'lucide-react'

interface AuthorEEATProps {
  author: {
    name: string
    title: string
    bio: string
    image_url?: string
    experience?: string
    expertise?: string
    social_links?: {
      linkedin?: string
      twitter?: string
      github?: string
    }
  }
}

export default function AuthorEEAT({ author }: AuthorEEATProps) {
  // Parse expertise string into array
  const expertiseAreas = author.expertise?.split(', ') || []
  
  // EEAT credentials based on author
  const getCredentials = (name: string) => {
    if (name === 'Klaus Weber') {
      return {
        certifications: ['Odoo Certified Consultant', 'PMP Project Management Professional', 'ITIL Foundation'],
        achievements: ['200+ erfolgreiche Projekte', '98% Kundenzufriedenheit', 'Sprecher auf 20+ Fachkonferenzen'],
        experience: '15+ Jahre ERP-Erfahrung'
      }
    } else if (name === 'Sandra Weber') {
      return {
        certifications: ['Odoo Technical Certification', 'Master in Wirtschaftsinformatik', 'Scrum Master'],
        achievements: ['Autorin von 50+ Fachartikeln', '10 Jahre Odoo-Erfahrung', 'Top-Referentin bei Odoo Experience'],
        experience: '10+ Jahre Odoo-Expertise'
      }
    } else if (name === 'Michael Schneider') {
      return {
        certifications: ['AWS Solutions Architect', 'Odoo Partner Certification', 'Digital Transformation Expert'],
        achievements: ['Pioneer in Cloud-ERP Integration', '15+ Jahre Führungserfahrung', 'Keynote Speaker Digital Summit'],
        experience: '12+ Jahre digitale Transformation'
      }
    }
    return {
      certifications: [],
      achievements: [],
      experience: author.experience || ''
    }
  }

  const credentials = getCredentials(author.name)

  return (
    <div className="mt-16 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-violet-200 dark:border-violet-800">
      {/* Author Header */}
      <div className="flex items-start gap-3 sm:gap-2 sm:gap-3 md:gap-4 md:gap-6 mb-2 sm:mb-3 md:mb-4 sm:mb-3 sm:mb-2 sm:mb-3 md:mb-4 md:mb-6 md:mb-8">
        {author.image_url ? (
          <Image
            src={author.image_url}
            alt={author.name}
            width={80}
            height={80}
            className="rounded-xl object-cover shadow-lg"
          />
        ) : (
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-white">{author.name.charAt(0)}</span>
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {author.name}
              </h3>
              <p className="mobile-text text-violet-600 dark:text-violet-400 font-medium mb-3">
                {author.title}
              </p>
            </div>
            {author.social_links?.linkedin && (
              <a
                href={author.social_links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                aria-label={`LinkedIn Profil von ${author.name}`}
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            )}
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {author.bio}
          </p>
        </div>
      </div>

      {/* EEAT Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 sm:responsive-grid lg:grid-cols-3 gap-3 sm:gap-2 sm:gap-3 md:gap-4 md:gap-6">
        {/* Expertise */}
        <div className="bg-white dark:bg-gray-800 mobile-card rounded-lg sm:rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-2 sm:mb-3 md:mb-4">
            <div className="w-5 h-5 sm:w-6 sm:h-6 sm:w-8 sm:h-8 sm:w-10 sm:h-10 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Expertise</h4>
          </div>
          <ul className="space-y-2">
            {expertiseAreas.map((area, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Experience & Authority */}
        <div className="bg-white dark:bg-gray-800 mobile-card rounded-lg sm:rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-2 sm:mb-3 md:mb-4">
            <div className="w-5 h-5 sm:w-6 sm:h-6 sm:w-8 sm:h-8 sm:w-10 sm:h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Autorität</h4>
          </div>
          <ul className="space-y-2">
            {credentials.certifications.map((cert, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Trustworthiness */}
        <div className="bg-white dark:bg-gray-800 mobile-card rounded-lg sm:rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-2 sm:mb-3 md:mb-4">
            <div className="w-5 h-5 sm:w-6 sm:h-6 sm:w-8 sm:h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Vertrauenswürdigkeit</h4>
          </div>
          <ul className="space-y-2">
            {credentials.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Trust Signals */}
      <div className="mt-6 pt-6 border-t border-violet-200 dark:border-violet-800">
        <div className="flex flex-wrap items-center gap-3 sm:gap-2 sm:gap-3 md:gap-4 md:gap-6 text-sm">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-violet-600" />
            <span className="text-gray-700 dark:text-gray-300">Regelmäßig aktualisierte Inhalte</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-violet-600" />
            <span className="text-gray-700 dark:text-gray-300">Zertifizierter Odoo-Experte</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-violet-600" />
            <span className="text-gray-700 dark:text-gray-300">Teil der deutschen Odoo-Community</span>
          </div>
        </div>
      </div>
    </div>
  )
}