"use client"

import Nav from "./components/Nav"
import HeroHeader from "./components/HeroHeader"
import HeroImage from "./components/HeroImage"
import { motion, useScroll, useTransform } from "framer-motion"
import Banner from "./components/Banner"
import AnalyticsDashboard from "./components/AnalyticsDashboard"
import Points from "./components/points"
import dynamic from 'next/dynamic'
import InsightsSlider from "./components/InsightsSlider"
const NoSSR = dynamic(() => import('./components/Points'), { ssr: false })

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main className="min-h-screen flex flex-col bg-white">
   
      <Nav />
      <div className="relative">
        <motion.div style={{ opacity: heroOpacity }} className="sticky top-0 z-10">
          <HeroHeader />
        </motion.div>
        <div className="relative z-20">
          <HeroImage />
          <AnalyticsDashboard/>
          
        </div>
        <NoSSR />
        
      </div>
      {/* <Banner /> */}
    </main>
  )
}

