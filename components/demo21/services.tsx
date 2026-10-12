import { Section, SectionHeading, ServiceCard, DotShape, CircleShape } from "@/components/sandbox/ui"

export const services = [
  {
    title: "Networking System",
    desc: "Arsitektur jaringan enterprise LAN/WAN, routing, switching, dan network security terpadu dengan performa tinggi dan keandalan 24/7.",
    icon: "/assets/img/icons/lineal/browser.svg",
    href: "/services/networking-system",
  },
  {
    title: "Access Control",
    desc: "Sistem kendali akses masuk modern berbasis biometrik wajah, sidik jari, dan kartu pintar RFID untuk membatasi area sensitif.",
    icon: "/assets/img/icons/lineal/search-2.svg",
    href: "/services/access-control",
  },
  {
    title: "Data Center, Design & Build",
    desc: "Rancang bangun pusat data berstandar TIA-942: raised floor, precision AC, UPS, fire suppression, dan EMS.",
    icon: "/assets/img/icons/lineal/chat-2.svg",
    href: "/services/data-center-design-build",
  },
  {
    title: "Digital CCTV",
    desc: "Sistem surveillance CCTV tradisional dan IP dengan kualitas gambar superior untuk area industri, komersial, dan publik.",
    icon: "/assets/img/icons/lineal/megaphone.svg",
    href: "/services/digital-cctv",
  },
  {
    title: "Structured Cabling System",
    desc: "Pengkabelan terstruktur Cat 5e/6/6A dan Fiber Optic bersertifikasi standar ANSI/TIA/EIA 568-B & IEC 60794.",
    icon: "/assets/img/icons/lineal/settings-3.svg",
    href: "/services/structured-cabling-system",
  },
]

/** Sandbox "What We Do?" section — used on Home and /services. */
export function Demo21Services({ tone = "light" }: { tone?: "white" | "light" | "soft" }) {
  return (
    <Section id="services" tone={tone}>
      <SectionHeading
        eyebrow="What We Do?"
        title="The service we offer is specifically designed to meet your needs."
      />

      <div className="relative">
        <DotShape className="-top-6 -left-8" />
        <CircleShape className="w-16 h-16 -bottom-4 -right-6" />

        {/* flex-wrap + justify-center keeps the last row (2 cards) centered */}
        <div className="relative flex flex-wrap justify-center gap-6 md:gap-8">
          {services.map((item) => (
            <div key={item.href} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
              <ServiceCard icon={item.icon} title={item.title} description={item.desc} href={item.href} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
