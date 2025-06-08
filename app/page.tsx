import {
  Mail,
  Phone,
  Linkedin,
  ArrowRight,
  Download,
  MoveRight,
  Github,
  Code,
  Database,
  Brain,
  Zap,
} from "lucide-react"
import ContactForm from "@/components/contact-form"
import ProjectCard from "@/components/project-card"
import SkillTag from "@/components/skill-tag"
import CertificationItem from "@/components/certification-item"
import ThemeToggle from "@/components/theme-toggle"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedCounter from "@/components/animated-counter"
import { Separator } from "@/components/ui/separator"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { SparklesCore } from "@/components/sparkles"
import { TracingBeam } from "@/components/tracing-beam"
import { BackgroundBeams } from "@/components/background-beams"
import { TextGenerateEffect } from "@/components/text-generate-effect"
import { StickyScroll } from "@/components/sticky-scroll"
import ExperienceCard from "@/components/experience-card"

const projects = [
  {
    title: "EventEase",
    date: "Jan 2025",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn-ui", "Firebase"],
    description: "AI-powered event platform connecting users with verified vendors.",
    achievements: [
      "Built a real-time vendor recommendation engine using LLMs, improving matching accuracy by 30%.",
      "Developed secure authentication and event listing system with 99.9% uptime.",
    ],
    link: "https://eventease-final-y8pw.vercel.app/",
    image: "/images/projects/eventease.png",
    category: "AI Platform",
  },
  {
    title: "SyllabusAI",
    date: "Jan 2025",
    techStack: ["Python", "LangChain", "Pinecone", "Gemini API"],
    description: "RAG-based AI assistant for academic support using syllabus data.",
    achievements: [
      "Increased student query response efficiency by 45% using semantic vector search.",
      "Reduced irrelevant responses by over 60% with context-aware prompt design.",
    ],
    link: "https://github.com/Robustron/SyllabusAI",
    image: "/images/projects/syllabus-ai.png",
    category: "AI Assistant",
  },
  {
    title: "ARCHON-7",
    date: "Jan 2025",
    techStack: ["TypeScript", "HTML", "CSS", "Gemini AI"],
    description: "Ultimate Learning Synthesizer - AI-powered educational platform with adaptive learning.",
    achievements: [
      "Created 100+ adaptive learning modules with personalized learning experiences.",
      "Implemented real-time AI interaction powered by Google's Gemini AI.",
    ],
    link: "https://github.com/Robustron/ARCHON-7",
    image: "/images/projects/archon-7.png",
    category: "Education Tech",
  },
  {
    title: "DonateNow",
    date: "Jan 2025",
    techStack: ["MERN Stack", "Firebase"],
    description: "Platform to facilitate transparent e-waste donations.",
    achievements: [
      "Onboarded 10+ NGOs and handled 200+ real-time item donations.",
      "Implemented secure role-based access with Firebase integration.",
    ],
    link: "https://donate-now-5g47.vercel.app/",
    image: "/images/projects/donate-now.png",
    category: "Social Impact",
  },
  {
    title: "AgriWise",
    date: "Jan 2025",
    techStack: ["Python", "APIs", "Gemini"],
    description: "Smart farming advice platform combining real-time APIs and GenAI.",
    achievements: [
      "Delivered 95% accurate crop suggestions using soil and climate data.",
      "Helped reduce fertilizer misuse by 25% via GenAI-based guidance.",
    ],
    link: "https://github.com/Robustron/Agriwise",
    image: "/images/projects/agriwise.png",
    category: "AgriTech",
  },
]

