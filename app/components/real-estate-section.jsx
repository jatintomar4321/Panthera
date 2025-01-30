import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function RealEstateSection() {
  return (
    <div className="flex px-4 flex-col md:flex-row w-full min-h-screen bg-white text-black">
      {/* Left Content */}
      <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
        <div className="space-y-6">
          <p className="text-sm">Intelligent Investment</p>

          <h1 className="text-2xl md:text-5xl font-normal leading-tight">
            Leading the Future of Real Estate Intelligence
          </h1>

          <p className="text-lg">Q4 2024 Multifamily Underwriting Survey</p>

          <p className="text-sm text-gray-400">January 23, 2025 | 3 Minute Read</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-8">
          <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-300" />
          <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-300" />
          <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-300" />
          <Youtube className="w-5 h-5 cursor-pointer hover:text-gray-300" />
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative min-h-[300px] md:min-h-full">
        <Image
          src="/blogimg.png"
          alt="Abstract pattern"
          fill
          className="object-contain rounded-lg"
          priority
        />
      </div>
    </div>
  )
}

