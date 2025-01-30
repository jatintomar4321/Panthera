"use client"
import React, { useState, useEffect, useRef } from "react"
import FastPixelAnimation from "./FastPixelAnimation"

const deviceData = []

const locationData = [
  { name: "United States", value: 38.6 },
  { name: "Canada", value: 22.5 },
  { name: "Mexico", value: 30.8 },
  { name: "Other", value: 8.1 },
]

const BarChart = ({ data }) => {
  return (
    <div className="relative w-full max-w-[300px] aspect-square mx-auto">
      <img src="/bar.png" alt="Traffic by Device Chart" className="w-full  object-contain" />
    </div>
  )
}

const AnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = useState("market")
  const [showLeftAnimation, setShowLeftAnimation] = useState(false)
  const [showRightAnimation, setShowRightAnimation] = useState(false)
  const leftPanelRef = useRef(null)
  const rightPanelRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.01, // Trigger when 10% of the panel is visible
    }

    const leftObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowLeftAnimation(true)
        leftObserver.disconnect()
      }
    }, observerOptions)

    const rightObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowRightAnimation(true)
        rightObserver.disconnect()
      }
    }, observerOptions)

    if (leftPanelRef.current) {
      leftObserver.observe(leftPanelRef.current)
    }

    if (rightPanelRef.current) {
      rightObserver.observe(rightPanelRef.current)
    }

    return () => {
      if (leftPanelRef.current) {
        leftObserver.unobserve(leftPanelRef.current)
      }
      if (rightPanelRef.current) {
        rightObserver.unobserve(rightPanelRef.current)
      }
    }
  }, [])

  const handleLeftAnimationComplete = () => {
    setShowLeftAnimation(false)
  }

  const handleRightAnimationComplete = () => {
    setShowRightAnimation(false)
  }
  

  const renderTabContent = () => {
    switch (activeTab) {
      case "market":
        return (
          <>
            <h2 className="text-2xl md:text-4xl font-medium mb-2">Market Trends & Analysis</h2>
            <p className="text-xs md:text-sm mb-6">
              Empowering real estate professionals with precision and clarity, Panthera integrates advanced analytics.
            </p>
            <button className="bg-white text-black px-4 md:px-6 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm md:text-base">
              Learn more
            </button>
          </>
        )
      case "predictive":
        return (
          <>
            <h2 className="text-2xl md:text-4xl font-medium mb-2">Predictive Insights</h2>
            <p className="text-xs md:text-sm mb-6">
              Leverage the power of AI to gain predictive insights into market trends and consumer behavior.
            </p>
            <button className="bg-white text-black px-4 md:px-6 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm md:text-base">
              Explore AI features
            </button>
          </>
        )
      case "reports":
        return (
          <>
            <h2 className="text-2xl md:text-4xl font-medium mb-2">Customisable Reports </h2>
            <p className="text-xs md:text-sm mb-6">
              Generate tailored reports that cater to your specific business requirements. From market analysis to
              performance metrics, our customizable reporting tools.
            </p>
            <button className="bg-white text-black px-4 md:px-6 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm md:text-base">
              Create report
            </button>
          </>
        )
    }
  }





  return (
    
   <div className="w-full relative min-h-screen sm:min-h-10 lg:min-h-screen md:min-h-12 max-w-7xl mx-auto px-6 pt-10 md:pt-20 sm:pt:24 lg:pt-12">
         {/* Custom Tabs */}
         <div className="border-b mb-8 overflow-x-auto">
        <div className="flex space-x-4 md:space-x-8 min-w-max">
          {["market", "predictive", "reports"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 pt-2 px-2 md:px-0 text-sm md:text-base relative whitespace-nowrap ${
                activeTab === tab ? "border-b-2 border-black" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab === "market" && "Market Trends & Analysis"}
              {tab === "predictive" && "Predictive Insights with AI Readiness"}
              {tab === "reports" && "Customisable Reports for Your Needs"}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="grid md:grid-cols-2 ">
        {/* Left Panel */}
        <div
          ref={leftPanelRef}
          className="bg-[#ffffff] text-white rounded-3xl min-h-[23rem] md:min-h-[10rem] sm:min-h-[10rem] lg:min-h-[37rem] p-6 md:p-8 relative overflow-hidden bg-no-repeat"
          style={{
            backgroundImage: 'url("./leftcard.png")',
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          {showLeftAnimation && <FastPixelAnimation onComplete={handleLeftAnimationComplete} />}
          <div className="absolute inset-0 bg-white bg-opacity-0"></div>
          <div className="relative mt-16 lg:mt-4 md:mt-24 sm:mt-6 mx-4 sm:mx-12 md:mx-4 lg:mx-8 z-10">
            {renderTabContent()}
          </div>
        </div>

        {/* Right Panel */}
        <div
          ref={rightPanelRef}
          className="bg-white flex flex-col space-y-4 justify-center min-h-[23rem] md:min-h-[10rem] sm:min-h-[10rem] lg:min-h-[37rem] bg-no-repeat content-center rounded-3xl p-4 md:p-6 relative overflow-hidden"
          style={{
            backgroundImage: 'url("./rightcard.png")',
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          {showRightAnimation && <FastPixelAnimation onComplete={handleRightAnimationComplete} />}
          <div className="absolute inset-0 bg-white bg-opacity-0"></div>
          <div className="relative z-10 flex flex-col space-y-4 justify-center">
            {/* Device Traffic Chart */}
            <div className="relative w-full max-w-[150px] sm:max-w-[150px] lg:max-w-[300px] mx-auto">
              <img src="/bar.png" alt="Traffic by Device Chart" className="w-full object-contain" />
            </div>

            {/* Location Traffic Chart */}
            <div>
              <div className="relative w-full max-w-[150px] sm:max-w-[150px] lg:max-w-[300px] mx-auto">
                <img src="/donut.png" alt="Traffic by Location Chart" className="w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default AnalyticsDashboard