const experiences = [
  {
    id: "goldman-sachs",
    title: "Goldman Sachs Virtual Program",
    company: "Goldman Sachs",
    date: "December 2024",
    type: "Virtual Internship by Forage",
    tasks: ["Foundations of operations", "Facilitating ultra-high net worth transactions"],
    logo: "/placeholder.svg?height=80&width=80",
    skills: ["Operations", "Financial Technology", "Risk Management"],
    certificateImage: "/certificates/goldman-sachs.jpg",
  },
  {
    id: "accenture",
    title: "Accenture Virtual Program",
    company: "Accenture",
    date: "November 2024",
    type: "Virtual Internship by Forage",
    tasks: [
      "Discover Career Opportunities in Technology",
      "The Software Development Lifecycle (SDLC)",
      "Software Development Methodologies: Waterfall and Agile",
      "The Software Testing Lifecycle (STLC)",
      "Algorithmic Thinking",
    ],
    logo: "/placeholder.svg?height=80&width=80",
    skills: ["Software Development", "Testing", "Algorithms"],
    certificateImage: "/certificates/accenture.jpg",
    isLast: true,
  },
]

const certifications = [
  {
    name: "Google Data Analytics",
    date: "Dec 2024",
    issuer: "Google",
    image: "/certificates/data-analytics.jpg",
  },
  {
    name: "Google Prompting Essentials",
    date: "Dec 2024",
    issuer: "Google",
    image: "/certificates/prompt-engineering.jpg",
  },
  {
    name: "GrowthSchool GenAI Specialist",
    date: "Jan 2025",
    issuer: "GrowthSchool",
    image: "/certificates/growth-school.jpg",
  },
  {
    name: "AI for Entrepreneurship",
    date: "Jan 2025",
    issuer: "Intel Technology India",
    image: "/certificates/entrepreneurship.jpg",
  },
  {
    name: "Google AI Essentials",
    date: "Jun 2025",
    issuer: "Google",
    image: "/certificates/google-ai-essentials.jpg",
  },
]

const achievements = [
  "3rd Place - Ideathon, KJ Somaiya College",
  "Winner - College Debate Competition",
  "Participated in: Smart India Hackathon (SIH), Avishkar, Innovathon, and several Ideathons",
  "Leadership: Led multiple AI/tech projects and served as team leader in all hackathons and ideathons",
  "Member CSI - College",
]

const stats = [
  { value: 5, label: "Projects Completed", icon: "🚀" },
  { value: 2, label: "Virtual Programs", icon: "💼" },
  { value: 5, label: "Certifications", icon: "🏆" },
  { value: 3, label: "Hackathons", icon: "⚡" },
]

const words = [
  {
    text: "AI",
    className: "text-[#D4AF37] dark:text-[#FFD700]",
  },
  {
    text: "&",
  },
  {
    text: "Generative",
    className: "text-[#B08D57] dark:text-[#FBBF24]",
  },
  {
    text: "AI",
    className: "text-[#D4AF37] dark:text-[#FFD700]",
  },
  {
    text: "Developer",
  },
]

