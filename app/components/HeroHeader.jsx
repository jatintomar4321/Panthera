"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function HeroHeader() {
  const ref = useRef(null)
  const [elementTop, setElementTop] = useState(0)
  const [elementBottom, setElementBottom] = useState(0)

  const { scrollY } = useScroll()

  useEffect(() => {
    const element = ref.current
    if (element) {
      const updatePosition = () => {
        const rect = element.getBoundingClientRect()
        setElementTop(rect.top + window.scrollY)
        setElementBottom(rect.bottom + window.scrollY)
      }

      updatePosition()
      window.addEventListener("resize", updatePosition)
      return () => window.removeEventListener("resize", updatePosition)
    }
  }, [])

  const opacity = useTransform(scrollY, [elementTop, elementBottom], [2, - 1])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2.0,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ opacity }}
      className="flex flex-col pb-10 lg:pb-10 items-center justify-center text-center px-4 sm:px-6 pt-16 sm:pt-24 bg-white mt-16"
    >
      <motion.p variants={itemVariants} className="text-[#686767] text-xs sm:text-sm tracking-tighter mb-4 sm:mb-6">
        EMPOWERING SMARTER PROPERTY DECISIONS
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="text-[#040404] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-medium leading-tight tracking-tight mb-4 sm:mb-6 max-w-4xl mx-auto"
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        Revolutionising Real Estate with Data Insights
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-[#040404] text-sm px-4 sm:px-4 sm:text-sm md:text-sm mb-5 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto"
      >
        Harness actionable intelligence to simplify, optimize, and transform your real estate strategies.
      </motion.p>

      <motion.button
        variants={buttonVariants}
        className="px-4 py-2 sm:px-6 sm:py-3 text-white bg-[#385E71] rounded-md text-xs sm:text-sm"
      >
        Request a demo
      </motion.button>
    </motion.div>
  )
}

