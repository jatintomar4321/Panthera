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
          px-4 sm:px-16 py-4 bg-white text-[#031D42] font-medium z-50
          transform transition-transform duration-500
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
          shadow-sm
        `}
      >
        <div className="flex items-center">
          <Link href="/">
          <svg width="220" height="30" viewBox="0 0 234 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_200_7224)">
              <path d="M34.9948 22.365C34.5197 21.4514 34.1405 20.5077 33.6347 19.6229C33.2981 19.0331 32.9653 18.4433 32.613 17.8599C32.5196 17.7066 32.5096 17.611 32.6374 17.4742C33.6303 16.4125 33.792 15.1019 33.7657 13.7741C33.7563 13.317 33.3125 12.9726 32.9584 12.6535C32.0758 11.8607 31.0435 11.6401 29.8551 11.9062C28.9988 12.0984 28.1508 11.8141 27.2983 11.7664C26.5794 11.7257 25.9908 11.426 25.4066 11.0869C22.2726 9.26784 18.8252 8.50814 15.1898 8.41612C13.8359 8.38191 12.5534 8.65205 11.5117 9.55627C11.3575 9.69075 11.1839 9.80223 10.9614 9.7226C9.77985 9.29674 8.60146 9.52559 7.43435 9.76094C6.76869 9.89483 6.11807 10.1107 5.47184 10.3107C4.90395 10.4876 4.68081 10.8486 4.75665 11.4184C4.7699 11.569 4.80166 11.7176 4.8513 11.8613C5.01051 12.2589 4.93153 12.6128 4.76167 13.0021C4.23077 14.2142 4.40063 15.3891 5.11832 16.4945C5.37782 16.8932 5.76643 17.1704 6.27101 17.2388C6.54868 17.2766 6.62139 17.4046 6.61575 17.6405C6.60196 18.2238 6.69723 18.7877 7.02004 19.2985C7.12033 19.4566 7.21623 19.6288 7.48512 19.7197C7.31463 19.2372 7.38922 18.8084 7.46757 18.3772C7.65561 17.3373 8.17962 16.5729 9.33544 16.3051C9.4895 16.2666 9.63715 16.2083 9.77421 16.1317C10.4794 15.7519 11.0341 15.9837 11.5662 16.4691C11.8858 16.7508 12.1424 17.0898 12.321 17.466C12.4995 17.8423 12.5965 18.2483 12.6061 18.6603C12.6738 20.3797 12.2545 21.9575 11.1676 23.379C10.7288 23.954 9.20256 24.1859 8.58203 23.9387C8.35011 23.8461 8.23854 23.658 8.14327 23.4515C7.95523 23.0439 7.93203 22.6045 7.84428 22.1055C7.55798 22.4969 7.38652 22.9524 7.34723 23.4261C7.32842 23.596 7.34284 23.747 7.08084 23.7553C6.81883 23.7635 6.86584 23.9611 6.88339 24.1263C6.99559 25.2033 7.60547 26.0238 8.43912 26.705C9.57864 27.6358 10.8836 28.2793 12.3779 28.5412C12.5066 28.5628 12.6366 28.5762 12.7672 28.5813C13.0455 28.5937 13.2442 28.5612 13.0536 28.2209C12.9283 27.9968 12.9421 27.749 13.006 27.4972C13.2135 26.6968 13.6848 26.0568 14.3279 25.513C14.6708 25.2222 15.0111 25.2027 15.3935 25.4404C17.1617 26.534 17.9634 28.087 17.8142 30.0547C17.6776 31.8413 16.8326 33.3536 15.6317 34.7096C15.5533 34.8057 15.451 34.8821 15.3338 34.9321C15.2166 34.9821 15.0881 35.0041 14.9597 34.9963C13.0348 34.9827 11.1099 34.9774 9.18501 34.9992C8.79765 35.0039 8.74061 34.8854 8.74625 34.5616C8.76693 33.4503 8.74186 32.3385 8.76255 31.2273C8.76756 30.9323 8.67667 30.8686 8.37644 30.8734C7.18112 30.8905 5.98456 30.8651 4.78988 30.8899C4.42884 30.8975 4.36678 30.7849 4.3718 30.477C4.38998 29.3793 4.3649 28.281 4.38747 27.184C4.39436 26.8566 4.33168 26.7428 3.94871 26.7516C2.7534 26.7793 1.55746 26.7516 0.361519 26.7675C0.0850998 26.7705 -0.00390625 26.7121 -0.00390625 26.4343C0.00570471 20.4794 0.00570471 14.524 -0.00390625 8.5683C-0.00390625 8.29639 0.0750708 8.23092 0.356505 8.23386C1.58128 8.24861 2.80605 8.23092 4.03082 8.24743C4.32416 8.25156 4.3881 8.16898 4.38496 7.90651C4.36992 6.75398 4.38872 5.60086 4.37054 4.44892C4.36616 4.17052 4.45892 4.11389 4.73472 4.11743C5.94445 4.131 7.15543 4.10917 8.36515 4.13218C8.70676 4.13867 8.76631 4.04075 8.76129 3.74525C8.74186 2.62044 8.76129 1.49504 8.74688 0.369643C8.74311 0.10127 8.78574 -0.00254046 9.11293 -0.00195063C14.6977 0.00905956 20.2825 0.00905956 25.8673 -0.00195063C26.1651 -0.00195063 26.2616 0.0570325 26.2566 0.351948C26.2365 1.50448 26.2566 2.65701 26.2415 3.80954C26.2415 4.0614 26.3042 4.13159 26.5763 4.12805C27.801 4.11271 29.0258 4.13218 30.2506 4.11389C30.564 4.10917 30.6354 4.18998 30.631 4.47664C30.6122 5.61501 30.6361 6.75457 30.6147 7.89294C30.6091 8.19199 30.7056 8.24684 31.0027 8.24684C32.2131 8.23033 33.4234 8.24684 34.6338 8.23327C34.9184 8.22974 34.9973 8.30052 34.9967 8.57243C34.9917 13.1708 34.9911 17.7683 34.9948 22.365Z" fill="#031D42"/>
              <path d="M16.1138 10.8733C14.6439 11.6649 13.223 11.843 11.6484 11.2608C12.2426 10.8627 12.7209 10.379 13.5 10.4651C14.3418 10.5583 15.1918 10.6073 16.1138 10.8733Z" fill="#031D42"/>
              </g>
              <path d="M55 7.00024H62.1236V8.42455H56.4247V13.4096H62.1236V14.8339H56.4247V19.1068H55V7.00024ZM63.5483 8.42455V13.4096H62.1236V8.42455H63.5483ZM78.5867 9.84885H80.0114V14.1217H85.7103V9.84885H87.135V19.1068H85.7103V15.5461H80.0114V19.1068H78.5867V9.84885ZM80.0114 8.42455H81.4361V9.84885H80.0114V8.42455ZM84.2856 7.00024V8.42455H81.4361V7.00024H84.2856ZM85.7103 8.42455V9.84885H84.2856V8.42455H85.7103ZM102.923 7.00024H105.773V8.42455H104.348V19.1068H102.923V7.00024ZM112.896 7.00024V19.1068H110.047V17.6825H111.472V7.00024H112.896ZM108.622 11.9853V14.1217H107.198V11.9853H108.622ZM107.198 8.42455V11.9853H105.773V8.42455H107.198ZM108.622 14.1217H110.047V17.6825H108.622V14.1217ZM131.908 8.42455H127.633V7.00024H137.607V8.42455H133.332V19.1068H131.908V8.42455ZM152.326 7.00024H153.751V11.9853H160.162V7.00024H161.587V19.1068H160.162V13.4096H153.751V19.1068H152.326V7.00024ZM177.512 7.00024H186.061V8.42455H178.937V11.9853H185.348V13.4096H178.937V17.6825H186.061V19.1068H177.512V7.00024ZM201.572 7.00024H208.695V8.42455H202.996V12.6974H208.695V14.1217H207.271V15.5461H205.846V14.1217H202.996V19.1068H201.572V7.00024ZM210.12 8.42455V12.6974H208.695V8.42455H210.12ZM208.695 17.6825H210.12V19.1068H208.695V17.6825ZM207.271 15.5461H208.695V17.6825H207.271V15.5461ZM225.432 9.84885H226.857V14.1217H232.556V9.84885H233.981V19.1068H232.556V15.5461H226.857V19.1068H225.432V9.84885ZM226.857 8.42455H228.282V9.84885H226.857V8.42455ZM231.131 7.00024V8.42455H228.282V7.00024H231.131ZM232.556 8.42455V9.84885H231.131V8.42455H232.556Z" fill="#031D42"/>
              <path d="M181.23 27.9282H180.719V23.1052H181.23V25.2648H184.332V23.1052H184.843V27.9282H184.332V25.7327H181.23V27.9282Z" fill="#031D42"/>
              <path d="M171.225 27.9999C169.814 27.9999 168.82 27.0209 168.82 25.5164C168.82 24.012 169.814 23.033 171.225 23.033C172.47 23.033 173.413 23.7312 173.413 24.8254V24.9118H172.859V24.8254C172.859 24.0048 172.29 23.5297 171.232 23.5297C170.03 23.5297 169.36 24.2063 169.36 25.5164C169.36 26.8266 170.03 27.5032 171.232 27.5032C172.29 27.5032 172.859 27.0281 172.859 26.2075V26.1211H173.413V26.2075C173.413 27.3017 172.477 27.9999 171.225 27.9999Z" fill="#031D42"/>
              <path d="M161.664 27.9282H158V23.1052H161.664V23.5731H158.511V25.272H161.556V25.7327H158.511V27.4603H161.664V27.9282Z" fill="#031D42"/>
              <path d="M148.892 27.9282H148.381V23.5731H146.395V23.1052H150.872V23.5731H148.892V27.9282Z" fill="#031D42"/>
              <path d="M136.992 27.9999C135.559 27.9999 134.559 27.0209 134.559 25.5164C134.559 24.012 135.559 23.033 136.992 23.033C138.439 23.033 139.439 24.012 139.439 25.5164C139.439 27.0209 138.439 27.9999 136.992 27.9999ZM136.992 27.5032C138.215 27.5032 138.899 26.8266 138.899 25.5164C138.899 24.2063 138.215 23.5297 136.992 23.5297C135.775 23.5297 135.098 24.2063 135.098 25.5164C135.098 26.8266 135.775 27.5032 136.992 27.5032Z" fill="#031D42"/>
              <path d="M124.327 27.9282H123.816V23.1052H127.43V23.5731H124.327V25.4159H127.322V25.8766H124.327V27.9282Z" fill="#031D42"/>
              <path d="M112.636 27.9282H112.125V23.1052H112.686L115.213 26.3805L115.796 27.1868H115.839L115.825 26.3949V23.1052H116.336V27.9282H115.775L113.262 24.6889L112.658 23.8755H112.622L112.636 24.6817V27.9282Z" fill="#031D42"/>
              <path d="M104.644 27.9282H104.133V23.1052H104.644V27.9282Z" fill="#031D42"/>
              <defs>
              <clipPath id="clip0_200_7224">
              <rect width="35" height="35" fill="white"/>
              </clipPath>
              </defs>
            </svg>         
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
            className="px-4 py-2 bg-[#ffff] text-[#000] rounded-full text-lg font-semibold"
          >
            X
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

