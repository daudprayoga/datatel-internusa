import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const coreServices = [
  "Structure Cabling System Certified",
  "Data Center Solution (TIA-942)",
  "Networking System (LAN / WAN)",
  "CCTV Surveillance System",
  "Access Control System",
]

export function Demo21VisionMission() {
  return (
    <section className="bg-slate-50/60 py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Right Column in Sandbox Template: Image with Rellax soft shape */}
          <div className="lg:col-span-5 lg:order-2 relative flex justify-center">
            <div
              className="absolute w-20 h-20 rounded-full bg-[#edf2fc] pointer-events-none -z-10"
              style={{ top: "-1.5rem", right: "-1rem", zIndex: 0 }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-w-md w-full">
              <Image
                src="/assets/img/photos/about7.jpg"
                alt="PT. Datatel Inter Nusa - Vision & Mission"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Left Column in Sandbox Template: Company Story & Vision Mission */}
          <div className="lg:col-span-7 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#edf2fc] text-xs font-bold uppercase tracking-wider text-[#3f78e0]">
              PT. Datatel Inter Nusa
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#343f52] leading-tight">
              Who Are We?
            </h2>

            <p className="text-lg sm:text-xl text-[#343f52] font-medium leading-relaxed">
              PT. Datatel Inter Nusa is a National Private Enterprise which focus the field of Computer Network &amp; System Integrators.
            </p>

            <p className="text-base text-[#60697b] leading-relaxed">
              Since its establishment in 2005, PT. Datatel Inter Nusa has completed various jobs in IT Infrastructure, Datacenter Design &amp; Build, CCTV, and Access Control Systems, ranging from a variety of business sectors: government, state enterprises, Oil &amp; Gas, industrial manufacturing, hospital, banking, and telecommunications.
            </p>

            <p className="text-base text-[#60697b] leading-relaxed">
              To ensure network performance and reliability, we have a team of professionals with knowledge &amp; skills including comprehensive LAN, WAN, Network Operating Systems, and hardware professionals who work to provide high quality services to our clients.
            </p>

            {/* Row of Mission & Vision with Lineal SVG Icons */}
            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              {/* Vision Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                  <Image
                    src="/assets/img/icons/lineal/target.svg"
                    alt="The Vision"
                    width={44}
                    height={44}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#343f52] mb-1">
                    The Vision
                  </h4>
                  <p className="text-xs sm:text-sm text-[#60697b] leading-relaxed">
                    To be a growing company by own ability, so can participate to improve economic and social around and achieve national and international recognition.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                  <Image
                    src="/assets/img/icons/lineal/award-2.svg"
                    alt="The Missions"
                    width={44}
                    height={44}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#343f52] mb-1">
                    The Missions
                  </h4>
                  <p className="text-xs sm:text-sm text-[#60697b] leading-relaxed">
                    To be a high qualified System Integrator and efficient by customer reward so able to response and meet customers requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Focus Pillars */}


            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/hubungi-kami"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#3f78e0] hover:bg-[#3264c1] text-white text-sm font-semibold shadow-md shadow-[#3f78e0]/20 transition-all gap-2"
              >
                Konsultasikan Bersama Kami
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
