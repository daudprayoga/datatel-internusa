import Image from "next/image"

const stats = [
  {
    icon: "/assets/img/icons/lineal/check.svg",
    number: "7,518+",
    label: "Completed Projects",
  },
  {
    icon: "/assets/img/icons/lineal/user.svg",
    number: "500+",
    label: "Satisfied Customers",
  },
  {
    icon: "/assets/img/icons/lineal/briefcase-2.svg",
    number: "50+",
    label: "Expert Engineers",
  },
  {
    icon: "/assets/img/icons/lineal/award-2.svg",
    number: "100%",
    label: "Certified Standards",
  },
]

export function Demo15Facts() {
  return (
    <section id="facts" className="relative bg-[#fdf2f3] py-16 sm:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-14 h-14 mb-4 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#343f52] tracking-tight leading-tight mb-1">
                {item.number}
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#60697b]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
