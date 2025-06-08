interface TimelineItemProps {
  title: string
  date: string
  points: string[]
  isLast?: boolean
}

export default function TimelineItem({ title, date, points, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 z-10"></div>
      {!isLast && (
        <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-200 dark:from-blue-500 dark:to-blue-900"></div>
      )}

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
        </div>

        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
