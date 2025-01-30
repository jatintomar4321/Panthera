import React, { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <section className="w-full text-black max-w-6xl mx-auto px-4  py-20">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-medium">Get Started</p>
          <h2 className="text-4xl md:text-5xl font-bold pb-10  tracking-tight">
            Get in touch with us.
            <br />
            We're here to assist you.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pb-2 border-b-2 border-gray-300 focus:border-gray-900 outline-none transition-colors placeholder:text-gray-500"
              />
            </div>
            <div className="relative">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full pb-2 border-b-2 border-gray-300 focus:border-gray-900 outline-none transition-colors placeholder:text-gray-500"
              />
            </div>
            <div className="relative">
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pb-2 border-b-2 border-gray-300 focus:border-gray-900 outline-none transition-colors placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="relative">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full pb-2 border-b-2 border-gray-300 focus:border-gray-900 outline-none transition-colors placeholder:text-gray-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-slate-600 hover:bg-slate-700 text-white transition-colors rounded"
          >
            Leave us a Message
          </button>
        </form>
      </div>
    </section>
  )
}

