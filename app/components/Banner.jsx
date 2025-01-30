import Image from "next/image"

const COMPANY_LOGOS = [
  {
    src: "https://v0.dev/placeholder-logo.svg",
    alt: "Google",
    width: 140,
    height: 40,
  },
  {
    src: "https://v0.dev/placeholder-logo.svg",
    alt: "Microsoft",
    width: 140,
    height: 40,
  },
  {
    src: "https://v0.dev/placeholder-logo.svg",
    alt: "Apple",
    width: 140,
    height: 40,
  },
  {
    src: "https://v0.dev/placeholder-logo.svg",
    alt: "Amazon",
    width: 140,
    height: 40,
  },
  {
    src: "https://v0.dev/placeholder-logo.svg",
    alt: "Meta",
    width: 140,
    height: 40,
  },
  {
    src: "https://v0.dev/placeholder-logo.svg",
    alt: "Netflix",
    width: 140,
    height: 40,
  },
  {
    src: "https://v0.dev/placeholder-logo.svg",
    alt: "Tesla",
    width: 140,
    height: 40,
  },
]

export default function Banner() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
            TRUSTED BY INDUSTRY LEADERS AND DEVELOPERS
          </h2>

          <div className="w-full overflow-hidden">
            <div className="flex animate-marquee space-x-8 mb-28 whitespace-nowrap">
              {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-[900px] space-y-4 mt-36">
            <h1 className="text-3xl text-black font-medium tracking-tighter sm:text-2xl md:text-4xl lg:text-4xl">
              Redefining Real Estate Precision
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-sm lg:text-sm leading-2 xl:text-sm ">
              Panthera empowers real estate professionals with advanced analytics and predictive tools. Our platform
              delivers data-driven solutions to meet the evolving needs of the industry, helping you make smarter,
              faster decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

