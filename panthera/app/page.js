"use client"

import { useScroll, useTransform } from "framer-motion"
import dynamic from 'next/dynamic'
import Footer from "./components/Footer"
import LandingPage from "./LandingPage/page"
import Nav from "./components/Nav"
const NoSSR = dynamic(() => import('./components/Points'), { ssr: false })

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return (
  <main>
  <Nav/>
  <LandingPage /> 
   <Footer/> 
  </main>
  )
}

