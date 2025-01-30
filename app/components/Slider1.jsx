








import { useRef, useState, useEffect, useCallback } from "react"

const SliderAbout = ({c1h,c1p,i1,c2h,c2p,i2}) => {
  const sliderRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleStart = useCallback((clientX) => {
    setIsDown(true)
    setStartX(clientX - (sliderRef.current?.offsetLeft || 0))
    setScrollLeft(sliderRef.current?.scrollLeft || 0)
  }, [])

  const handleEnd = useCallback(() => {
    setIsDown(false)
  }, [])

  const handleMove = useCallback(
    (clientX) => {
      if (!isDown) return
      const x = clientX - (sliderRef.current?.offsetLeft || 0)
      const walk = (x - startX) * 2
      if (sliderRef.current) {
        sliderRef.current.scrollLeft = scrollLeft - walk
      }
    },
    [isDown, startX, scrollLeft],
  )

  const handleMouseDown = useCallback((e) => handleStart(e.pageX), [handleStart])
  const handleMouseMove = useCallback((e) => handleMove(e.pageX), [handleMove])
  const handleTouchStart = useCallback((e) => handleStart(e.touches[0].clientX), [handleStart])
  const handleTouchMove = useCallback((e) => handleMove(e.touches[0].clientX), [handleMove])

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const handleScroll = () => {
      const index = Math.round(slider.scrollLeft / slider.offsetWidth)
      setCurrentSlide(index)
    }

    slider.addEventListener("scroll", handleScroll)
    return () => slider.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="w-full px-4 py-8 md:py-10 lg:py-12">
      <div
        ref={sliderRef}
        className="grid grid-flow-col md:grid-flow-row md:grid-cols-4 auto-cols-[85%] gap-4 overflow-x-auto md:overflow-visible
                   touch-pan-x snap-x snap-mandatory md:snap-none no-scrollbar"
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
          scrollBehavior: "smooth",
        }}
      >
        <div className="bg-[#849BA7] rounded-3xl p-8 flex flex-col justify-end snap-start">
          <h2 className="text-white text-lg md:text-md font-medium mb-4 leading-tight">
              {c1h}   
             </h2>
          <p className="text-white text-xs">
            {c1p}
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden snap-start">
          <img
            src={i1}
            alt="Modern architectural building with blue sky"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="bg-[#849BA7] rounded-3xl p-8 flex flex-col justify-end snap-start">
          <h2 className="text-white text-lg md:text-md font-medium mb-4 leading-tight">
            {c2h}
          </h2>
          <p className="text-white text-xs">
            {c2p}
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden snap-start">
          <img src={i2} alt="Circular architectural detail" className="object-cover w-full h-full" />
        </div>
      </div>
      <div className="flex justify-center mt-4 md:hidden">
        {[...Array(4)].map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
              index === currentSlide ? "bg-[#849BA7] w-4" : "bg-gray-300"
            }`}
            onClick={() => {
              if (sliderRef.current) {
                sliderRef.current.scrollTo({
                  left: index * sliderRef.current.offsetWidth,
                  behavior: "smooth",
                })
              }
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default SliderAbout

