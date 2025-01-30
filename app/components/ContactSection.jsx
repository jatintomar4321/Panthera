export default function ContactSection() {
  return (
    <section className="w-full text-black bg-[#f9f6ef]">
      {/* Contact Info Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="relative">
          {/* Top row with Contact Info text */}
          <p className="text-sm mb-6">Contact Info</p>

          {/* Main content grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Left column with main heading */}
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-[2.75rem] leading-[1.2] font-bold">
                We are always happy
                <br />
                to assist you
              </h2>
            </div>

            {/* Right columns with contact info */}
            <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-6">
              {/* Email Column */}
              <div>
                <div className="mb-8">
                  <span className="text-sm font-medium block mb-4">Email Address</span>
                  <div className="h-[1px] w-4 bg-black mb-4" />
                  <a href="mailto:help@info.com" className="text-base hover:underline">
                    help@info.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Assistance hours:</p>
                  <p className="text-sm text-gray-600">
                    Monday - Friday 6 am to
                    <br />8 pm EST
                  </p>
                </div>
              </div>

              {/* Phone Column */}
              <div>
                <div className="mb-8">
                  <span className="text-sm font-medium block mb-4">Number</span>
                  <div className="h-[1px] w-4 bg-black mb-4" />
                  <a href="tel:(808) 998-34256" className="text-base hover:underline">
                    (808) 998-34256
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Assistance hours:</p>
                  <p className="text-sm text-gray-600">
                    Monday - Friday 6 am to
                    <br />8 pm EST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#2B3377] text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-[1fr,1.5fr] gap-12">
            <div className="space-y-4">
              <h2 className="text-[2.75rem] leading-[1.2] font-bold">
                Subscribe to our
                <br />
                Newsletter
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Subscribe for Updates: Stay informed about the latest investor updates, financial results, and
                announcements by subscribing to our newsletter.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 md:justify-end">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 w-full sm:max-w-md px-6 py-4 rounded-lg bg-[#3B438B] border border-[#4B5399] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-8 py-4 bg-white text-[#2B3377] font-medium rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

