import Image from 'next/image'

interface Author {
  name: string
  title: string
  imageUrl: string
}

const authors: Author[] = [
  {
    name: 'Klaus Weber',
    title: 'Senior Odoo-Berater & Projektleiter',
    imageUrl: 'https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/klaus-weber.jpg.png'
  },
  {
    name: 'Sandra Weber',
    title: 'Odoo-Spezialistin & Business Consultant',
    imageUrl: 'https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/sandra-weber.jpg.png'
  },
  {
    name: 'Michael Schneider',
    title: 'Odoo-Architekt & Digital Transformation Expert',
    imageUrl: 'https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/Michael%20Schneider.png'
  }
]

export default function AuthorGallery() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Unsere Odoo-Experten
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Lernen Sie unser Team von zertifizierten Odoo-Spezialisten kennen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {authors.map((author) => (
            <div
              key={author.name}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <Image
                  src={author.imageUrl}
                  alt={author.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto object-cover shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {author.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {author.title}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Zusätzliches Logo verfügbar im Supabase Bucket:
          </p>
          <div className="mt-4">
            <Image
              src="https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/Logo.png"
              alt="Odoo Experten Deutschland Logo"
              width={200}
              height={80}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}