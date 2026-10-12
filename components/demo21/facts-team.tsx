import Image from "next/image"
import { CheckCircle2, Users, Trophy, Twitter, Facebook, Dribbble } from "lucide-react"

const facts = [
  {
    icon: CheckCircle2,
    number: "1000+",
    label: "Completed Projects",
  },
  {
    icon: Users,
    number: "50K+",
    label: "Happy Customers",
  },
  {
    icon: Trophy,
    number: "20+",
    label: "Awards Won",
  },
]

const team = [
  {
    name: "Coriss Ambady",
    role: "Financial Analyst",
    bio: "Fermentum massa justo sit amet risus morbi leo.",
    avatar: "/assets/img/avatars/te1.jpg",
  },
  {
    name: "Cory Zamora",
    role: "Marketing Specialist",
    bio: "Fermentum massa justo sit amet risus morbi leo.",
    avatar: "/assets/img/avatars/te2.jpg",
  },
  {
    name: "Nikolas Brooten",
    role: "Sales Manager",
    bio: "Fermentum massa justo sit amet risus morbi leo.",
    avatar: "/assets/img/avatars/te3.jpg",
  },
  {
    name: "Jackie Sanders",
    role: "Investment Planner",
    bio: "Fermentum massa justo sit amet risus morbi leo.",
    avatar: "/assets/img/avatars/te4.jpg",
  },
]

export function Demo21FactsTeam() {
  return (
    <section id="team" className="bg-white pt-20 pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Counters Row */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
          
          <div className="lg:col-span-4 text-center lg:text-left">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#3f78e0] mb-3">
              Company Facts
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#343f52] leading-tight mb-4">
              We are proud of our design team
            </h3>
            <p className="text-[#60697b] leading-relaxed">
              Just sit back and relax while we take care of your business needs for you.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {facts.map((fact, idx) => {
                const Icon = fact.icon
                return (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-[#edf2fc] text-[#3f78e0] flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-3xl sm:text-4xl font-extrabold text-[#343f52] mb-1">
                      {fact.number}
                    </h4>
                    <p className="text-[#60697b] font-medium text-sm sm:text-base">
                      {fact.label}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

        {/* Team Grid (4 Columns) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-lg shadow-slate-200/50 border border-slate-100 text-center flex flex-col items-center transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-5 border-2 border-slate-100 shadow-xs">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="text-lg font-bold text-[#343f52] mb-1">
                {member.name}
              </h4>
              
              <div className="text-xs uppercase font-bold tracking-wider text-[#aab0bc] mb-3">
                {member.role}
              </div>

              <p className="text-[#60697b] text-sm leading-relaxed mb-5">
                {member.bio}
              </p>

              <div className="flex items-center gap-3 text-[#60697b] mt-auto">
                <a href="#" className="hover:text-[#3f78e0] transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:text-[#3f78e0] transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hover:text-[#3f78e0] transition-colors"><Dribbble className="w-4 h-4" /></a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
