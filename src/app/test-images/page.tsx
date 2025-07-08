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
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Image Test Page</h1>
      
      <div className="grid grid-cols-2 gap-8">
        {authors.map((author) => (
          <div key={author.name} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">{author.name}</h2>
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