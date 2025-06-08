import { Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

interface AchievementItemProps {
  text: string
  className?: string
}

export default function AchievementItem({ text, className }: AchievementItemProps) {
  return (
    <li className={cn("flex items-start gap-3 group", className)}>
      <Trophy
        className="text-yellow-500 dark:text-yellow-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
        size={18}
      />
      <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </li>
  )
}
