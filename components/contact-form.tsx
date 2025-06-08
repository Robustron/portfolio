"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle, AlertCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { sendEmail } from "@/app/actions"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Call the server action to send email
      await sendEmail({
        to: "posj2004@gmail.com",
        subject: `Portfolio Contact: ${formData.subject}`,
        message: `
          Name: ${formData.name}
          Email: ${formData.email}
          
          Message:
          ${formData.message}
        `,
      })

      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <Card className="p-8 border border-[#44403C] bg-gradient-to-br from-[#1C1C1E] to-[#44403C]/30 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">Send a Message</h3>

      {submitStatus === "success" && (
        <Alert className="mb-6 bg-green-900/30 text-green-400 border-green-800">
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>Thank you for your message! I'll get back to you soon.</AlertDescription>
        </Alert>
      )}

      {submitStatus === "error" && (
        <Alert className="mb-6 bg-red-900/30 text-red-400 border-red-800">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>There was an error sending your message. Please try again.</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#D4AF37]">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="border-[#44403C] bg-[#1C1C1E] text-[#CFCFCF] focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37]/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#D4AF37]">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="border-[#44403C] bg-[#1C1C1E] text-[#CFCFCF] focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37]/50"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-[#D4AF37]">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject of your message"
            className="border-[#44403C] bg-[#1C1C1E] text-[#CFCFCF] focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37]/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-[#D4AF37]">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Your message here..."
            className="border-[#44403C] bg-[#1C1C1E] text-[#CFCFCF] focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] resize-none transition-all duration-300 hover:border-[#D4AF37]/50"
          />
        </div>

        <div className="space-y-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#B08D57] hover:to-[#D4AF37] text-[#0E0E10] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#0E0E10]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message <Send size={16} className="ml-2" />
              </>
            )}
          </Button>
        </div>
      </form>
    </Card>
  )
}
