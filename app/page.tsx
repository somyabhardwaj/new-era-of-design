export default function HomePage() {
  return (
    <main className="flex flex-col">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-100">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl">
          We Build Modern Digital Solutions for Growing Companies
        </h1>
        <h1
  className="text-6xl font-bold"
  data-cursor="video"
  data-src="/demo.mp4"
>
  What We Create
</h1>

<h1
  className="text-6xl font-bold mt-20"
  data-cursor="image"
  data-src="/images.jpeg"
>
  Our Work
</h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          From web development to scalable cloud solutions, we help businesses
          transform their digital presence and accelerate growth.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-lg hover:opacity-80 transition">
          Get Started
        </button>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">About Our Company</h2>
        <div className="grid md:grid-cols-2 gap-12 text-gray-700 leading-relaxed">
          <p>
            We are a technology-driven company dedicated to delivering
            high-performance digital solutions. Our team combines strategic
            thinking, design excellence, and engineering precision to help
            companies scale efficiently.
          </p>
          <p>
            Over the past decade, we have partnered with startups, enterprises,
            and global brands to create impactful digital experiences that drive
            measurable results and long-term success.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-32 bg-gray-50 px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="p-8 border rounded-xl bg-white shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">
                Service #{i + 1}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide comprehensive solutions tailored to your business needs,
                ensuring scalability, performance, and security across all platforms.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Process</h2>

        <div className="space-y-20">
          {["Discovery", "Planning", "Design", "Development", "Launch"].map(
            (step, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-semibold mb-4">
                    {step}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    During the {step.toLowerCase()} phase, we collaborate closely
                    with stakeholders to ensure alignment with strategic goals
                    and deliver exceptional outcomes.
                  </p>
                </div>
                <div className="h-60 bg-gray-200 rounded-xl"></div>
              </div>
            )
          )}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-32 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-16">Our Impact</h2>

        <div className="grid md:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {[
            { label: "Projects Delivered", value: "250+" },
            { label: "Global Clients", value: "120+" },
            { label: "Years Experience", value: "10+" },
            { label: "Team Members", value: "40+" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold mb-16 text-center">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-8 bg-white rounded-xl shadow-sm">
              <p className="text-gray-600 mb-6">
                “Working with this team transformed our digital strategy.
                Their expertise and professionalism exceeded expectations.”
              </p>
              <h4 className="font-semibold">Client Name {i + 1}</h4>
              <p className="text-sm text-gray-500">CEO, Company {i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold mb-3">
                Question #{i + 1}
              </h3>
              <p className="text-gray-600">
                We tailor every solution to meet specific business objectives,
                ensuring long-term sustainability and measurable results.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center bg-gray-900 text-white px-6">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl">
          Let’s build something extraordinary together. Contact our team today
          to discuss your next digital project.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-lg hover:opacity-80 transition">
          Contact Us
        </button>
      </section>

    </main>
  )
}

// https://weareenigma.com/services