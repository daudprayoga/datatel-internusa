export interface NewsItem {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string[]
  quote?: {
    text: string
    author: string
  }
  category: string
  date: string
  readTime: string
  image: string
  author: {
    name: string
    role: string
    avatar: string
  }
  tags: string[]
  galleryImages?: string[]
}

export const newsArticles: NewsItem[] = [
  {
    id: "1",
    slug: "office-address",
    title: "Official Office Address & Contact Information",
    excerpt:
      "PT. Datatel Inter Nusa announces updated contact channels, head office facilities, and operational branch locations in Jakarta to better serve enterprise clients.",
    category: "Announcement",
    date: "16 Feb 2026",
    readTime: "3 min read",
    image: "/assets/img/photos/b1.jpg",
    author: {
      name: "Corporate Secretary",
      role: "PT. Datatel Inter Nusa",
      avatar: "/assets/img/avatars/u1.jpg",
    },
    tags: ["Office", "Corporate", "Jakarta", "Contact"],
    quote: {
      text: "Serving our enterprise clients with excellence and rapid response across national business sectors.",
      author: "Management of PT. Datatel Inter Nusa",
    },
    content: [
      "PT. Datatel Inter Nusa is pleased to announce our updated central corporate directory and operations center in Jakarta to streamline communications with our growing enterprise client base across Indonesia.",
      "As a National Private Enterprise focusing on Computer Network & System Integrators since 2005, we continue expanding our support infrastructure, warehouse spare-part hubs, and engineering command facilities.",
      "HEAD OFFICE & OPERATIONS DIRECTORY:\n\n1. Central Operational Office:\nJl. Penjernihan I No.30, Bendungan Hilir, Jakarta Pusat 10210, Indonesia\nTelephone: +62 21 5790 1453\nFax: +62 21 5790 2213\n\n2. Operations & Logistics Facility:\nJl. Raya Kelapa Dua Wetan No.31, Ciracas, Jakarta Timur 13730, Indonesia\nTelephone: +62 21 8773 4050\n\n3. Sales & Consulting Desk:\nEmail: sales@datatel-internusa.com\nWebsite: https://www.datatel-internusa.com",
      "Clients and business partners are welcome to reach out to our account executives and solutions architects during normal business hours (Monday to Friday, 08:30 - 17:30 WIB) or via our 24/7 emergency maintenance link for SLA contract holders.",
    ],
    galleryImages: [
      "/assets/img/photos/b8.jpg",
      "/assets/img/photos/b9.jpg",
    ],
  },
  {
    id: "2",
    slug: "road-show",
    title: "Enterprise Road Show: Resilient Network & Data Center Showcase",
    excerpt:
      "We are committed to our customers' demanding requirements in terms of reliability, availability, and maintaining a high standard management system.",
    category: "Events",
    date: "16 Feb 2026",
    readTime: "4 min read",
    image: "/assets/img/photos/b2.jpg",
    author: {
      name: "Solutions Engineering Team",
      role: "PT. Datatel Inter Nusa",
      avatar: "/assets/img/avatars/u2.jpg",
    },
    tags: ["Road Show", "Data Center", "Networking", "Enterprise"],
    quote: {
      text: "We are committed to our customers' demanding requirements in terms of reliability, availability, and maintain a management system to meet your requirements.",
      author: "Engineering Directorate, Datatel Inter Nusa",
    },
    content: [
      "We are committed to our customers' demanding requirements in terms of reliability, availability, and maintain a management system to meet your requirements.",
      "PT. Datatel Inter Nusa is currently holding a technical roadshow series demonstrating state-of-the-art enterprise IT infrastructure, TIA-942 data center design and build methods, and active network virtualization architectures.",
      "During the roadshow sessions, our certified senior engineers showcase real-world deployment benchmarks in Government, Oil & Gas, Banking, and Industrial manufacturing. Topics highlighted include:\n\n• High-Availability Active Routing & Switching (L2/L3 multi-vendor integration)\n• Precision Air Conditioning (PAC) and FM-200 Clean Agent Fire Suppression\n• Optical Fiber Splicing & Fluke Networks Certified Testing\n• Intelligent IP Surveillance and Biometric Turnstile Interlocking Systems",
      "Participants gain hands-on insights into minimizing operational downtime, meeting international data center tier criteria, and maximizing infrastructure return on investment (ROI).",
    ],
    galleryImages: [
      "/assets/img/photos/b10.jpg",
      "/assets/img/photos/b11.jpg",
    ],
  },
  {
    id: "3",
    slug: "big-show",
    title: "Big Show: Comprehensive System Integration & Cabling Innovations",
    excerpt:
      "PT. Datatel Inter Nusa is a dedicated System Integrator company providing end-to-end Data and Telephone cabling systems, TIA-942 Data Centers, and digital security.",
    category: "Solutions",
    date: "16 Feb 2026",
    readTime: "5 min read",
    image: "/assets/img/photos/b3.jpg",
    author: {
      name: "Technical Operations",
      role: "PT. Datatel Inter Nusa",
      avatar: "/assets/img/avatars/u3.jpg",
    },
    tags: ["System Integrator", "Cabling", "Infrastructure", "Innovations"],
    quote: {
      text: "PT. DATATEL INTER NUSA is System Integrator company are dedicated provided to Data and Telephone cabling system.",
      author: "PT. Datatel Inter Nusa",
    },
    content: [
      "PT. DATATEL INTER NUSA is System Integrator company are dedicated provided to Data and Telephone cabling system, Data Center TIA-942 infrastructure, Digital CCTV surveillance, and Access Control systems.",
      "At our annual technology exhibition showcase, Datatel exhibited complete turnkey solutions designed to simplify clients' mission-critical IT infrastructure with their strategic business objectives.",
      "The five core disciplines demonstrated included:\n\n1. Structured Cabling System Certified: Universal platform supporting voice, data, video, and multimedia compliant with ANSI/TIA/EIA 568-B and IEC 60794.\n\n2. Data Center Design & Build: Turnkey engineering covering raised floors, PAC cooling, UPS power distribution, EMS sensory networks, and civil works.\n\n3. Active Networking System: Scalable server interconnections, assessment gap analysis, and 24/7 network diagnostics.\n\n4. Digital CCTV: Superior image quality over IP networks for industrial, commercial, and remote unmanned perimeter defense.\n\n5. Access Control: Advanced facial recognition, RFID credentials, and turnstile gate integrations.",
      "Datatel reinforces its ongoing commitment to empower Indonesian private enterprises, BUMN, and institutions with world-class engineering standards and 24x7 SLA support.",
    ],
    galleryImages: [
      "/assets/img/photos/b12.jpg",
      "/assets/img/photos/b13.jpg",
    ],
  },
  {
    id: "4",
    slug: "tia-942-data-center-standards",
    title: "Designing Resilient Data Centers with TIA-942 International Standards",
    excerpt:
      "A deep dive into how TIA-942 guidelines ensure high uptime, precision cooling, clean power distribution, and fire protection in modern server rooms.",
    category: "Data Center",
    date: "28 Jan 2026",
    readTime: "6 min read",
    image: "/assets/img/photos/b4.jpg",
    author: {
      name: "Data Center Architect",
      role: "PT. Datatel Inter Nusa",
      avatar: "/assets/img/avatars/u4.jpg",
    },
    tags: ["TIA-942", "Data Center", "Cooling", "UPS"],
    quote: {
      text: "In making the concept of Data Center, Datatel refers to TIA-942 standard because it is comprehensive in specifications proven world-class.",
      author: "Infrastructure Practice Lead",
    },
    content: [
      "In the development effort and improving the performance of IT equipment in accordance with International Standards, designing and building modern data centers requires specialized engineering handling.",
      "Datatel refers to the ANSI/TIA-942 Telecommunications Infrastructure Standard for Data Centers. We use this standard because it comprehensively covers site architectural requirements, electrical power redundancy, mechanical precision cooling, and physical security.",
      "Key planning considerations implemented by Datatel:\n\n• Reliable: Fault-tolerant electrical architectures eliminating single points of failure.\n• Available: N+1 and 2N UPS configurations ensuring seamless failover.\n• Maintainable: Concurrent maintainability enabling servicing without interrupting live server loads.\n• Flexible & Cost Effective: Modular rack rows that scale as computational demands increase.",
      "Combined with automated Environmental Monitoring Systems (EMS) and clean agent FM-200 fire suppression, facilities built by Datatel deliver peace of mind for 24/7 mission-critical operations.",
    ],
    galleryImages: [
      "/assets/img/photos/b14.jpg",
      "/assets/img/photos/b15.jpg",
    ],
  },
  {
    id: "5",
    slug: "structured-cabling-certified-standards",
    title: "Why Certified Structured Cabling Is the Backbone of Enterprise IT",
    excerpt:
      "Exploring the universal platform of Cat 6A and Fiber Optic cabling systems complying with ANSI/TIA/EIA 568-B and IEC 60794 standards.",
    category: "Infrastructure",
    date: "14 Jan 2026",
    readTime: "4 min read",
    image: "/assets/img/photos/b5.jpg",
    author: {
      name: "Cabling Systems Specialist",
      role: "PT. Datatel Inter Nusa",
      avatar: "/assets/img/avatars/u5.jpg",
    },
    tags: ["Cabling", "Fiber Optic", "ANSI/TIA/EIA", "Certification"],
    quote: {
      text: "A structured cabling system provides a universal platform upon which an overall information system's strategy is built.",
      author: "Datatel Cabling Division",
    },
    content: [
      "A structured cabling system provides a universal platform upon which an overall information system's strategy is built. With a flexible cabling infrastructure, it can support multiple voice, data, video, and multimedia systems regardless of their manufacturer.",
      "A well-designed cabling plant includes independent cabling solutions of different media types installed at each workstation to support multiple system performance requirements.",
      "Our installations strictly adhere to standards set by global authorities including ANSI/TIA/EIA 568-B, BS EN 50173-1:2011, and IEC 60794. Every link is calibrated and certified using Fluke Networks CableAnalyzers, backed by official warranty certification.",
      "With 24x7 SLA support, clean overhead and underfloor containment, and comprehensive as-built documentation, Datatel provides future-proof connectivity built to last decades.",
    ],
    galleryImages: [
      "/assets/img/photos/b16.jpg",
      "/assets/img/photos/b17.jpg",
    ],
  },
  {
    id: "6",
    slug: "smart-access-control-ip-cctv",
    title: "Converging Physical Security: Modern Biometrics and IP Surveillance",
    excerpt:
      "How integrated digital CCTV and biometric access control reduce liability, protect critical assets, and automate facility entrance workflows.",
    category: "Security",
    date: "05 Jan 2026",
    readTime: "5 min read",
    image: "/assets/img/photos/b6.jpg",
    author: {
      name: "Security Solutions Team",
      role: "PT. Datatel Inter Nusa",
      avatar: "/assets/img/avatars/u6.jpg",
    },
    tags: ["CCTV", "Access Control", "Biometrics", "Security"],
    quote: {
      text: "Controlling access to your premises and its assets is fundamental to safeguarding your employees and business.",
      author: "Datatel Physical Security Practice",
    },
    content: [
      "In these uncertain times, security has become a paramount priority. Controlling access to your premises and its assets is fundamental to safeguarding your employees and business operations.",
      "By bridging high-definition digital CCTV over IP with biometric access control, organizations achieve complete visibility over who enters specific facilities and when.",
      "Key integration benefits delivered by Datatel:\n\n• Regulating who gains entry to sensitive server rooms and corporate offices.\n• Restricting zone access via multi-factor authentication (face recognition, RFID card, PIN).\n• Visual verification and automatic number plate recognition (ANPR) at parking gates.\n• Significant reduction in physical guard overhead and liability through automated audit logs.",
      "All systems feature intuitive remote viewing and emergency fire alarm release integration for total compliance with building safety regulations.",
    ],
    galleryImages: [
      "/assets/img/photos/b8.jpg",
      "/assets/img/photos/b10.jpg",
    ],
  },
]

export const newsCategories = [
  "All",
  "Announcement",
  "Events",
  "Solutions",
  "Data Center",
  "Infrastructure",
  "Security",
]

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsArticles.find((item) => item.slug === slug)
}

export function getRecentNews(limit = 4, excludeSlug?: string): NewsItem[] {
  return newsArticles
    .filter((item) => item.slug !== excludeSlug)
    .slice(0, limit)
}
