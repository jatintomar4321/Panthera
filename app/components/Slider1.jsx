import { useRef, useState } from "react"

const SliderAbout = () => {
  const sliderRef = useRef(null)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)

  const handleStart = (clientX, clientY) => {
    setIsDown(true)
    setStartX(clientX - sliderRef.current.offsetLeft)
    setStartY(clientY - sliderRef.current.offsetTop)
    setScrollLeft(sliderRef.current.scrollLeft)
    setScrollTop(sliderRef.current.scrollTop)
  }

  const handleEnd = () => {
    setIsDown(false)
  }

  const handleMove = (clientX, clientY) => {
    if (!isDown) return
    const x = clientX - sliderRef.current.offsetLeft
    const y = clientY - sliderRef.current.offsetTop
    const walkX = (x - startX) * 2
    const walkY = (y - startY) * 2
    sliderRef.current.scrollLeft = scrollLeft - walkX
    sliderRef.current.scrollTop = scrollTop - walkY
  }

  const handleMouseDown = (e) => handleStart(e.pageX, e.pageY)
  const handleMouseMove = (e) => handleMove(e.pageX, e.pageY)

  const handleTouchStart = (e) => handleStart(e.touches[0].clientX, e.touches[0].clientY)
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY)

  return (
    <section className="w-full px-4 py-8 md:py-10 lg:py-12">
      <div
        ref={sliderRef}
        className="grid grid-flow-col auto-cols-[85%] md:grid-cols-4 gap-4 overflow-x-auto md:overflow-hidden 
                   touch-pan-x snap-x snap-mandatory no-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleEnd}
        onMouseUp={handleEnd}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleEnd}
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

        <div className="rounded-3xl overflow-hidden snap-start">
          <img src="./slider2.png" alt="Circular architectural detail" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  )
}

export default SliderAbout