const content = [
  {
    title: "AI & Machine Learning",
    description:
      "Expertise in building and deploying AI models using TensorFlow, Keras, and scikit-learn. Experienced in developing RAG systems and implementing LLM-based solutions.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-[#FFD700]/10 to-[#B08D57]/10 dark:from-[#D4AF37]/20 dark:to-[#FFD700]/20 flex items-center justify-center text-6xl rounded-xl border border-[#D4AF37]/30">
        🧠
      </div>
    ),
  },
  {
    title: "Full-Stack Development",
    description:
      "Proficient in modern web development with React, TypeScript, and Next.js. Experienced in building responsive, accessible, and performant web applications.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-[#FBBF24]/10 to-[#D4AF37]/10 dark:from-[#FFD700]/20 dark:to-[#B08D57]/20 flex items-center justify-center text-6xl rounded-xl border border-[#D4AF37]/30">
        💻
      </div>
    ),
  },
  {
    title: "Database & Backend",
    description:
      "Skilled in working with various databases including Firebase, Supabase, MongoDB, and SQL. Experience in building secure and scalable backend systems.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-[#D4AF37]/10 to-[#B08D57]/10 dark:from-[#FFD700]/20 dark:to-[#FBBF24]/20 flex items-center justify-center text-6xl rounded-xl border border-[#D4AF37]/30">
        🗄️
      </div>
    ),
  },
  {
    title: "DevOps & Deployment",
    description:
      "Experienced in deploying applications using Vercel, Firebase Hosting, and other cloud platforms. Familiar with CI/CD pipelines and version control with Git.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-[#FBBF24]/10 to-[#FFD700]/10 dark:from-[#B08D57]/20 dark:to-[#D4AF37]/20 flex items-center justify-center text-6xl rounded-xl border border-[#D4AF37]/30">
        🚀
      </div>
    ),
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0E0E10] text-[#CFCFCF] transition-colors duration-300">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-[#0E0E10]/95 backdrop-blur-md z-50 border-b border-[#44403C]">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#FFD700]">
                Pratik Jadhav
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              {["About", "Skills", "Projects", "Experience", "Education", "Achievements", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#CFCFCF] hover:text-[#D4AF37] transition-all duration-300 hover:scale-105 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button
                asChild
                variant="outline"
                className="hidden md:flex border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <a href="#contact">
                  Contact Me <MoveRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <button className="md:hidden text-[#CFCFCF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <BackgroundBeams className="opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#FFD700]/5"></div>
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <div className="mb-6">
                    <Badge
                      variant="outline"
                      className="mb-4 text-sm border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10 hover:scale-105 transition-transform duration-300"
                    >
                      Hello, I'm
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4AF37] mb-4 hover:scale-105 transition-transform duration-500">
                      PRATIK JADHAV
                    </h1>
                    <div className="h-16">
                      <TypewriterEffect words={words} className="text-xl md:text-2xl font-medium" />
                    </div>
                    <div className="mt-6">
                      <TextGenerateEffect
                        words="Final-year Computer Engineering student with deep expertise in Artificial Intelligence, Generative AI, and full-stack development."
                        className="text-lg text-[#CFCFCF]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Button
                      asChild
                      size="lg"
                      className="group bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#B08D57] hover:to-[#D4AF37] text-[#0E0E10] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <a href="#projects">
                        View My Work{" "}
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <a href="/resume/Pratik_Jadhav_Resume.pdf" download="Pratik_Jadhav_Resume.pdf">
                        Download Resume <Download size={16} className="ml-2" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="secondary"
                      size="lg"
                      className="bg-[#1C1C1E] text-[#D4AF37] hover:bg-[#44403C] transition-all duration-300 hover:scale-105"
                    >
                      <a href="#contact">Contact Me</a>
                    </Button>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-6">
                    <a
                      href="mailto:posj2004@gmail.com"
                      className="text-[#CFCFCF] hover:text-[#D4AF37] flex items-center gap-2 transition-all duration-300 hover:scale-105"
                    >
                      <Mail size={18} /> posj2004@gmail.com
                    </a>
                    <a
                      href="tel:+918097081504"
                      className="text-[#CFCFCF] hover:text-[#D4AF37] flex items-center gap-2 transition-all duration-300 hover:scale-105"
                    >
                      <Phone size={18} /> +91 80970 81504
                    </a>
                    <a
                      href="https://linkedin.com/in/pratik-jadhav-394500212"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#CFCFCF] hover:text-[#D4AF37] flex items-center gap-2 transition-all duration-300 hover:scale-105"
                    >
                      <Linkedin size={18} /> LinkedIn
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#CFCFCF] hover:text-[#D4AF37] flex items-center gap-2 transition-all duration-300 hover:scale-105"
                    >
                      <Github size={18} /> GitHub
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#B08D57] animate-pulse blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#D4AF37] shadow-2xl group-hover:scale-105 transition-transform duration-500">
                      <Image src="/images/profile.png" alt="Pratik Jadhav" fill className="object-cover" priority />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-r from-[#1C1C1E] to-[#44403C]/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">
                    <AnimatedCounter from={0} to={stat.value} duration={2} />+
                  </div>
                  <div className="text-[#CFCFCF] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 bg-[#0E0E10]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold text-[#D4AF37] mb-6 flex items-center group">
                    About Me
                    <div className="h-1 w-12 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] ml-4 group-hover:w-16 transition-all duration-300"></div>
                  </h2>
                  <div className="prose prose-lg">
                    <p className="text-[#CFCFCF] leading-relaxed mb-6 hover:text-white transition-colors duration-300">
                      Final-year Computer Engineering student at the University of Mumbai (2022-2026) with deep
                      expertise in Artificial Intelligence, Generative AI, and full-stack development.
                    </p>
                    <p className="text-[#CFCFCF] leading-relaxed mb-6 hover:text-white transition-colors duration-300">
                      Experienced in building RAG systems, AI-driven platforms, and deploying GenAI applications using
                      LangChain, Gemini, TypeScript, Firebase, and modern web tools.
                    </p>
                    <p className="text-[#CFCFCF] leading-relaxed hover:text-white transition-colors duration-300">
                      Proven leadership in hackathons and technical events with a strong foundation in AI toolchains and
                      deployment workflows.
                    </p>
                  </div>
                  <div className="mt-8 flex gap-4">
                    <Button
                      asChild
                      variant="outline"
                      className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 hover:scale-105"
                    >
                      <a href="#experience">My Experience</a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 hover:scale-105"
                    >
                      <a href="#projects">My Projects</a>
                    </Button>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <StickyScroll content={content} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-[#1C1C1E]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-2 text-center">Skills</h2>
            <p className="text-[#CFCFCF] text-center mb-12 max-w-2xl mx-auto">
              A comprehensive set of technical and soft skills that I've developed throughout my academic and
              professional journey.
            </p>

            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="technical" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="grid w-full max-w-md grid-cols-2 bg-[#44403C]">
                    <TabsTrigger
                      value="technical"
                      className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0E0E10]"
                    >
                      Technical Skills
                    </TabsTrigger>
                    <TabsTrigger
                      value="soft"
                      className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0E0E10]"
                    >
                      Soft Skills
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="technical" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-[#44403C] bg-gradient-to-br from-[#1C1C1E] to-[#44403C]/30">
                      <h3 className="text-lg font-semibold mb-4 text-[#D4AF37] flex items-center">
                        <Code className="mr-2 text-[#FFD700]" size={20} />
                        Programming Languages
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "JavaScript", "TypeScript", "HTML/CSS"].map((skill) => (
                          <SkillTag key={skill} name={skill} />
                        ))}
                      </div>
                    </Card>
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-[#44403C] bg-gradient-to-br from-[#1C1C1E] to-[#44403C]/30">
                      <h3 className="text-lg font-semibold mb-4 text-[#D4AF37] flex items-center">
                        <Zap className="mr-2 text-[#FFD700]" size={20} />
                        Frameworks & Libraries
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Next.js", "FastAPI", "Streamlit", "TensorFlow", "Keras"].map((skill) => (
                          <SkillTag key={skill} name={skill} />
                        ))}
                      </div>
                    </Card>
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-[#44403C] bg-gradient-to-br from-[#1C1C1E] to-[#44403C]/30">
                      <h3 className="text-lg font-semibold mb-4 text-[#D4AF37] flex items-center">
                        <Brain className="mr-2 text-[#FFD700]" size={20} />
                        AI & ML
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {["LangChain", "Gemini", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "YOLOv8"].map((skill) => (
                          <SkillTag key={skill} name={skill} />
                        ))}
                      </div>
                    </Card>
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-[#44403C] bg-gradient-to-br from-[#1C1C1E] to-[#44403C]/30">
                      <h3 className="text-lg font-semibold mb-4 text-[#D4AF37] flex items-center">
                        <Database className="mr-2 text-[#FFD700]" size={20} />
                        Databases
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {["Firebase", "Supabase", "MongoDB", "SQL", "Pinecone"].map((skill) => (
                          <SkillTag key={skill} name={skill} />
                        ))}
                      </div>
                    </Card>
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-[#44403C] bg-gradient-to-br from-[#1C1C1E] to-[#44403C]/30">
                      <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">DevOps & Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Git", "Vercel", "Firebase Hosting", "CI/CD"].map((skill) => (
                          <SkillTag key={skill} name={skill} />
                        ))}
                      </div>
                    </Card>
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-[#44403C] bg-gradient-to-br from-[#1C1C1E] to-[#44403C]/30">
                      <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">UI/UX</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Tailwind CSS", "Shadcn UI", "Responsive Design", "Figma"].map((skill) => (
                          <SkillTag key={skill} name={skill} />
                        ))}
                      </div>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="soft">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        skill: "Communication",
                        description:
                          "Effective verbal and written communication skills, with the ability to explain complex technical concepts in simple terms.",
                        icon: "💬",
                      },
                      {
                        skill: "Leadership",
                        description:
                          "Proven leadership abilities demonstrated through leading multiple AI/tech projects and serving as team leader in hackathons.",
                        icon: "👑",
                      },
                      {
                        skill: "Critical Thinking",
                        description:
                          "Strong analytical and critical thinking skills, with the ability to approach problems from multiple perspectives.",
                        icon: "🧠",
                      },
                      {
                        skill: "Problem-Solving",
                        description:
                          "Excellent problem-solving abilities, with a focus on finding efficient and effective solutions to complex challenges.",
                        icon: "🔍",
                      },
                      {
                        skill: "Team Collaboration",
                        description:
                          "Strong team player with experience collaborating with diverse teams to achieve common goals.",
                        icon: "👥",
                      },
                      {
                        skill: "Time Management",
                        description:
                          "Effective time management skills, with the ability to prioritize tasks and meet deadlines.",
                        icon: "⏱️",
                      },
                    ].map((item, index) => (
                      <Card
                        key={index}
                        className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-[#44403C] bg-gradient-to-br from-[#1C1C1E] to-[#44403C]/30"
                      >
                        <div className="text-4xl mb-4 hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-[#D4AF37]">{item.skill}</h3>
                        <p className="text-[#CFCFCF] text-sm">{item.description}</p>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <TracingBeam className="py-20 bg-[#0E0E10]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-2 text-center" id="projects">
              Projects
            </h2>
            <p className="text-[#CFCFCF] text-center mb-12 max-w-2xl mx-auto">
              A showcase of my recent work in AI, machine learning, and full-stack development.
            </p>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    date={project.date}
                    techStack={project.techStack}
                    description={project.description}
                    achievements={project.achievements}
                    link={project.link}
                    image={project.image}
                    category={project.category}
                  />
                ))}
              </div>
            </div>
          </div>
        </TracingBeam>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-[#1C1C1E] relative overflow-hidden">
          <SparklesCore
            id="tsparticles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="absolute inset-0 opacity-30"
            particleColor="#D4AF37"
          />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-2 text-center">Experience</h2>
            <p className="text-[#CFCFCF] text-center mb-12 max-w-2xl mx-auto">
              Virtual internship experiences through Forage simulations.
            </p>

            <div className="max-w-6xl mx-auto space-y-12">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-[#0E0E10]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-2 text-center">Education</h2>
            <p className="text-[#CFCFCF] text-center mb-12 max-w-2xl mx-auto">
              My academic background and qualifications.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#1C1C1E] to-[#44403C]/30 rounded-xl shadow-lg p-8 border border-[#44403C] hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#D4AF37]">B.Tech in Computer Engineering</h3>
                    <p className="text-[#CFCFCF] mt-2">University of Mumbai</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center rounded-full bg-[#D4AF37]/20 px-3 py-1 text-sm font-medium text-[#D4AF37]">
                      2022 - 2026
                    </span>
                  </div>
                </div>
                <Separator className="my-6 bg-[#44403C]" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[#D4AF37] mb-3">Key Courses</h4>
                    <ul className="space-y-2 text-[#CFCFCF]">
                      <li className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]"></span>
                        Artificial Intelligence & Machine Learning
                      </li>
                      <li className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]"></span>
                        Data Structures & Algorithms
                      </li>
                      <li className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]"></span>
                        Database Management Systems
                      </li>
                      <li className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]"></span>
                        Web Development
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#D4AF37] mb-3">Activities</h4>
                    <ul className="space-y-2 text-[#CFCFCF]">
                      <li className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]"></span>
                        Member, Computer Society of India (CSI)
                      </li>
                      <li className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]"></span>
                        Participant, Smart India Hackathon
                      </li>
                      <li className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]"></span>
                        Technical Events Coordinator
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 bg-[#1C1C1E]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-2 text-center">Certifications</h2>
            <p className="text-[#CFCFCF] text-center mb-12 max-w-2xl mx-auto">
              Professional certifications that validate my skills and knowledge.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <CertificationItem
                    key={index}
                    name={cert.name}
                    date={cert.date}
                    issuer={cert.issuer}
                    image={cert.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 bg-[#0E0E10]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-2 text-center">Achievements & Leadership</h2>
            <p className="text-[#CFCFCF] text-center mb-12 max-w-2xl mx-auto">
              Recognition and leadership roles throughout my academic and professional journey.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#1C1C1E] to-[#44403C]/30 rounded-xl shadow-lg p-8 border border-[#44403C] hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 rounded-lg p-4 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
                          <span className="text-[#0E0E10] font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-[#CFCFCF] hover:text-[#D4AF37] transition-colors duration-300">
                          {achievement}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#1C1C1E] relative overflow-hidden">
          <BackgroundBeams className="opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-2 text-center">Get in Touch</h2>
            <p className="text-[#CFCFCF] text-center mb-12 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#1C1C1E] to-[#44403C]/30 rounded-xl shadow-lg p-8 border border-[#44403C] hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                    <div className="h-12 w-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37]/30 transition-colors duration-300">
                      <Mail className="text-[#D4AF37]" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-[#CFCFCF]">Email</p>
                      <a
                        href="mailto:posj2004@gmail.com"
                        className="text-[#D4AF37] hover:text-[#FFD700] transition-colors duration-300"
                      >
                        posj2004@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                    <div className="h-12 w-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37]/30 transition-colors duration-300">
                      <Phone className="text-[#D4AF37]" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-[#CFCFCF]">Phone</p>
                      <a
                        href="tel:+918097081504"
                        className="text-[#D4AF37] hover:text-[#FFD700] transition-colors duration-300"
                      >
                        +91 80970 81504
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                    <div className="h-12 w-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37]/30 transition-colors duration-300">
                      <Linkedin className="text-[#D4AF37]" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-[#CFCFCF]">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/pratik-jadhav-394500212"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D4AF37] hover:text-[#FFD700] transition-colors duration-300"
                      >
                        linkedin.com/in/pratik-jadhav-394500212
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-[#D4AF37] mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/pratik-jadhav-394500212"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/30 hover:scale-110 transition-all duration-300"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/30 hover:scale-110 transition-all duration-300"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#0E0E10] via-[#1C1C1E] to-[#0E0E10] text-[#CFCFCF] py-12 border-t border-[#44403C]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#FFD700]">
                  Pratik Jadhav
                </h3>
                <p className="text-[#CFCFCF] mb-4">
                  AI & Generative AI Developer specializing in building intelligent, scalable applications.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/pratik-jadhav-394500212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CFCFCF] hover:text-[#D4AF37] transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CFCFCF] hover:text-[#D4AF37] transition-all duration-300 hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Quick Links</h3>
                <ul className="space-y-2">
                  {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-[#CFCFCF] hover:text-[#D4AF37] transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Contact</h3>
                <ul className="space-y-2 text-[#CFCFCF]">
                  <li className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300">
                    <Mail size={16} /> posj2004@gmail.com
                  </li>
                  <li className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300">
                    <Phone size={16} /> +91 80970 81504
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#44403C] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-[#CFCFCF]">© 2024 Pratik Jadhav. All Rights Reserved.</p>
              <p className="text-[#CFCFCF] text-sm mt-2 md:mt-0">Designed & Developed with ❤️</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
