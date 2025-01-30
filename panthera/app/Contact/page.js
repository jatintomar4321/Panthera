'use client'

import ContactForm from '../components/ContactForm'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Contact = () => {
  return (
    <div>
    <Nav/>
        <ContactForm/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default Contact