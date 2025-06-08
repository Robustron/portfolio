"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface BackgroundBeamsProps {
  className?: string
}

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawBeam = (x: number, y: number, angle: number, length: number, opacity: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)

      const gradient = ctx.createLinearGradient(0, 0, length, 0)
      gradient.addColorStop(0, `rgba(59, 130, 246, 0)`)
      gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity})`)
      gradient.addColorStop(1, `rgba(59, 130, 246, 0)`)

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(length, 0)
      ctx.stroke()
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() * 0.001

      for (let i = 0; i < 5; i++) {
        const x = (canvas.width / 6) * (i + 1)
        const y = canvas.height / 2 + Math.sin(time + i) * 100
        const angle = Math.sin(time * 0.5 + i) * 0.5
        const length = 200 + Math.sin(time + i) * 50
        const opacity = 0.1 + Math.sin(time + i) * 0.05

        drawBeam(x, y, angle, length, opacity)
      }

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className={cn("absolute inset-0 pointer-events-none", className)} />
}
