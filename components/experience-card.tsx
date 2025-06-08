"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, ExternalLink, Users, Trophy } from "lucide-react"
import Image from "next/image"

interface Experience {
  id: string
  title: string
  company: string
  date: string
  type: string
  tasks: string[]
  logo: string
  skills: string[]
  certificateImage: string
  isLast?: boolean
}

interface ExperienceCardProps {
  experience: Experience
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <Card className="p-8 border border-[#44403C] bg-gradient-to-br from-[#1C1C1E] to-[#44403C]/30 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Company Info */}
        <div className="lg:w-1/3">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-[#D4AF37]">{experience.company.charAt(0)}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#D4AF37]">{experience.company}</h3>
              <p className="text-[#CFCFCF] font-medium">{experience.type}</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-2 text-[#CFCFCF]">
              <Calendar size={16} />
              <span>{experience.date}</span>
            </div>
          </div>

          {/* Skills Gained */}
          <div>
            <h4 className="font-semibold text-[#D4AF37] mb-3 flex items-center">
              <Trophy className="mr-2 text-[#FFD700]" size={16} />
              Skills Gained
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, index) => (
                <Badge
                  key={index}
                  className="bg-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#D4AF37]/30 transition-all duration-300 hover:scale-105"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Details */}
        <div className="lg:w-2/3">
          <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">{experience.title}</h3>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-[#44403C]">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0E0E10]"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="certificate"
                className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0E0E10]"
              >
                Certificate
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-[#D4AF37] flex items-center">
                  <Users className="mr-2 text-[#FFD700]" size={16} />
                  Tasks Completed
                </h4>
                <ul className="space-y-3">
                  {experience.tasks.map((task, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-[#CFCFCF] hover:text-[#D4AF37] transition-colors duration-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700] mt-2 flex-shrink-0"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="certificate" className="mt-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-[#D4AF37] flex items-center">
                  <Trophy className="mr-2 text-[#FFD700]" size={16} />
                  Certificate of Completion
                </h4>
                <div className="rounded-lg overflow-hidden border border-[#44403C] hover:border-[#D4AF37] transition-all duration-300">
                  <Image
                    src={experience.certificateImage || "/placeholder.svg"}
                    alt={`${experience.company} Certificate`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="mt-6">
                  <Button
                    variant="outline"
                    className="w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 hover:scale-105"
                  >
                    View Certificate <ExternalLink size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Card>
  )
}
