const About3 = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("./about3.png")',
          filter: "brightness(0.8)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen items-end lg:px-28 px-2 sm:px-10 md:px-28 py-28">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="max-w-[700px] space-y-6">
            <h1 className="text-3xl font-normal leading-tight tracking-normal text-white sm:text-4xl md:text-5xl">
              A Passionate Team of Innovators
            </h1>

            <p className="text-xs max-w-[600px] leading-relaxed text-gray-200 sm:text-xs">
              {
                "We are a collective of analytics experts, real estate professionals, and visionaries who share a commitment to redefining market intelligence. With diverse expertise and a shared goal of fostering transparency and growth, our team works collaboratively to build tools that empower stakeholders across the real estate industry. At Panthera, we don't just follow trends—we set them."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About3

