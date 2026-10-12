"use client"

import Image from "next/image"

const marqueeBrands = [
  { name: "Panduit", file: "c1.png", tag: "Cabling & Fiber" },
  { name: "CommScope", file: "c2.png", tag: "Network Cabling" },
  { name: "Belden", file: "c3.png", tag: "Industrial Cables" },
  { name: "Legrand", file: "c4.png", tag: "Wiremesh & Enclosures" },
  { name: "LS Cable", file: "c5.png", tag: "Telecom Cables" },
  { name: "Rosenberger", file: "c6.png", tag: "High-Speed Optical" },
  { name: "Cisco", file: "c7.png", tag: "Routing & Switching" },
  { name: "HPE Aruba", file: "c8.png", tag: "Enterprise Wireless" },
  { name: "Ruijie Reyee", file: "c9.png", tag: "Cloud Networking" },
  { name: "Juniper Networks", file: "c10.png", tag: "Mist AI Core" },
  { name: "MikroTik", file: "c11.png", tag: "Edge Routing" },
  { name: "Allied Telesis", file: "z1.png", tag: "Autonomous Switch" },
  { name: "Schneider APC", file: "z2.png", tag: "UPS & InRow Cooling" },
  { name: "Vertiv Liebert", file: "z3.png", tag: "Thermal Management" },
  { name: "Eaton Power", file: "z4.png", tag: "Power Quality" },
  { name: "Rittal", file: "z5.png", tag: "Server Racks" },
  { name: "Hikvision", file: "z7.png", tag: "AI IP Cameras" },
  { name: "Dahua", file: "z8.png", tag: "Video Surveillance" },
]

export function PartnerMarquee() {
  return (
    <div className="w-full overflow-hidden py-6 bg-sb-gray/40 border-y border-sb-border relative select-none">
      {/* Left and right fade gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused] gap-10 sm:gap-14">
        {/* Double array for seamless infinite marquee loop */}
        {[...marqueeBrands, ...marqueeBrands].map((brand, idx) => (
          <div
            key={`${brand.name}-${idx}`}
            className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/80 border border-slate-200/70 shadow-2xs hover:shadow-sm hover:border-sb-primary/40 hover:bg-white transition-all group shrink-0"
          >
            <div className="w-16 h-7 relative flex items-center justify-center shrink-0">
              <Image
                src={`/assets/img/brands/${brand.file}`}
                alt={brand.name}
                width={70}
                height={28}
                className="max-h-6 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
            <div className="border-l border-slate-200/80 pl-2.5">
              <span className="text-xs font-bold text-sb-navy group-hover:text-sb-primary transition-colors block leading-tight">
                {brand.name}
              </span>
              <span className="text-[0.68rem] text-sb-muted font-medium block">
                {brand.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
