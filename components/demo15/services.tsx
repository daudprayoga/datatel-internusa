import { Cable, Cctv, Fingerprint, Network, Server } from "lucide-react"

export const services = [
  {
    title: "Networking System",
    desc: "Resilient, secure, and scalable LAN/WAN infrastructure designed to improve connectivity, performance, and business continuity. Datatel provides end-to-end IT consulting, implementation, monitoring, troubleshooting, and infrastructure management.",
    icon: Network,
    href: "/services/networking-system",
  },
  {
    title: "Access Control",
    desc: "Modern access control solutions that help protect your people, premises, and assets. Regulate entry, restrict sensitive areas, integrate security systems, and reduce security risks.",
    icon: Fingerprint,
    href: "/services/access-control",
  },
  {
    title: "Data Center, Design & Build",
    desc: "Data Center design and build based on the TIA-942 standard, with reliable, available, maintainable, flexible, and cost-effective infrastructure. Our solutions cover power, cooling, fire suppression, monitoring, security, and integrated M&E works.",
    icon: Server,
    href: "/services/data-center-design-build",
  },
  {
    title: "Digital CCTV",
    desc: "Traditional and IP CCTV systems for indoor and outdoor surveillance, with professional design, installation, maintenance, remote viewing, access control integration, and monitoring for commercial, industrial, and public environments.",
    icon: Cctv,
    href: "/services/digital-cctv",
  },
  {
    title: "Structured Cabling Systems Certified",
    desc: "Certified structured cabling infrastructure for voice, data, video, and multimedia systems. Datatel delivers network design, Cat 5e/6/6A and fiber optic installation, testing, documentation, cabinet solutions, and 24/7 maintenance in line with industry standards.",
    icon: Cable,
    href: "/services/structured-cabling-system",
  },
]

export function Demo15Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#fffaf7] py-16 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-[50%] bg-[#fab758]/[0.09] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-tl-full bg-[#b02d3a]/[0.045]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-cue="fadeIn" className="relative z-10 mb-14 text-center sm:mb-16">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.22em] text-[#b02d3a]">What we do</span>
          <h2 className="text-3xl font-bold tracking-tight text-[#343f52] sm:text-4xl lg:text-[40px]">Our Services</h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#b02d3a]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-wrap justify-center gap-x-12 gap-y-12 lg:gap-x-16 lg:gap-y-14">
          {services.map((item, index) => (
            <div
              key={item.title}
              className="group relative w-full rounded-2xl border border-[#eadfd8] bg-white/75 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b02d3a]/35 hover:bg-white hover:shadow-xl hover:shadow-[#b02d3a]/[0.08] md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2.67rem)]"
              data-cue="slideInUp"
              data-delay={`${index * 100}`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fdf2f3] text-[#b02d3a] transition-colors duration-300 group-hover:bg-[#b02d3a] group-hover:text-white">
                <item.icon className="h-7 w-7 stroke-[1.8]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-[#343f52] sm:text-xl">
                  {item.title}
                </h3>
                <p
                  className="text-base text-[#60697b] leading-relaxed whitespace-pre-line overflow-hidden"
                  style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3 }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
