"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Item {
  title: string
  description: string
}

interface CardHoverEffectProps {
  items: Item[]
  className?: string
}

export function CardHoverEffect({ items, className }: CardHoverEffectProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
            layoutId={hoveredIndex === idx ? "hoverBackground" : undefined}
          />
          <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
            <div className="relative z-50">
              <div className="p-4">
                <h4 className="text-zinc-100 font-bold tracking-wide mt-4">{item.title}</h4>
                <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
