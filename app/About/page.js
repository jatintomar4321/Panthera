"use client"
import React from 'react'
import AboutHero from "../components/AboutHero"
import SliderAbout from '../components/Slider1'
import About3 from '../components/About3'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import FounderSection from '../components/FounderSection'
import AboutCrd1 from "../components/AboutCrd1"
import AboutCrd2 from "../components/AboutCrd2"


const About = () => {
  return (
    <div>
    <Nav/>
    <AboutHero/>
    <SliderAbout
      c1h="Shaping the Future of Real Estate Intelligence"
      c1p="Panthera empowers developers, investors, and enterprises with advanced analytics and predictive insights to
            redefine decision-making in the real estate industry."
      i1="./slider1.png"
      c2h="Powered by Advanced Analytics and Innovation"
      c2p="At Panthera, we believe that the fusion of innovation and actionable insights will transform how real estate
            decisions are made."
      i2="./slider2.png"
    />
    <About3/>
    <FounderSection/>
    <AboutCrd1/>
    <AboutCrd2/>
    <Footer/>
    </div>
  )
}

export default About