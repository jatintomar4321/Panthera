import Image from "next/image"

export default function AboutCrd1() {
  return (
    <section className=" mx-8 px-2 py-10 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-16 items-center">


      <div className="space-y-6 order-2 lg:order-1 md:order-1 content-center">
          <h2 className="text-3xl md:text-5xl lg:text-5xl max-w-[30rem] text-black font-medium tracking-tight">
            Powered by Advanced Analytics and Innovation
          </h2>
          <p className="text-muted-foreground text-black text-[0.9rem] max-w-xl leading-tight">
            At Panthera, we believe that the fusion of innovation and actionable insights will transform how real estate
            decisions are made. By harnessing cutting-edge AI and data science, we empower professionals to navigate
            markets with precision and confidence. We stand at the forefront of analytics and predictive modeling,
            delivering tools that redefine market intelligence and unlock unparalleled growth opportunities.
          </p>
        </div>


        <div className="relative order-1  w-full rounded-3xl overflow-hidden">
          <img
            src="./rightcard.png"
            alt="Abstract curved lines"
            fill
            className="object-cover"
            priority
          />
        </div>
       
      </div>
    </section>
  )
}

