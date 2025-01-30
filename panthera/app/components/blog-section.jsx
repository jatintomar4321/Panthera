import Image from "next/image"

export default function BlogSection() {
  return (
    <div className="max-w-4xl sm:mx-20 mx-4  lg:mx-80 px-4  py-5 space-y-12">
      {/* Text Content */}
      <div className="prose prose-lg text-sm  dark:prose-invert">
        <p className="text-black leading-relaxed">
          We are a collective of analytics experts, real estate professionals, and visionaries who share a commitment to
          redefining market intelligence. With diverse expertise and a shared goal of fostering transparency and growth,
          our team works collaboratively to build tools that empower stakeholders across the real estate industry. At
          Panthera, we don't just follow trends—we set them.
          We are a collective of analytics experts, real estate professionals, and visionaries who share a commitment to
          redefining market intelligence. With diverse expertise and a shared goal of fostering transparency and growth,
          our team works collaboratively to build tools that empower stakeholders across the real estate industry. At
          Panthera, we don't just follow trends—we set them.
          We are a collective of analytics experts, real estate professionals, and visionaries who share a commitment to
          redefining market intelligence. With diverse expertise and a shared goal of fostering transparency and growth,
          our team works collaboratively to build tools that empower stakeholders across the real estate industry. At
          Panthera, we don't just follow trends—we set them.
        </p>
      </div>

      {/* Chart Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-black">
          Figure 1: Quarter-over-Quarter Change in IRR Target & Cap Rates for Core Assets
        </h3>

        <div className="w-full bg-white text-black rounded-lg p-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-24%20at%205.38.42%E2%80%AFPM%201-LBXcahoBC1ATViz9MCRFL8qanPgtAk.png"
            alt="Quarter-over-Quarter Change in IRR Target & Cap Rates for Core Assets"
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>

        <p className="text-xs text-black">Source: CBRE Research, Q4 2024</p>
      </div>

      {/* Additional Text Content */}
      <div className="prose prose-lg text-sm dark:prose-invert">
        <p className="text-black  leading-relaxed">
          We are a collective of analytics experts, real estate professionals, and visionaries who share a commitment to
          redefining market intelligence. With diverse expertise and a shared goal of fostering transparency and growth,
          our team works collaboratively to build tools that empower stakeholders across the real estate industry. At
          Panthera, we don't just follow trends—we set them.
          We are a collective of analytics experts, real estate professionals, and visionaries who share a commitment to
          redefining market intelligence. With diverse expertise and a shared goal of fostering transparency and growth,
          our team works collaboratively to build tools that empower stakeholders across the real estate industry. At
          Panthera, we don't just follow trends—we set them.
          We are a collective of analytics experts, real estate professionals, and visionaries who share a commitment to
          redefining market intelligence. With diverse expertise and a shared goal of fostering transparency and growth,
          our team works collaboratively to build tools that empower stakeholders across the real estate industry. At
          Panthera, we don't just follow trends—we set them.
        </p>
      </div>
    </div>
  )
}

