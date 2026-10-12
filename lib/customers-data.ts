import type { ComponentType } from "react"
import {
  Factory,
  Flame,
  Landmark,
  Radio,
  Building2,
  BadgeDollarSign,
  ShieldCheck,
  Cpu,
  Network,
  Video,
  KeyRound,
  Server,
  Cable,
  CheckCircle2,
} from "lucide-react"

export interface CustomerSubcategory {
  name: string
  description?: string
  clients: string[]
}

export interface CustomerSolution {
  title: string
  desc: string
  iconName: "Network" | "Video" | "KeyRound" | "Server" | "Cable" | "ShieldCheck" | "Cpu"
}

export interface CustomerSector {
  slug: string
  alternateSlugs?: string[]
  title: string
  navLabel: string
  subtitle: string
  shortDesc: string
  lead: string
  overview: string[]
  iconName: "Factory" | "Flame" | "Landmark" | "Radio" | "Building2" | "BadgeDollarSign"
  stats: { value: string; label: string }[]
  clients: string[]
  subcategories?: CustomerSubcategory[]
  solutions: CustomerSolution[]
  keyHighlights: string[]
}

export const customerSectors: CustomerSector[] = [
  {
    slug: "manufacturing-distribution-retail",
    alternateSlugs: ["manufacturing", "manufacturing-distribution"],
    title: "Manufacturing, Distribution & Retail",
    navLabel: "Manufacturing, Distribution & Retail",
    subtitle: "Industrial & Supply Chain Network Infrastructure",
    shortDesc: "High-density cabling, automated surveillance, industrial wireless, and access control for manufacturing plants & distribution hubs.",
    lead: "Delivering resilient network backbones, automated surveillance, industrial wireless, and high-density structured cabling to Indonesia's top manufacturing plants, global logistics hubs, and retail distribution centers.",
    overview: [
      "Modern industrial facilities demand non-stop communications across vast plant floors, heavy-duty production lines, automated warehousing, and corporate administrative offices.",
      "PT. Datatel Inter Nusa engineers industrial-grade structured cabling and communications architectures that withstand harsh manufacturing environments, electrical interference, and rigorous operation hours, ensuring uninterrupted supply chain continuity.",
    ],
    iconName: "Factory",
    stats: [
      { value: "20+", label: "Leading Enterprise Clients" },
      { value: "100%", label: "TIA/EIA Standards Compliance" },
      { value: "Cat.6A / FO", label: "Industrial Cabling Specs" },
      { value: "24/7", label: "Reliability & Uptime" },
    ],
    clients: [
      "Adis Dimention Footwear",
      "Bluescope Lysaght",
      "Bluescope Steel Indonesia",
      "Cargill Indonesia",
      "Goodyear Indonesia Tbk",
      "Jaya Readymix",
      "Kao Indonesia",
      "KLM",
      "Linfox Logistics Indonesia",
      "Maersk Indonesia",
      "Matahari Putra Prima, Tbk",
      "Nipress Tbk",
      "SHARP Indonesia",
      "Sirtu Alam Makmur",
      "Syngenta Indonesia",
      "Tunas Ridean",
      "Herlina Indah (Sari Enesis)",
      "Shanghiang Perkasa",
      "Kalbe Morinaga Indonesia",
      "Mane Indonesia",
    ],
    solutions: [
      {
        title: "Industrial Structured Cabling",
        desc: "Cat.6/Cat.6A and heavy-duty Fiber Optic backbone cabling engineered for high electromagnetic environments and manufacturing facilities.",
        iconName: "Cable",
      },
      {
        title: "Warehouse & Plant Floor Wi-Fi",
        desc: "Enterprise wireless coverage engineered for high ceilings, moving logistics machinery, barcode scanners, and handheld inventory terminals.",
        iconName: "Network",
      },
      {
        title: "Digital CCTV & Process Surveillance",
        desc: "High-resolution IP surveillance cameras covering loading bays, hazardous areas, production lines, and perimeter fence lines.",
        iconName: "Video",
      },
      {
        title: "Cleanroom & Facility Access Control",
        desc: "Biometric and RFID access systems securing clean production rooms, chemical storage, distribution docks, and server rooms.",
        iconName: "KeyRound",
      },
    ],
    keyHighlights: [
      "Industrial-grade Cat.6A & Fiber Optic (OM3/OM4/SM) installation",
      "Certified testing with Fluke CableAnalyzer & OTDR documentation",
      "Under-floor, overhead basket tray, and conduit routing for plant floors",
      "Scalable infrastructure ready for Industry 4.0 automation and IoT sensors",
    ],
  },
  {
    slug: "energy-oil-and-gas-mining-co",
    alternateSlugs: ["energy-oil-gas-mining", "energy", "oil-and-gas-mining"],
    title: "Energy ( Oil and gas, Mining Co )",
    navLabel: "Energy ( Oil and gas, Mining Co )",
    subtitle: "Mission-Critical Telecom & Ruggedized Field Infrastructure",
    shortDesc: "Explosion-proof fiber infrastructure, remote telemetry cabling, and ruggedized server rooms for offshore platforms & mining concessions.",
    lead: "Providing mission-critical network reliability, explosion-proof fiber infrastructure, long-range wireless links, and ruggedized data centers designed for harsh remote environments in offshore platforms and mining concessions.",
    overview: [
      "Oil & gas exploration sites, power plants, and mining concessions operate under extreme environmental conditions: extreme heat, dust, humidity, remote locations, and strict safety guidelines.",
      "PT. Datatel Inter Nusa has proven domain expertise in deploying ruggedized fiber optics, industrial communications networks, and explosion-proof CCTV systems that adhere strictly to international safety and industrial specifications.",
    ],
    iconName: "Flame",
    stats: [
      { value: "13+", label: "Energy & Mining Giants" },
      { value: "Offshore & Remote", label: "Field Project Expertise" },
      { value: "Ruggedized", label: "Extreme Condition Ready" },
      { value: "Zero Downtime", label: "Mission-Critical Architecture" },
    ],
    clients: [
      "Agincourt Resources",
      "Agranagara Dhanapa Indonesia",
      "BP Indonesia Ltd.",
      "CARGILL Indonesia",
      "ConocoPhillips Indonesia",
      "Ellipse Energy",
      "Fugro Indonesia",
      "Ithaca Resources",
      "Kaltim Pasifik Amoniak",
      "Navigat Energy",
      "Petrofac IKPT International",
      "PLTU Rembang",
      "Thiess Contractor Indonesia",
    ],
    solutions: [
      {
        title: "Harsh-Environment Fiber Optics",
        desc: "Armored single-mode and multi-mode fiber cabling built to endure vibration, corrosive gases, rodents, and heavy field conditions.",
        iconName: "Cable",
      },
      {
        title: "Perimeter & Hazardous Area CCTV",
        desc: "Explosion-proof and weather-shielded digital cameras with long-range PTZ and thermal night surveillance for remote concessions.",
        iconName: "Video",
      },
      {
        title: "Ruggedized Server Room Infrastructure",
        desc: "Mini data center design, precision climate control, fire suppression, and dual redundant power for remote operational camps.",
        iconName: "Server",
      },
      {
        title: "Mission-Critical Telemetry Links",
        desc: "Fail-safe structured cabling linking SCADA controllers, distributed telemetry sensors, and central management terminals.",
        iconName: "Cpu",
      },
    ],
    keyHighlights: [
      "Heavy-duty armored and gel-filled outdoor fiber optic installations",
      "Strict compliance with HSE safety protocols and industrial site regulations",
      "Integrated testing, OTDR loss profiling, and certified documentation",
      "High-availability network switching with automatic failover and redundancy",
    ],
  },
  {
    slug: "government-bumn",
    alternateSlugs: ["government", "bumn", "pemerintah-bumn"],
    title: "Government, BUMN",
    navLabel: "Government, BUMN",
    subtitle: "Secure Public Sector & State-Owned Enterprise Infrastructure",
    shortDesc: "Turnkey Tier data center design, ministry campus fiber backbones, smart biometric access, and centralized command centers.",
    lead: "Building secure, high-availability data centers, enterprise active routing, campus-wide fiber backbones, and smart surveillance for ministries, law enforcement agencies, and state-owned enterprises across Indonesia.",
    overview: [
      "Public sector institutions and State-Owned Enterprises (BUMN) require high-grade security, data sovereignty, strict transparency standards, and the capacity to serve millions of citizens reliably.",
      "PT. Datatel Inter Nusa delivers end-to-end IT infrastructure projects for ministries, state utility providers, and law enforcement agencies with comprehensive documentation and ISO/IEC standard compliance.",
    ],
    iconName: "Landmark",
    stats: [
      { value: "16+", label: "Ministries & BUMN Institutions" },
      { value: "Tier Standards", label: "Data Center Compliance" },
      { value: "High Security", label: "Biometric & Physical Defense" },
      { value: "National Scale", label: "Multi-Provincial Deployments" },
    ],
    clients: [
      "Direktorat Komunikasi, Ditjen Postel",
      "EC – ILO – Banda Aceh",
      "Kementrian Pendayagunaan Aparatur Negara",
      "Pemerintah Provinsi BALI",
      "Kementerian Luar Negeri",
      "Jasa Marga",
      "Kementrian Agama RI",
      "DJPK Departemen Keuangan RI",
      "BMKG ( Badan Meteorologi Klimatologi & Geofisika )",
      "KPK ( Komisi Pemberantasan Korupsi )",
      "PIP ( Politeknik Ilmu Pelayaran )",
      "Telkom Indonesia",
      "Kepolisian Republik Indonesia",
      "Badan Pertanahan Nasional",
      "TVRI",
      "PLN ( PLTU )",
    ],
    solutions: [
      {
        title: "Tier Data Center Design & Build",
        desc: "Turnkey computer rooms meeting ANSI/TIA-942 specifications, complete with raised flooring, FM-200 fire suppression, and precision cooling.",
        iconName: "Server",
      },
      {
        title: "Campus-Wide Fiber Infrastructure",
        desc: "Underground conduit trenching, outdoor fiber splicing, and high-density distribution uniting multi-building government complexes.",
        iconName: "Cable",
      },
      {
        title: "Command Center & Video Wall CCTV",
        desc: "Centralized IP monitoring rooms with video walls for real-time surveillance of public assets, traffic tollways, and facilities.",
        iconName: "Video",
      },
      {
        title: "Biometric Security & Turnstiles",
        desc: "Multi-tiered access control, biometric facial recognition speed-gates, and visitor badge tracking for sensitive state offices.",
        iconName: "KeyRound",
      },
    ],
    keyHighlights: [
      "Complete compliance with government procurement and technical standards",
      "Certified project management with end-to-end commissioning reports",
      "High-grade physical security integration for critical public infrastructure",
      "Seamless integration with legacy state networks and modernized cloud hubs",
    ],
  },
  {
    slug: "telecommunication-media-and-it-services",
    alternateSlugs: ["telecommunication-media-it-services", "telecommunication", "media-it"],
    title: "Telecommunication, Media and IT Services",
    navLabel: "Telecommunication, Media and IT Services",
    subtitle: "Carrier-Grade Interconnects & Media Broadcasting Infrastructure",
    shortDesc: "Carrier-grade fiber patch fields, broadcast studio low-voltage cabling, high-density server racks, and low-latency switching.",
    lead: "Supporting national telecom operators, broadcasting studios, and top IT systems integrators with ultra-low latency fiber optics, carrier-grade patch fields, and scalable rack architectures.",
    overview: [
      "In the fast-moving telecom and broadcasting sectors, milliseconds matter. Telecommunication operators and broadcast studios require flawless signal transmission, high-density fiber patching, and zero packet loss.",
      "PT. Datatel Inter Nusa partners with major carriers and tech leaders to engineer ultra-clean cable pathways, high-density fiber frames, and redundant routing backbones that keep Indonesia connected.",
    ],
    iconName: "Radio",
    stats: [
      { value: "11+", label: "Telecom & Media Leaders" },
      { value: "OM3 / OM4 / SM", label: "Ultra-Low Loss Fiber Optics" },
      { value: "Carrier Grade", label: "Patch Field Architecture" },
      { value: "40G / 100G Ready", label: "High-Bandwidth Future-Proof" },
    ],
    clients: [
      "Broadband Multimedia Tbk.",
      "Cipta TPI",
      "Collega Inti Pratama",
      "Huawei Tech. Investment",
      "Indosat Tbk",
      "Media Investor",
      "PCCW Cascade Indonesia",
      "Astragraphia Information Technologies",
      "Sigma Telkom",
      "Sisindokom Lintas Buana",
      "Lintasarta",
    ],
    solutions: [
      {
        title: "High-Density Fiber Distribution",
        desc: "MPO/MTP and LC carrier-grade fiber distribution hubs engineered for rapid patching, minimal insertion loss, and 100G readiness.",
        iconName: "Cable",
      },
      {
        title: "Broadcast Studio Low-Voltage Cabling",
        desc: "Shielded cabling and structured patch bays tailored for television broadcasting studios, production sets, and edit suites.",
        iconName: "Cpu",
      },
      {
        title: "Carrier Server Rack & Cable Management",
        desc: "Overhead cable trays, ladder racks, vertical cable managers, and cold/hot aisle containment for carrier co-location spaces.",
        iconName: "Server",
      },
      {
        title: "Active Core Switch Integration",
        desc: "L2/L3 active enterprise switching, VLAN segregation, and fiber uplink certification adhering to international carrier standards.",
        iconName: "Network",
      },
    ],
    keyHighlights: [
      "Certified Single-Mode & Multimode fiber loss measurements (OTDR & Power Meter)",
      "Structured labeling and color-coded patch cord schemes for quick maintenance",
      "Zero-downtime cutover methodologies for live carrier environments",
      "Trusted partnership with global telecom system manufacturers",
    ],
  },
  {
    slug: "hotel-hospital-others-co",
    alternateSlugs: ["hotel-hospital-others", "hospitality", "hotel-hospital"],
    title: "Hotel, Hospital, Others Co",
    navLabel: "Hotel, Hospital, Others Co",
    subtitle: "Hospitality, Healthcare & Commercial Property Systems",
    shortDesc: "Resort Wi-Fi coverage, hospital sterile room cabling standards, RFID electronic locks, and building security surveillance.",
    lead: "Delivering luxury resort Wi-Fi, patient monitoring low-voltage cabling, smart card hotel locks, integrated building access control, and 24/7 CCTV surveillance for 5-star properties, hospitals, and corporate towers.",
    overview: [
      "Luxury resorts, five-star hotels, regional hospitals, and high-rise commercial towers present diverse technical requirements: guest Wi-Fi satisfaction, patient life-safety cabling integrity, and seamless keyless access.",
      "PT. Datatel Inter Nusa crafts tailored low-voltage infrastructure for hospitality and healthcare landmarks from Bali's premier luxury villas to metropolitan hospitals and landmark towers in Jakarta.",
    ],
    iconName: "Building2",
    stats: [
      { value: "23+", label: "Hotels, Hospitals & Landmarks" },
      { value: "5-Star Standard", label: "Hospitality Wi-Fi & IPTV" },
      { value: "Healthcare Grade", label: "Medical Cabling Standards" },
      { value: "Bali & Jakarta", label: "Iconic Property Deployments" },
    ],
    clients: [
      "Alila Villas Uluwatu",
      "Alila Villa Soori",
      "Alita Praya Mitra",
      "Ayodya Resort Bali",
      "Anantara Resort & SPA Seminyak",
      "Padma Resort Ubud",
      "Padma Resort Legian",
      "The Executive Club Jakarta",
      "The Sultan Jakarta Hotel",
      "Bali Shangrila Beach Club",
      "Le Meredien Bali Jimbaran",
      "Samabe Bali Suites & Villas",
      "RS. Sanglah Denpasar",
      "Lippo Karawaci Tbk.",
      "Apartemen Senopati",
      "Jaya Teknik Indonesia",
      "Multicon",
      "Pilar Garba Inti",
      "Prasetya Gema Mulia",
      "Soemadipraja & Taher",
      "ISS",
      "Karya Intertek Kencana",
      "Rekadaya Electrika",
    ],
    subcategories: [
      {
        name: "Hotel & Resort",
        description: "Premier 5-star resorts, private luxury villas, and historic executive hotels across Bali and Jakarta.",
        clients: [
          "Alila Villas Uluwatu",
          "Alila Villa Soori",
          "Alita Praya Mitra",
          "Ayodya Resort Bali",
          "Anantara Resort & SPA Seminyak",
          "Padma Resort Ubud",
          "Padma Resort Legian",
          "The Executive Club Jakarta",
          "The Sultan Jakarta Hotel",
          "Bali Shangrila Beach Club",
          "Le Meredien Bali Jimbaran",
          "Samabe Bali Suites & Villas",
        ],
      },
      {
        name: "Hospital & Others",
        description: "General hospital complexes, property conglomerates, residential towers, and corporate headquarters.",
        clients: [
          "RS. Sanglah Denpasar",
          "Lippo Karawaci Tbk.",
          "Apartemen Senopati",
          "Jaya Teknik Indonesia",
          "Multicon",
          "Pilar Garba Inti",
          "Prasetya Gema Mulia",
          "Soemadipraja & Taher",
          "ISS",
          "Karya Intertek Kencana",
          "Rekadaya Electrika",
        ],
      },
    ],
    solutions: [
      {
        title: "Guest Room Wi-Fi & IPTV Cabling",
        desc: "Discreet in-wall cabling feeding high-speed wireless access points, smart room automation, and high-definition hospitality IPTV.",
        iconName: "Network",
      },
      {
        title: "Hospital Critical Cabling Systems",
        desc: "Medical-grade low-voltage pathways for patient monitoring networks, radiology file transfer, and nurse call integration.",
        iconName: "Cable",
      },
      {
        title: "RFID Hotel Locks & Building Access",
        desc: "Contactless RFID door lock integration, elevator floor restriction, and back-of-house staff access management.",
        iconName: "KeyRound",
      },
      {
        title: "Property Digital CCTV & Security",
        desc: "24/7 high-definition cameras monitoring hotel lobbies, swimming pools, parking basements, and hospital emergency entrances.",
        iconName: "Video",
      },
    ],
    keyHighlights: [
      "Aesthetic cable concealment preserving luxury architectural interiors",
      "High-density concurrent Wi-Fi tuning for banquets, ballrooms, and outdoor resort grounds",
      "Strict EMI shielding near medical MRI and radiology equipment",
      "Centralized management simplifying maintenance for property engineers",
    ],
  },
  {
    slug: "financial-services-industries",
    alternateSlugs: ["financial-services", "banking", "finance"],
    title: "Financial Services Industries",
    navLabel: "Financial Services Industries",
    subtitle: "High-Security Banking & FinTech Infrastructure",
    shortDesc: "ANSI/TIA-568-B structured cabling, multi-factor biometric vault access, ATM connectivity, and secure Tier III data centers.",
    lead: "Deploying ISO/IEC compliant structured cabling, multi-factor biometric access control, ATM network connectivity, and secure Tier III data center environments for banking institutions and financial corporations.",
    overview: [
      "Financial institutions and insurance corporations require the highest tiers of physical data protection, stringent audit trails, absolute confidentiality, and zero system downtime.",
      "PT. Datatel Inter Nusa builds fortified network infrastructures for multinational banks, regional banking authorities, and insurance enterprises, satisfying rigorous regulatory inspections and compliance audits.",
    ],
    iconName: "BadgeDollarSign",
    stats: [
      { value: "13+", label: "Banks & Financial Institutions" },
      { value: "ISO / TIA", label: "Certified Cabling Standards" },
      { value: "Multi-Factor", label: "Vault Biometrics & Access" },
      { value: "High Shielding", label: "Low-Interference Cat.6A" },
    ],
    clients: [
      "Adira Insurance",
      "Bank Syariah BRI",
      "BII Finance Center",
      "Bussan Auto Finance",
      "Kliring Berjangka Indonesia",
      "The Bank Of Tokyo Mitsubishi-UFJ, Ltd",
      "Tunas Ridean Tbk.",
      "Bank Pemerintah Daerah Bali",
      "Bank BTPN",
      "Bank BTN",
      "Verena Oto Finance",
      "BNI Life",
      "Bank Victoria",
    ],
    solutions: [
      {
        title: "Banking Server Room & Data Center",
        desc: "Precision environmental containment, clean-agent fire suppression, and dual-source electrical distribution meeting financial guidelines.",
        iconName: "Server",
      },
      {
        title: "Shielded Cat.6A Backbone Cabling",
        desc: "F/UTP and S/FTP structured cabling ensuring zero alien crosstalk and impenetrable transmission for real-time transactional data.",
        iconName: "Cable",
      },
      {
        title: "Multi-Factor Biometric Vault Access",
        desc: "Fingerprint and facial recognition access control with dual-custody authorization, mantrap interlocks, and automated audit logs.",
        iconName: "KeyRound",
      },
      {
        title: "Banking Branch & ATM CCTV Surveillance",
        desc: "Tamper-alert IP video surveillance covering teller counters, cash sorting rooms, safe deposit vaults, and external ATM kiosks.",
        iconName: "Video",
      },
    ],
    keyHighlights: [
      "ANSI/TIA-568-B & ISO/IEC 11801 standards compliance with 25-year warranty certifications",
      "Strict physical compartmentalization for critical financial core networks",
      "Seamless integration with security operations centers (SOC) and remote monitoring",
      "Proven delivery across major national banks and global financial conglomerates",
    ],
  },
]

export function getCustomerSector(slug: string): CustomerSector | undefined {
  const normalized = slug.toLowerCase()
  return customerSectors.find(
    (s) => s.slug === normalized || s.alternateSlugs?.includes(normalized)
  )
}

export function getAllCustomerSectors(): CustomerSector[] {
  return customerSectors
}

export function getTotalClientCount(): number {
  return customerSectors.reduce((total, sector) => total + sector.clients.length, 0)
}
