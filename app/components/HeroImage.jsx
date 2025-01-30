"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion"

const HeroImage = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 100 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const controls = useAnimation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          controls.start("visible")
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const moveX = (event.clientX - centerX) / 25
    const moveY = (event.clientY - centerY) / 25

    x.set(moveX)
    y.set(moveY)
  }

  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  }

  return (
    <div >
    <div
      ref={ref}
      className="relative min-h-[23rem] sm:min-h-[24rem] md:min-h-[24rem]  lg:min-h-screen w-full bg-transparent"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false)
        x.set(0)
        y.set(0)
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-[22rem] sm:h-full lg:h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-background relative w-full h-0 pb-[100%] sm:pb-[56.25%] bg-no-repeat bg-contain bg-center transition-all duration-300">
            <div className="absolute inset-7 sm:inset-16 md:inset-16 lg:inset-20 flex items-center justify-center">
              <motion.div
                className="w-[110%] h-[110%] max-w-[35rem] max-h-[35rem] relative"
                style={{
                  x: springX,
                  y: springY,
                }}
                initial="hidden"
                animate={controls}
                variants={variants}
              >
                <img src="./dash.png" alt="Dashboard" className="w-full h-full object-contain" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero-background {
          background-image: var(--hero-bg-image);
        }
        @media (max-width: 639px) {
          .hero-background {
            --hero-bg-image: url('./smallheroimg.png');
          }
        }
        @media (min-width: 640px) {
          .hero-background {
            --hero-bg-image: url('./herobg.png');
          }
        }
      `}</style>
    </div>
    
    </div>
  )
}

export default HeroImage

