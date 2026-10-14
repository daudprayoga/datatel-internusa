import Image from "next/image"

const steps = [
  { number: "01", title: "Data Center Infrastructure", desc: "Design, Build, Implementation, and Maintenance of Data Center Facilities, including Structured Cabling, environmental systems, and IT infrastructure." },
  { number: "02", title: "Enterprise Network Solutions", desc: "Planning and Deployment of LAN, WAN, Fiber Optic Networks, Wireless Systems, and Network Security Solutions." },
  { number: "03", title: "CCTV & Surveillance Systems", desc: "Integrated security monitoring solutions for buildings, factories, campuses, and industrial environments using advanced IP surveillance technologies." },
  { number: "04", title: "Access Control & Security Systems", desc: "Implementation of secure access systems, attendance control, door management, and building security integration." },
  { number: "05", title: "IT Infrastructure Integration", desc: "Server systems, storage, virtualization, cloud readiness, and integrated IT infrastructure services supporting enterprise operations." },
  { number: "06", title: "Maintenance & Managed Services", desc: "Preventive and corrective maintenance for IT systems, ensuring reliability, uptime, and smooth operational performance." },
  { number: "07", title: "Project Management & Engineering Support", desc: "Professional project execution, documentation, testing, commissioning, and continuous technical support." },
]

export function Demo15Steps() {
  return (
    <>
      <section id="how-it-works" className="relative overflow-hidden border-t border-b border-[#164e63]/10 bg-[radial-gradient(circle_at_15%_20%,rgba(22,78,99,0.12),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(176,45,58,0.09),transparent_30%),linear-gradient(135deg,#f8fafc_0%,#eef4f7_100%)] py-16 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(22,78,99,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(22,78,99,0.08)_1px,transparent_1px)] [background-size:3rem_3rem]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-16 h-80 w-80 rounded-full border-[3rem] border-[#164e63]/[0.04]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-16 h-80 w-80 rounded-full border-[3rem] border-[#6b68c9]/[0.035]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative z-10 text-center max-w-3xl mx-auto mb-14 sm:mb-16" data-cue="fadeIn">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#164e63] tracking-tight leading-[1.25]">
              Our Capabilities
            </h2>
          </div>

          {/* 2-Column Content */}
          <div className="relative z-10 grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              {steps.slice(0, 3).map((step) => (
                <div
                  key={step.number}
                  className="group min-h-[168px] bg-white/95 rounded-2xl p-6 sm:p-7 shadow-lg shadow-[#164e63]/10 border border-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b02d3a]/30 hover:shadow-xl hover:shadow-[#164e63]/15"
                  data-cue="slideInUp"
                  data-delay={`${Number(step.number) * 100}`}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#fdf2f3] text-[#b02d3a] font-bold text-lg flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#b02d3a] group-hover:text-white">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#343f52] mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#60697b] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {steps.slice(3, 6).map((step) => (
                <div key={step.number} className="group min-h-[168px] bg-white/95 rounded-2xl p-6 sm:p-7 shadow-lg shadow-[#164e63]/10 border border-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b02d3a]/30 hover:shadow-xl hover:shadow-[#164e63]/15" data-cue="slideInUp" data-delay={`${Number(step.number) * 100}`}>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#fdf2f3] text-[#b02d3a] font-bold text-lg flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#b02d3a] group-hover:text-white">{step.number}</div>
                    <div><h3 className="text-lg font-bold text-[#343f52] mb-1.5">{step.title}</h3><p className="text-sm sm:text-base text-[#60697b] leading-relaxed">{step.desc}</p></div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="mt-6 lg:mt-8 max-w-2xl mx-auto">
            {steps.slice(6).map((step) => (
              <div key={step.number} className="group min-h-[168px] bg-white/95 rounded-2xl p-6 sm:p-7 shadow-lg shadow-[#164e63]/10 border border-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b02d3a]/30 hover:shadow-xl hover:shadow-[#164e63]/15" data-cue="slideInUp" data-delay={`${Number(step.number) * 100}`}>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#fdf2f3] text-[#b02d3a] font-bold text-lg flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#b02d3a] group-hover:text-white">{step.number}</div>
                  <div><h3 className="text-lg font-bold text-[#343f52] mb-1.5">{step.title}</h3><p className="text-sm sm:text-base text-[#60697b] leading-relaxed">{step.desc}</p></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="relative bg-white py-16 sm:py-24 text-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12" data-cue="fadeIn">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#164e63] tracking-tight leading-[1.25]">Our Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5 max-w-5xl mx-auto">
            {[
              "Certified Data Center Professional (CDCP)",
              "Certified Data Center Specialist (CDCS)",
              "Certified TIA-942 Design Consultant (CTDC)",
              "Cooling Management Specialist",
              "Accredited Tier Designer Data Center (ATD)",
              "Health, Safety & Environment Specialist (K3)",
              "Electrical System (SKA Electrical)",
              "Cabling System (UTP/FO Certified)",
              "Architectural Specialist (SKA Architectural)",
              "CCTV Specialist",
              "Certified Data Center Facilities Operation Specialist (CDFOS)",
          ].map((item, index) => (
            <div key={item} data-cue="slideInUp" data-delay={`${index * 75}`} className={`flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/60 p-4 text-[#343f52] font-semibold shadow-sm ${index === 10 ? "md:col-span-2 md:max-w-[calc(50%-0.75rem)] md:mx-auto w-full" : ""}`}>
              <Image src="/assets/img/icons/lineal/award-2.svg" alt="" width={42} height={42} className="icon-svg icon-svg-sm text-primary shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
