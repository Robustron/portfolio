import { cn } from "@/lib/utils"

interface SkillTagProps {
  name: string
  type?: "technical" | "soft"
}

export default function SkillTag({ name, type = "technical" }: SkillTagProps) {
  const baseClasses =
    "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default"

  const typeClasses =
    type === "technical"
      ? "bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30"
      : "bg-[#FFD700]/10 text-[#FFD700] hover:bg-[#FFD700]/20 border border-[#FFD700]/30"

  return <span className={cn(baseClasses, typeClasses)}>{name}</span>
}
