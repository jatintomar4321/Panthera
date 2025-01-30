"use Client"
import SliderAbout from "./Slider1"

const FounderSection = () => {
  return (
    <section className="w-full bg-white text-black pt-8 md:pt-12 lg:pt-16">
      <div className="w-full max-w-[90%] md:max-w-[85%] lg:max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-2 md:mb-2">Founders</h2>
        <p className="text-xs md:text-xs lg:text-xs leading-3 max-w-3xl mx-auto">
          Panthera transforms your data into actionable insights, empowering real estate success. With a scalable,
          accurate, and secure platform, we help you stay ahead in a dynamic market.
        </p>
        
      </div>
      <SliderAbout/>
    </section>
  )
}

export default FounderSection


