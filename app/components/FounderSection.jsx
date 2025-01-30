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
      <SliderAbout
         c1h="Alejandro González Iñárritu"
      c1p="We are a collective of analytics experts, real estate professionals, and visionaries who share a commitment to redefining market intelligence."
      i1="./founder.png"
      c2h="Powered by Advanced Analytics and Innovation"
      c2p="At Panthera, we believe that the fusion of innovation and actionable insights will transform how real estate
            decisions are made."
      i2="./ceo.png"
      />
    </section>
  )
}

export default FounderSection


