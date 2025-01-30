import React, { useRef, useState, useEffect } from "react"

const SliderAbout = () => {
  const sliderRef = useRef(null)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e) => {
    setIsDown(true)
    setStartX(e.pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDown(false)
  }

  const handleMouseUp = () => {
    setIsDown(false)
  }

  const handleMouseMove = (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2
    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchStart = (e) => {
    setIsDown(true)
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
  }

  const handleTouchMove = (e) => {
    if (!isDown) return
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2
    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <section className="w-full px-4 py-12 md:py-16 lg:py-20">
      <div
        ref={sliderRef}
        className="grid grid-flow-col auto-cols-[85%] md:grid-cols-4 gap-4 overflow-x-auto md:overflow-hidden 
                   touch-pan-x snap-x snap-mandatory no-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
        style={{
          cursor: isDown ? "grabbing" : "grab",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="bg-[#849BA7] rounded-3xl p-8 flex flex-col justify-end snap-start">
          <h2 className="text-white text-lg md:text-md font-medium mb-4 leading-tight">
            Shaping the Future of Real Estate Intelligence
          </h2>
          <p className="text-white text-xs">
            Panthera empowers developers, investors, and enterprises with advanced analytics and predictive insights to
            redefine decision-making in the real estate industry.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden snap-start">
          <img
            src="./slider1.png"
            alt="Modern architectural building with blue sky"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="bg-[#849BA7] rounded-3xl p-8 flex flex-col justify-end snap-start">
          <h2 className="text-white text-lg md:text-md font-medium mb-4 leading-tight">
            Powered by Advanced Analytics and Innovation
          </h2>
          <p className="text-white text-xs">
            At Panthera, we believe that the fusion of innovation and actionable insights will transform how real estate
            decisions are made.
          </p>
        </div>

        <div className="  rounded-3xl overflow-hidden snap-start">
          <img
            src="./slider2.png"
            alt="Circular architectural detail"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}

export default SliderAbout