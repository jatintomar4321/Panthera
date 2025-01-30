"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"

export default function Testimonials() {
  const [width, setWidth] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const carousel = useRef(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  const testimonials = [
    {
      id: 4,
      name: "Lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 5,
      name: "Lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 6,
      name: "Lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const progress = useTransform(x, [0, -width], [0, 1])

  useEffect(() => {
    const unsubscribe = progress.onChange((v) => setScrollProgress(v))
    return () => unsubscribe()
  }, [progress])

  return (
    <section className="relative w-full mx-auto bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testbg-hIl8pYf9SIZC4wyAwUDJKrbQaguf7l.png')`,
        }}
      />
      <div className="relative min-h-screen w-full mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="mx-auto max-w-7xl w-full">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl font-medium text-white sm:text-5xl">Testimonials</h2>
            <p className="mx-auto max-w-2xl text-sm text-white tracking-tight leading-4 sm:text-base sm:leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </div>

          {/* Testimonials Slider/Grid */}
          <motion.div ref={carousel} className="overflow-hidden  lg:mx-40  cursor-grab active:cursor-grabbing">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex  gap-4 md:grid md:grid-cols-2 lg:grid-cols-3"
              style={{ x }}
              onDrag={(_, info) => {
                if (info.offset.x < 0) {
                  controls.start({ opacity: 1 - Math.abs(info.offset.x)+2 / width })
                }
              }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="relative overflow-hidden rounded-3xl bg-white/30 backdrop-blur-sm min-w-[280px] md:min-w-0"
                  whileHover={{ scale: 1.009 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="p-6">
                    {/* Avatar */}
                    <div className="mb-20 h-12 w-12 overflow-hidden rounded-full bg-gray-200"></div>

                    {/* Content */}
                    <h3 className="mb-2 text-md font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-white leading-[0.87rem] text-[0.75rem] sm:leading-5 sm:text-sm">
                      {testimonial.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Progress Indicators */}
          {width > 0 && (
            <div className="flex justify-center mt-4 gap-2">
              {[0, 0.5, 1].map((target) => (
                <motion.div
                  key={target}
                  className="w-2 h-2 rounded-full bg-white/50"
                  animate={{
                    scale: Math.abs(scrollProgress - target) < 0.2 ? 1.5 : 1,
                    opacity: Math.abs(scrollProgress - target) < 0.2 ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

