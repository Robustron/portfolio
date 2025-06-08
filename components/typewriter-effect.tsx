"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface Word {
  text: string
  className?: string
}

interface TypewriterEffectProps {
  words: Word[]
  className?: string
  cursorClassName?: string
}

export function TypewriterEffect({ words, className, cursorClassName }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentWord = words[currentWordIndex]

        if (isDeleting) {
          setCurrentText(currentWord.text.substring(0, currentText.length - 1))
        } else {
          setCurrentText(currentWord.text.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === currentWord.text) {
          setTimeout(() => setIsDeleting(true), 1000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  const currentWord = words[currentWordIndex]

  return (
    <div className={cn("text-base sm:text-xl md:text-3xl lg:text-5xl font-bold", className)}>
      <span className={currentWord.className}>{currentText}</span>
      <span className={cn("animate-pulse", cursorClassName)}>|</span>
    </div>
  )
}
