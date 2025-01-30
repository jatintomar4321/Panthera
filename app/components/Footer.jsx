"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { useState, useEffect } from "react"

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize() // Set initial width
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="m-4">
      <footer className="relative w-full overflow-hidden rounded-3xl mt-20 mx-auto">
        {/* Background Image Container */}
        <div
          className="relative w-full h-[600px] bg-cover bg-center sm:bg-[center_top] md:bg-center"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-Lep0hxzllzzXGwCkt2UAKWVOjheKr7.png')`,
          }}
        >
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between py-2 sm:py-3 md:py-3 lg:py-2 px-2 sm:px-3 md:px-3 lg:px-12">
          {/* Top Content */}
          <div className="space-y-6 pt-5 md:pt-6 lg:pt-7">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white max-w-2xl leading-tight">
              Experience Panthera in Action.
            </h2>
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-xs sm:text-xs"
            >
              Request a demo
            </Link>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 py-4 sm:py-6 md:py-8">
            {/* Logo and Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Panthera Logo"
                width={40}
                height={40}
                className="brightness-0 invert"
              />
              <span className="text-xs sm:text-sm text-center sm:text-left whitespace-nowrap">
                © {new Date().getFullYear()} All Rights Reserved.
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-1 sm:gap-3">
              <Link href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4 sm:h-4 sm:w-4" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4 sm:h-4 sm:w-4" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4 sm:h-4 sm:w-4" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="YouTube">
                <Youtube className="h-4 w-4 sm:h-4 sm:w-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
