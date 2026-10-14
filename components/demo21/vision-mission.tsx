import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const coreServices = [
  "Structure Cabling System Certified",
  "Data Center Solution (TIA-942)",
  "Networking System (LAN / WAN)",
  "CCTV Surveillance System",
  "Access Control System",
]

export function Demo21VisionMission() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_52%,#fdf2f3_100%)] py-16 sm:py-20 md:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#164e63]/[0.04] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-[#b02d3a]/[0.05] blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Right Column in Sandbox Template: Image with Rellax soft shape */}
          <div className="relative flex justify-center lg:col-span-6 lg:order-2">
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border-[18px] border-[#fab758]/20" />
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-3xl bg-[#164e63]/[0.08]" />
            <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-[2rem] border-8 border-white bg-slate-900 shadow-2xl shadow-[#164e63]/20">
              <Image
                src="/assets/img/photos/who-are-we-circuit.png"
                alt="Datatel technology and innovation"
                width={1024}
                height={682}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Left Column in Sandbox Template: Company Story & Vision Mission */}
          <div className="space-y-6 lg:col-span-6 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf2f3] text-xs font-bold uppercase tracking-wider text-[#b02d3a]">
              PT. Datatel Inter Nusa
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#343f52] leading-tight">
              Who Are We?
            </h2>

            <p className="text-lg font-medium leading-relaxed text-[#343f52] sm:text-xl">
              PT. Datatel Inter Nusa is a National Private Enterprise which focus the field of Computer Network &amp; System Integrators.
            </p>

            <p className="text-base text-[#60697b] leading-relaxed">
              Since its establishment in 2005, PT. Datatel Inter Nusa has completed various jobs in IT Infrastructure, Datacenter Design &amp; Build, CCTV, and Access Control Systems, ranging from a variety of business sectors: government, state enterprises, Oil &amp; Gas, industrial manufacturing, hospital, banking, and telecommunications.
            </p>

            <p className="text-base text-[#60697b] leading-relaxed">
              To ensure network performance and reliability, we have a team of professionals with knowledge &amp; skills including comprehensive LAN, WAN, Network Operating Systems, and hardware professionals who work to provide high quality services to our clients.
            </p>

            {/* Row of Mission & Vision with Lineal SVG Icons */}
            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              {/* Vision Card */}
              <div className="flex h-full min-h-[220px] flex-col items-start rounded-2xl border border-white bg-white/90 p-5 shadow-lg shadow-slate-200/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fdf2f3]">
                  <Image
                    src="/assets/img/icons/lineal/target.svg"
                    alt="The Vision"
                    width={44}
                    height={44}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-base font-bold text-[#343f52] mb-1">
                    The Vision
                  </h4>
                  <p className="text-xs sm:text-sm text-[#60697b] leading-relaxed">
                    To be a growing company by own ability, so can participate to improve economic and social around and achieve national and international recognition.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="flex h-full min-h-[220px] flex-col items-start rounded-2xl border border-white bg-white/90 p-5 shadow-lg shadow-slate-200/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fdf2f3]">
                  <Image
                    src="/assets/img/icons/lineal/award-2.svg"
                    alt="The Missions"
                    width={44}
                    height={44}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-base font-bold text-[#343f52] mb-1">
                    The Mission
                  </h4>
                  <p className="text-xs sm:text-sm text-[#60697b] leading-relaxed">
                    To be a high qualified System Integrator and efficient by customer reward so able to response and meet customers requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Focus Pillars */}


          </div>

        </div>
      </div>
    </section>
  )
}
