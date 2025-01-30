"use client"
const features = [
  {
    title: "Flexible",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
  {
    title: "Reliable",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
  {
    title: "Protected",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
]

export default function Points() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-full">
  
      <div className="text-center mb-4">
        <h1 className="text-5xl font-medium mb-6 text-black tracking-tight">Drive Real Estate Success with Your Data</h1>
        <p className="text-xs text-gray-600 max-w-2xl mb-20  mx-auto">
          Panthera transforms your data into actionable insights, empowering real estate success. With a scalable,
          accurate, and secure platform, we help you stay ahead in a dynamic market.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-4xl mx-auto">
        {features.map((feature) => (
          <div key={feature.title} className="text-center">
            <div className="mb-6 flex justify-start">
              <div className="w-16 h-16 bg-gray-200 rounded-full" />
            </div>
            <h2 className="text-xl text-start text-black font-normal mb-2">{feature.title}</h2>
            <p className="text-gray-600 text-start text-xs">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

