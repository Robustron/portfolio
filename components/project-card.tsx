"use client"

import { ExternalLink, Eye, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  date: string
  techStack: string[]
  description: string
  achievements: string[]
  link: string
  image?: string
  category?: string
}

export default function ProjectCard({
  title,
  date,
  techStack,
  description,
  achievements,
  link,
  image,
  category,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isLiveProject = link.includes("vercel.app")
  const isGithubProject = link.includes("github.com")

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-500 border border-[#44403C] bg-gradient-to-br from-[#1C1C1E] to-[#44403C]/30 group",
        isHovered ? "shadow-2xl transform -translate-y-2 scale-105 border-[#D4AF37]" : "shadow-lg hover:shadow-xl",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={cn("object-cover transition-all duration-700", isHovered ? "scale-125 rotate-2" : "scale-100")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10]/80 via-[#0E0E10]/20 to-transparent" />
          <div className="absolute top-4 left-4">
            {category && (
              <Badge className="bg-[#D4AF37] text-[#0E0E10] hover:bg-[#FFD700] transition-colors duration-300">
                {category}
              </Badge>
            )}
          </div>
          <div className="absolute bottom-4 right-4">
            <Badge variant="secondary" className="bg-[#1C1C1E]/90 text-[#D4AF37] border border-[#44403C]">
              {date}
            </Badge>
          </div>
          <div
            className={cn(
              "absolute inset-0 bg-[#D4AF37]/20 opacity-0 transition-opacity duration-500",
              isHovered && "opacity-100",
            )}
          />
        </div>
      )}
      <CardContent className={cn("p-6", !image && "pt-6")}>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-[#D4AF37] mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[#CFCFCF] mb-4 group-hover:text-white transition-colors duration-300">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.slice(0, 3).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30 hover:bg-[#D4AF37]/20 transition-all duration-300 hover:scale-105"
            >
              {tech}
            </Badge>
          ))}
          {techStack.length > 3 && (
            <Badge
              variant="outline"
              className="bg-[#44403C]/30 text-[#CFCFCF] border-[#44403C] hover:bg-[#44403C]/50 transition-all duration-300 hover:scale-105"
            >
              +{techStack.length - 3} more
            </Badge>
          )}
        </div>

        <ul className="list-disc list-inside space-y-1 text-[#CFCFCF] text-sm mb-4">
          {achievements.map((achievement, index) => (
            <li key={index} className="hover:text-[#D4AF37] transition-colors duration-300">
              {achievement}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button
          asChild
          variant="outline"
          className="w-full group/btn border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Link
            href={link}
            target={link.startsWith("http") ? "_blank" : "_self"}
            rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {isLiveProject ? (
              <>
                <Eye size={16} className="mr-2 group-hover/btn:scale-110 transition-transform" />
                View Live Project
                <ExternalLink size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </>
            ) : isGithubProject ? (
              <>
                <Github size={16} className="mr-2 group-hover/btn:scale-110 transition-transform" />
                View on GitHub
                <ExternalLink size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </>
            ) : (
              <>
                View Project
                <ExternalLink size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </>
            )}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
