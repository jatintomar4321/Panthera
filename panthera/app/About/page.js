"use client"
import React from 'react'
import AboutHero from "../components/AboutHero"
import SliderAbout from '../components/Slider1'
import About3 from '../components/About3'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
    <Nav/>
    <AboutHero/>
    <SliderAbout/>
    <About3/>
    <SliderAbout/>
    <Footer/>
    </div>
  )
}

export default About