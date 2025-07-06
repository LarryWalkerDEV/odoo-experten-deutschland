export default function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden animate-pulse">
      {/* Header skeleton */}
      <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
        <div className="absolute top-4 left-4">
          <div className="w-20 h-6 bg-gray-300 dark:bg-gray-600 rounded-full" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="p-6 -mt-12 relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          {/* Title */}
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-3" />
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4" />
          
          {/* Description */}
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
          </div>

          {/* Meta */}
          <div className="flex gap-4 mb-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20" />
          </div>

          {/* Author */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="flex-1">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-1" />
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}