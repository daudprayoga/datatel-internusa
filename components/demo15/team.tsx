import Image from "next/image"
import { Twitter, Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Coriss Ambady",
    role: "Senior Network Engineer",
    bio: "Spesialis arsitektur enterprise routing, switching LAN/WAN, dan network security.",
    avatar: "/assets/img/avatars/te1.jpg",
  },
  {
    name: "Cory Zamora",
    role: "Data Center Specialist",
    bio: "Pakar rancang bangun pusat data standar TIA-942, precision cooling & EMS.",
    avatar: "/assets/img/avatars/te2.jpg",
  },
  {
    name: "Nikolas Brooten",
    role: "Structured Cabling PM",
    bio: "Berpengalaman memimpin proyek kabel serat optik dan sertifikasi ratusan node.",
    avatar: "/assets/img/avatars/te3.jpg",
  },
  {
    name: "Jackie Sanders",
    role: "Security & Surveillance Lead",
    bio: "Ahli integrasi sistem CCTV digital IP resolusi tinggi dan biometric access control.",
    avatar: "/assets/img/avatars/te4.jpg",
  },
]

export function Demo15Team() {
  return (
    <section id="team" className="relative bg-[#fefefe] py-16 sm:py-24 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="w-12 h-12 mx-auto mb-4">
            <Image
              src="/assets/img/icons/lineal/team.svg"
              alt="Team Icon"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#343f52] tracking-tight leading-[1.25]">
            Save your time and money by choosing our professional team.
          </h2>
        </div>

        {/* 4 Team Cards Grid */}
        <div className="relative">
          {/* Decorative shapes */}
          <div
            aria-hidden
            className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-[#fdf3f4] pointer-events-none z-0"
          />
          <div
            aria-hidden
            className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-[#fff8ef] pointer-events-none z-0"
          />

          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-lg shadow-slate-100/80 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-bold text-[#343f52] mb-1">
                  {member.name}
                </h3>
                
                <p className="text-xs uppercase font-bold tracking-wider text-[#aab0bc] mb-3">
                  {member.role}
                </p>

                <p className="text-sm text-[#60697b] leading-relaxed mb-6 flex-1">
                  {member.bio}
                </p>

                <div className="flex items-center gap-3 text-[#aab0bc] mt-auto">
                  <span className="p-1.5 rounded-full hover:text-[#b02d3a] hover:bg-[#fdf2f3] transition-colors cursor-pointer">
                    <Twitter className="w-4 h-4" />
                  </span>
                  <span className="p-1.5 rounded-full hover:text-[#b02d3a] hover:bg-[#fdf2f3] transition-colors cursor-pointer">
                    <Linkedin className="w-4 h-4" />
                  </span>
                  <span className="p-1.5 rounded-full hover:text-[#b02d3a] hover:bg-[#fdf2f3] transition-colors cursor-pointer">
                    <Mail className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
