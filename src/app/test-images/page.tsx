import Image from 'next/image'

export default function TestImages() {
  const authors = [
    {
      name: 'Klaus Weber',
      url: 'https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/klaus-weber.jpg.png'
    },
    {
      name: 'Sandra Weber', 
      url: 'https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/sandra-weber.jpg.png'
    },
    {
      name: 'Michael Schneider',
      url: 'https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/Michael%20Schneider.png'
    },
    {
      name: 'Logo',
      url: 'https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/Logo.png'
    }
  ]

  return (
    <div className="min-min-h-svh bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-2 sm:mb-3 md:mb-4 sm:mb-3 sm:mb-2 sm:mb-3 md:mb-4 md:mb-6 md:mb-8">Image Test Page</h1>
      
      <div className="grid responsive-grid gap-2 sm:gap-3 md:gap-4 sm:gap-3 sm:gap-2 sm:gap-3 md:gap-4 md:gap-6 md:gap-8">
        {authors.map((author) => (
          <div key={author.name} className="bg-white p-6 rounded-lg shadow">
            <h2 className="mobile-text mobile-text font-semibold mb-2 sm:mb-3 md:mb-4">{author.name}</h2>
            <Image
              src={author.url}
              alt={author.name}
              width={200}
              height={200}
              className="rounded-lg object-cover"
            />
            <p className="mt-4 text-sm text-gray-600 break-all">{author.url}</p>
          </div>
        ))}
      </div>
    </div>
  )
}