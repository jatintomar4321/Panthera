"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export default function Nav() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 text-[0.65rem] 
          flex items-center justify-between 
          px-4 sm:px-16 py-4 bg-white text-black z-50
          transform transition-transform duration-500
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
          shadow-sm
        `}
      >
        <div className="flex items-center">
          <Link href="/">
            <img src="logo.png" alt="Panthera Logo" className="h-6 sm:h-8 cursor-pointer" />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <AuthButtons />
        </div>

        <button className="md:hidden text-[#040404]" onClick={toggleSidebar} aria-label="Toggle menu">
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed inset-y-0 right-0 w-full bg-black z-50 text-white 
          transform transition-transform duration-500 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={toggleSidebar}
            className="px-6 py-2 bg-[#ffff] text-[#000] rounded-full text-sm font-medium"
          >
            CLOSE
          </button>
        </div>

        <div className="px-6 pt-20">
          {/* Main Navigation Links */}
          <div className="flex flex-col space-y-6 text-4xl font-semibold tracking-tighter "
           style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            <Link href="/market-trends" className="hover:opacity-70">
              Market Trends
            </Link>
            <Link href="/About" className="hover:opacity-70">
              About us
            </Link>
            <Link href="/Blog" className="hover:opacity-70">
              Services
            </Link>
            <Link href="/Contact" className="hover:opacity-70">
              Contact Us
            </Link>
          </div>

          {/* Social Links */}
          <div className="absolute bottom-16 left-12 right-12">
            <div className="grid grid-cols-2 gap-x-4 text-md">
              <div className="space-y-4">
                <Link href="#" className="block hover:opacity-70">
                  Facebook
                </Link>
                <Link href="#" className="block hover:opacity-70">
                  Instagram
                </Link>
              </div>
              <div className="space-y-4">
                <Link href="#" className="block hover:opacity-70">
                  LinkedIn
                </Link>
                <Link href="#" className="block hover:opacity-70">
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black  bg-opacity-50 z-40 md:hidden" onClick={toggleSidebar} />}
    </>
  )
}

function NavLinks() {
  return (
    <>
      <div className="relative  group">
        <Link href="/market-trends" className="flex items-center hover:text-gray-900">
          Market Trends
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>

      <div className="relative group">
        <Link href="/About" className="flex items-center hover:text-gray-900">
          About us
        </Link>
      </div>

      <div className="relative group">
        <Link href="/Blog" className="flex items-center hover:text-gray-900">
          Services
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>

      <div className="relative group">
        <Link href="/Contact" className="flex items-center hover:text-gray-900">
          Contact Us
        </Link>
      </div>
    </>
  )
}

function AuthButtons() {
  return (
    <>
      <Link href="/sign-in" className="hover:text-gray-900">
        Sign in
      </Link>
      <Link href="/request-demo">
        <button className="px-4 py-2 text-white bg-[#385E71] text-xs rounded-md hover:bg-[#334155] transition-colors">
          Request a demo
        </button>
      </Link>
    </>
  )
}

