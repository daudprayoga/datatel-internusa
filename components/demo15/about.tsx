import Image from "next/image"
import { Check } from "lucide-react"

export function Demo15About() {
  return (
    <section id="about" className="relative bg-[#fefefe] py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Overlap Image Grid (Right on Desktop) */}
          <div className="lg:col-span-6 lg:order-2 relative">
            {/* Dot Pattern Shape */}
            <div
              aria-hidden
              className="absolute w-24 h-28 -top-6 left-12 opacity-70 pointer-events-none z-0"
              style={{
                backgroundImage: "radial-gradient(#fab758 2px, transparent 2.5px)",
                backgroundSize: "0.85rem 0.85rem",
              }}
            />

            {/* Two overlapping images */}
            <div className="relative z-10 w-full max-w-[500px] mx-auto">
              {/* Back Image (Upper Right) */}
              <div className="w-[75%] ml-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/assets/img/photos/who-are-we-datacenter.png"
                  alt="Datatel data center infrastructure"
                  width={1672}
                  height={941}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Front Image (Lower Left Overlapping) */}
              <div className="w-[65%] -mt-32 mr-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative z-20 transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/assets/img/photos/about3.jpg"
                  alt="About Datatel Team 2"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content (Left on Desktop) */}
          <div className="lg:col-span-6 lg:order-1">
            <div className="w-12 h-12 mb-5">
              <Image
                src="/assets/img/icons/lineal/megaphone.svg"
                alt="Megaphone Icon"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#343f52] tracking-tight leading-[1.2] mb-5">
              Who Are We?
            </h2>

            <p className="text-lg sm:text-xl text-[#343f52] font-medium leading-relaxed mb-4">
              We are a technology partner and system integrator that believes in the power of reliable infrastructure, high performance, and long-term partnership.
            </p>

            <p className="text-base text-[#60697b] leading-relaxed mb-8">
              PT. Datatel Inter Nusa adalah National Private Enterprise terkemuka yang berfokus pada Computer Network &amp; System Integrators sejak 2005. Kami berpengalaman melayani industri perbankan, manufaktur, energi, telekomunikasi, dan instansi pemerintah dengan standar kualitas terbaik.
            </p>

            {/* Checklist Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#fdf2f3] text-[#b02d3a] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-sm font-medium text-[#60697b]">
                    ANSI/TIA/EIA 568-B &amp; IEC certified structured cabling
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#fdf2f3] text-[#b02d3a] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-sm font-medium text-[#60697b]">
                    TIA-942 compliant data center design &amp; build
                  </span>
                </li>
              </ul>

              <ul className="space-y-3.5">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#fdf2f3] text-[#b02d3a] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-sm font-medium text-[#60697b]">
                    Enterprise LAN/WAN switching, routing &amp; security
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#fdf2f3] text-[#b02d3a] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-sm font-medium text-[#60697b]">
                    Digital IP CCTV surveillance &amp; biometrics control
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
