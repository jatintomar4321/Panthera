"use client"

import { useEffect, useState } from "react"

export default function Nav() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show nav if scrolling up, hide if scrolling down
      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <nav
      className={` 
      fixed top-0 left-0 right-0 text-[0.65rem] 
      flex items-center justify-between 
      px-16 py-4 bg-white text-[#040404] z-50
      transform transition-transform duration-500
      ${isVisible ? "translate-y-0" : "-translate-y-full"}
      shadow-sm
    `}
    >
      <div className="flex items-center">
        <img
          src="logo.png"
          alt="Panthera Logo"
          className="h-8"
        />
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <div className="relative group">
          <button className="flex items-center  hover:text-gray-900">
            Market Trends
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="relative group ">
          <button className="flex items-center hover:text-gray-900">
            About us
          </button>
        </div>

        <div className="relative group">
          <button className="flex items-center  hover:text-gray-900">
            Services
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="relative group">
          <button className="flex items-center  hover:text-gray-900">
            Contact Us
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className=" hover:text-gray-900">Sign in</button>
        <button className="px-4 py-2 text-white bg-[#385E71] text-xs rounded-md hover:bg-[#334155] transition-colors">
          Request a demo
        </button>
      </div>
    </nav>
  )
}
