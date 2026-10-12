import Link from "next/link"

const steps = [
  {
    number: "01",
    title: "Collect Ideas",
    desc: "Nulla vitae elit libero pharetra augue dapibus.",
    offset: "lg:mr-8",
  },
  {
    number: "02",
    title: "Data Analysis",
    desc: "Vivamus sagittis lacus vel augue laoreet.",
    offset: "lg:ml-12",
  },
  {
    number: "03",
    title: "Finalize Product",
    desc: "Cras mattis consectetur purus sit amet.",
    offset: "lg:mx-6",
  },
]

export function Demo21Strategy() {
  return (
    <section id="strategy" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Staggered Steps Cards */}
          <div className="lg:col-span-6 space-y-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 sm:p-7 shadow-xl shadow-slate-200/60 border border-slate-100/80 transition-transform duration-300 hover:-translate-y-1 ${step.offset}`}
              >
                <div className="flex items-start sm:items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#edf2fc] text-[#3f78e0] font-black text-lg flex items-center justify-center shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#343f52] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-[#60697b] text-sm sm:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Strategy Content */}
          <div className="lg:col-span-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#3f78e0] mb-3">
              Our Strategy
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#343f52] leading-tight mb-6">
              Here are 3 working steps to organize our projects.
            </h3>
            
            <p className="text-[#60697b] leading-relaxed mb-4">
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis.
            </p>
            <p className="text-[#60697b] leading-relaxed mb-8">
              Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur.
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#3f78e0] hover:bg-[#3264c1] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Learn More
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
