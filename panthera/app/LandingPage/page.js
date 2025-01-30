"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import HeroHeader from "../components/HeroHeader"
import HeroImage from "../components/HeroImage"

import dynamic from 'next/dynamic'
import AnalyticsDashboard from "../components/AnalyticsDashboard"
import Testimonials from "../components/Testimonial"
const NoSSR = dynamic(() => import('../components/Points'), { ssr: false })

export default function LandingPage() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, -1])

  return (
    <main className="min-h-screen flex flex-col bg-white">
   
      
      <div className="relative">
        <motion.div style={{ opacity: heroOpacity }} className="sticky top-0 z-10">
          <HeroHeader />
        </motion.div>
        <div className="relative z-20">
          <HeroImage />
          <AnalyticsDashboard/>
          
        </div>
        <NoSSR />
        {/* <Slider/> */}
        <Testimonials/>
        
        
      </div>
     
      {/* <Banner /> */}x
    </main>
  )
}

