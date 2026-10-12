import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”",
    avatar: "/assets/img/avatars/te1.jpg",
    name: "Coriss Ambady",
    role: "Financial Analyst",
  },
  {
    quote: "“Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed.”",
    avatar: "/assets/img/avatars/te2.jpg",
    name: "Cory Zamora",
    role: "Marketing Specialist",
  },
  {
    quote: "“Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum. Donec sed odio dui consectetur adipiscing elit.”",
    avatar: "/assets/img/avatars/te3.jpg",
    name: "Nikolas Brooten",
    role: "Sales Manager",
  },
  {
    quote: "“Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero condimentum ac laoreet vitae.”",
    avatar: "/assets/img/avatars/te4.jpg",
    name: "Coriss Ambady",
    role: "Financial Analyst",
  },
  {
    quote: "“Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, nascetur ridiculus mus. Donec sed odio dui. Nulla vitae elit libero.”",
    avatar: "/assets/img/avatars/te5.jpg",
    name: "Jackie Sanders",
    role: "Investment Planner",
  },
  {
    quote: "“Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.”",
    avatar: "/assets/img/avatars/te6.jpg",
    name: "Laura Widerski",
    role: "Sales Specialist",
  },
]

export function Demo21Testimonials() {
  return (
    <section id="testimonials" className="bg-[#edf2fc] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#3f78e0] mb-3">
            Happy Customers
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#343f52] leading-tight">
            Don't take our word for it. See what customers are saying about us.
          </h3>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#fcc032] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#60697b] text-base leading-relaxed mb-6 italic">
                  {item.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-100">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-[#343f52] text-base">
                    {item.name}
                  </h5>
                  <p className="text-xs text-[#aab0bc] font-semibold uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
