import { Award, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CertificationItemProps {
  name: string
  date: string
  issuer?: string
  image?: string
}

export default function CertificationItem({ name, date, issuer, image }: CertificationItemProps) {
  return (
    <Card className="p-4 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#44403C] group bg-gradient-to-br from-[#1C1C1E] to-[#44403C]/30">
      <div className="flex items-center gap-4">
        <div className="bg-[#D4AF37]/20 p-3 rounded-full group-hover:scale-110 group-hover:bg-[#D4AF37]/30 transition-all duration-300">
          <Award className="text-[#D4AF37]" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-[#D4AF37] group-hover:text-[#FFD700] transition-colors duration-300">
            {name}
          </h3>
          <div className="flex items-center justify-between mt-1">
            <p className="text-sm text-[#CFCFCF]">
              {issuer && <span className="mr-2 font-medium text-[#D4AF37]">{issuer}</span>}
              <span>{date}</span>
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            >
              View <ExternalLink size={12} className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
      {image && (
        <div className="mt-4 rounded-lg overflow-hidden border border-[#44403C]">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${name} Certificate`}
            width={400}
            height={300}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
    </Card>
  )
}
