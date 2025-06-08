"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Pause, RotateCcw, ExternalLink, Calendar, Clock, Users, Code, Trophy } from "lucide-react"

interface Project {
  name: string
  description: string
  tech: string[]
}

interface Experience {
  id: string
  title: string
  company: string
  date: string
  duration: string
  type: string
  points: string[]
  logo: string
  skills: string[]
  projects: Project[]
  isLast?: boolean
}

interface ExperienceSimulationProps {
  experience: Experience
}

export default function ExperienceSimulation({ experience }: ExperienceSimulationProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [activeTab, setActiveTab] = useState("overview")

  const simulationSteps = [
    "Application & Selection",
    "Onboarding Process",
    "Project Assignment",
    "Skill Development",
    "Final Assessment",
    "Certificate Completion",
  ]

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= simulationSteps.length - 1) {
            setIsPlaying(false)
            clearInterval(interval)
            return prev
          }
          return prev + 1
        })
      }, 2000)
    }
  }

  const handleReset = () => {
    setIsPlaying(false)
    setCurrentStep(0)
  }

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
            <div className="flex items-center gap-2 text-[#CFCFCF]">
              <Clock size={16} />
              <span>{experience.duration}</span>
            </div>
          </div>

          {/* Simulation Controls */}
          <div className="bg-[#D4AF37]/10 rounded-lg p-4 mb-6 border border-[#D4AF37]/30">
            <h4 className="font-semibold text-[#D4AF37] mb-3">Experience Simulation</h4>
            <div className="flex gap-2 mb-4">
              <Button onClick={handlePlayPause} size="sm" className="bg-[#D4AF37] hover:bg-[#FFD700] text-[#0E0E10]">
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                {isPlaying ? "Pause" : "Play"}
              </Button>
              <Button onClick={handleReset} size="sm" variant="outline" className="border-[#D4AF37] text-[#D4AF37]">
                <RotateCcw size={16} />
                Reset
              </Button>
            </div>

            {/* Progress Steps */}
            <div className="space-y-2">
              {simulationSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 text-sm transition-all duration-300 ${
                    index <= currentStep ? "text-[#D4AF37] font-medium" : "text-[#CFCFCF]/50"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index <= currentStep ? "bg-[#D4AF37]" : "bg-[#44403C]"
                    }`}
                  />
                  {step}
                </div>
              ))}
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
            <TabsList className="grid w-full grid-cols-3 bg-[#44403C]">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0E0E10]"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0E0E10]"
              >
                Projects
              </TabsTrigger>
              <TabsTrigger
                value="achievements"
                className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0E0E10]"
              >
                Achievements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-[#D4AF37] flex items-center">
                  <Users className="mr-2 text-[#FFD700]" size={16} />
                  Key Responsibilities & Learning
                </h4>
                <ul className="space-y-3">
                  {experience.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-[#CFCFCF] hover:text-[#D4AF37] transition-colors duration-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700] mt-2 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="mt-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-[#D4AF37] flex items-center">
                  <Code className="mr-2 text-[#FFD700]" size={16} />
                  Projects Completed
                </h4>
                <div className="grid gap-4">
                  {experience.projects.map((project, index) => (
                    <Card
                      key={index}
                      className="p-4 border border-[#44403C] bg-[#D4AF37]/5 hover:shadow-md transition-all duration-300 hover:scale-105"
                    >
                      <h5 className="font-medium text-[#D4AF37] mb-2">{project.name}</h5>
                      <p className="text-[#CFCFCF] text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="bg-[#1C1C1E] border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 hover:scale-105"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-[#D4AF37] flex items-center">
                  <Trophy className="mr-2 text-[#FFD700]" size={16} />
                  Key Achievements
                </h4>
                <div className="grid gap-4">
                  <Card className="p-4 border border-[#44403C] bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 hover:shadow-md transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
                        <Trophy className="text-[#0E0E10]" size={16} />
                      </div>
                      <div>
                        <h5 className="font-medium text-[#D4AF37]">Program Completion</h5>
                        <p className="text-[#CFCFCF] text-sm">Successfully completed all modules and assessments</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border border-[#44403C] bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 hover:shadow-md transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
                        <Users className="text-[#0E0E10]" size={16} />
                      </div>
                      <div>
                        <h5 className="font-medium text-[#D4AF37]">Industry Recognition</h5>
                        <p className="text-[#CFCFCF] text-sm">
                          Gained valuable industry insights and networking opportunities
                        </p>
                      </div>
                    </div>
                  </Card>
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
