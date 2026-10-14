import Image from "next/image"
import Link from "next/link"
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Phone,
  Server,
  Layers,
  Cpu,
  Clock,
  Award,
  Zap,
} from "lucide-react"

export interface DeliverableItem {
  title: string
  desc: string
}

export interface ServiceDetailSectionProps {
  badge?: string
  title: string
  lead: string
  description: string
  image?: string
  standards?: string[]
  deliverables: DeliverableItem[]
  features?: string[]
}

export function ServiceDetailSection({
  badge = "Enterprise Solutions",
  title,
  lead,
  description,
  image = "/assets/img/photos/about7.jpg",
  standards = ["TIA-942 Certified", "24/7 Technical SLA", "Multi-Vendor Integration"],
  deliverables,
  features,
}: ServiceDetailSectionProps) {
  const steps = [
    {
      num: "01",
      title: "Audit & Site Assessment",
      desc: "Analisis kondisi eksisting, pemetaan bottleneck, dan evaluasi kebutuhan kapasitas fasilitas.",
    },
    {
      num: "02",
      title: "Engineering & Blueprint",
      desc: "Penyusunan topologi teknis, Bill of Quantity (BoQ) presisi, dan pemilihan perangkat berstandar industri.",
    },
    {
      num: "03",
      title: "Certified Implementation",
      desc: "Instalasi perangkat keras & lunak oleh tim engineer bersertifikasi dengan standar keselamatan tinggi.",
    },
    {
      num: "04",
      title: "Testing, Commissioning & SLA",
      desc: "Pengujian menyeluruh (Fluke/OTDR/Load testing), serah terima dokumentasi, dan dukungan SLA 24/7.",
    },
  ]

  return (
    <div className="bg-white">
      {/* 1. Main Overview Grid */}
      <section className="py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#b02d3a] px-3 py-1 rounded-full bg-[#fdf2f3]">
                {badge}
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#343f52] leading-tight">
                {title}
              </h2>

              <p className="text-lg sm:text-xl text-[#343f52] font-medium leading-relaxed">
                {lead}
              </p>

              <p className="text-[#60697b] text-base leading-relaxed">
                {description}
              </p>

              {/* Technical Standards Badges */}
              {standards && standards.length > 0 && (
                <div className="pt-2 flex flex-wrap gap-2.5">
                  {standards.map((std, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-[#343f52]"
                    >
                      <ShieldCheck className="w-4 h-4 text-[#b02d3a]" />
                      {std}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/hubungi-kami"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#b02d3a] hover:bg-[#8f202b] text-white text-sm font-semibold shadow-md shadow-[#b02d3a]/20 transition-all gap-2"
                >
                  Konsultasikan Kebutuhan Anda
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+622187734050"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#343f52] text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#b02d3a]" />
                  +62 21 8773 4050
                </a>
              </div>
            </div>

            {/* Right Graphic / Photo Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white">
                  <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="p-6 bg-white border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#fdf2f3] flex items-center justify-center text-[#b02d3a]">
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#343f52]">
                            PT. Datatel Inter Nusa
                          </div>
                          <div className="text-xs text-[#aab0bc]">
                            System Integrators Sejak 2005
                          </div>
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                        Enterprise Grade
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Deliverables & Scope of Work Grid */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b02d3a] mb-2 block">
              Ruang Lingkup Solusi
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#343f52] leading-tight">
              Kapabilitas Teknis &amp; Spesifikasi Pekerjaan
            </h3>
            <p className="text-[#60697b] text-sm sm:text-base mt-2">
              Layanan komprehensif mulai dari perencanaan arsitektur hingga integrasi sistem operasional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#b02d3a]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#fdf2f3] flex items-center justify-center text-[#b02d3a] mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#343f52] mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#60697b] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 4-Step Engineering Methodology */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b02d3a] mb-2 block">
              Metodologi Kerja
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#343f52] leading-tight">
              Tahapan Implementasi Berstandar Industri
            </h3>
            <p className="text-[#60697b] text-sm sm:text-base mt-2">
              Alur kerja terstruktur untuk menjamin efisiensi jadwal, ketepatan anggaran, dan kualitas teknis maksimal.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-[#b02d3a] hover:bg-white transition-all shadow-xs"
              >
                <div className="text-2xl font-black text-[#b02d3a] mb-3">
                  {st.num}
                </div>
                <h4 className="text-base font-bold text-[#343f52] mb-2">
                  {st.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#60697b] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom Fast Consultation Banner */}
      <section className="py-14 sm:py-16 bg-[#fdf2f3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#343f52] mb-3">
            Siap Memulai Proyek Bersama Datatel?
          </h3>
          <p className="text-[#60697b] text-sm sm:text-base max-w-xl mx-auto mb-7 leading-relaxed">
            Tim senior engineer kami siap melakukan site survey, audit teknis, dan perancangan BoQ presisi untuk infrastruktur perusahaan Anda di seluruh Indonesia.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/hubungi-kami"
              className="px-8 py-3.5 rounded-full bg-[#b02d3a] hover:bg-[#8f202b] text-white text-sm font-semibold shadow-md transition-all"
            >
              Hubungi Kami Sekarang
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-[#343f52] text-sm font-semibold transition-all"
            >
              Lihat Solusi Lainnya &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
