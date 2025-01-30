"use client"
import BlogSection from "../components/blog-section"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import RealEstateSection from "../components/real-estate-section"

export default function Blog() {
  return (
    <main>
    <Nav/>
      <RealEstateSection />
      <BlogSection />
      <Footer/>
    </main>
  )
}

