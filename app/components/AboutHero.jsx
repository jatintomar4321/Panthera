const AboutHero = () => {
  return (
    <div className=" px-3 sm:px-4 lg:px-4 sm:pt-10 pt-24 lg:pt-20">
      <div className="relative overflow-hidden rounded-[2rem] min-h-[500px] sm:min-h-[500px] md:min-h-[500px] lg:min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="./about1.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="relative z-10 px-1 md:px-12 lg:px-16">
            <div className="max-w-[1200px] pt-44 sm:pt-40 md:pt-40 lg:pt-32 px-5 sm:px-8 md:px-8 lg:px-12">
              <h1
                className="mb-8 font-sans max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.02em] text-white 
                           sm:text-[3.5rem] md:text-[4rem] lg:text-[3.5rem]"
                style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}
              >
                Leading the Future of Real Estate Intelligence
              </h1>
              <p
                className="text-[0.5rem] max-w-2xl hidden lg:block leading-[1] text-gray-200 md:text-[0.9rem]"
                style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif" }}
              >
                Panthera's state-of-the-art analytics platform leverages AI-driven predictive tools and real-time data
                insights to transform the way real estate professionals approach market decisions. Designed with
                precision and scalability in mind, our solutions eliminate the need for costly manual analysis,
                empowering clients to maximize growth opportunities with ease. With a dedicated team of data scientists
                and industry experts, we're committed to driving innovation and delivering unmatched value in real-world
                real estate applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
