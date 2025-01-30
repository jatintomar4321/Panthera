"use client"
import React, { useState, useRef, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [startX, setStartX] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const sliderRef = useRef(null)

  const slides = [
    { id: 1, title: "Modern Office Space", image: "https://source.unsplash.com/random/800x600?office" },
    { id: 2, title: "Corporate Building", image: "https://source.unsplash.com/random/800x600?building" },
    { id: 3, title: "Residential Complex", image: "https://source.unsplash.com/random/800x600?apartment" },
    { id: 4, title: "Business Center", image: "https://source.unsplash.com/random/800x600?business" },
    { id: 5, title: "Urban Development", image: "https://source.unsplash.com/random/800x600?city" },
    { id: 6, title: "Commercial Property", image: "https://source.unsplash.com/random/800x600?commercial" },
    { id: 7, title: "Retail Space", image: "https://source.unsplash.com/random/800x600?retail" },
    { id: 8, title: "Industrial Complex", image: "https://source.unsplash.com/random/800x600?industrial" },
    { id: 9, title: "Mixed-Use Development", image: "https://source.unsplash.com/random/800x600?development" },
    { id: 10, title: "Smart Building", image: "https://source.unsplash.com/random/800x600?smart-building" },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (slides.length - 2))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (slides.length - 2)) % (slides.length - 2))
  }, [])

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return

    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    setStartX(null)
    setIsDragging(false)
    setDragOffset(0)
  }, [isDragging, dragOffset, nextSlide, prevSlide])

  const handleTouchStart = useCallback((e) => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }, [])

  const handleMouseDown = useCallback((e) => {
    setStartX(e.clientX)
    setIsDragging(true)
  }, [])

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging || startX === null) return
      const currentX = e.touches[0].clientX
      const diff = startX - currentX
      setDragOffset(diff)
    },
    [isDragging, startX],
  )

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging || startX === null) return
      const currentX = e.clientX
      const diff = startX - currentX
      setDragOffset(diff)
    },
    [isDragging, startX],
  )

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    slider.addEventListener("touchstart", handleTouchStart)
    slider.addEventListener("touchmove", handleTouchMove)
    slider.addEventListener("touchend", handleDragEnd)
    slider.addEventListener("mousedown", handleMouseDown)
    slider.addEventListener("mousemove", handleMouseMove)
    slider.addEventListener("mouseup", handleDragEnd)
    slider.addEventListener("mouseleave", handleDragEnd)

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart)
      slider.removeEventListener("touchmove", handleTouchMove)
      slider.removeEventListener("touchend", handleDragEnd)
      slider.removeEventListener("mousedown", handleMouseDown)
      slider.removeEventListener("mousemove", handleMouseMove)
      slider.removeEventListener("mouseup", handleDragEnd)
      slider.removeEventListener("mouseleave", handleDragEnd)
    }
  }, [handleTouchStart, handleTouchMove, handleDragEnd, handleMouseDown, handleMouseMove])

  const translateValue = isDragging ? `calc(-${currentSlide * 33.33}% - ${dragOffset}px)` : `-${currentSlide * 33.33}%`

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-normal">Drive Real Estate Success with Your Data (Applications)</h2>
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden" ref={sliderRef} style={{ touchAction: "pan-y pinch-zoom" }}>
        <div
          className={`flex transition-transform duration-300 ${isDragging ? "duration-0" : ""}`}
          style={{
            transform: `translateX(${translateValue})`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-none w-full md:w-1/2 lg:w-1/3 p-2"
              style={{ pointerEvents: isDragging ? "none" : "auto" }}
            >
              <div className="rounded-lg overflow-hidden shadow-lg group">
                <div className="relative">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{slide.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: slides.length - 2 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-black w-4" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider

