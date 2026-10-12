import type { ComponentType } from "react"
import {
  Cable,
  Network,
  Server,
  Video,
  KeyRound,
  Radio,
  ShieldCheck,
  Cpu,
  Layers,
  Award,
  CheckCircle2,
} from "lucide-react"

export interface TechnologyPartner {
  id: string
  name: string
  categorySlug: string
  categoryName: string
  tier: "Tier-1 Principal Partner" | "Premier Certified Partner" | "Elite Data Center Partner" | "Gold Alliance Partner" | "Authorized Solution Partner" | "Certified System Integrator"
  description: string
  specialties: string[]
  logo: string
  websiteUrl?: string
  country?: string
}

export interface PartnerSolution {
  title: string
  desc: string
  iconName: "Network" | "Video" | "KeyRound" | "Server" | "Cable" | "ShieldCheck" | "Cpu" | "Radio"
}

export interface PartnerCategory {
  slug: string
  alternateSlugs?: string[]
  title: string
  navLabel: string
  subtitle: string
  shortDesc: string
  lead: string
  overview: string[]
  iconName: "Cable" | "Network" | "Server" | "Video" | "KeyRound" | "Radio"
  stats: { value: string; label: string }[]
  partners: TechnologyPartner[]
  solutions: PartnerSolution[]
  keyHighlights: string[]
}

export const partnerCategories: PartnerCategory[] = [
  {
    slug: "structured-cabling-optical-fiber",
    alternateSlugs: ["structured-cabling", "cabling-fiber"],
    title: "Structured Cabling & Optical Fiber Systems",
    navLabel: "Structured Cabling & Fiber",
    subtitle: "Enterprise Physical Layer & Optical Backbone Alliances",
    shortDesc:
      "Prinsipal global penyedia sistem pengkabelan tembaga UTP/STP Cat.6/6A/7/8 dan fiber optik bergaransi performa resmi hingga 25 tahun.",
    lead:
      "Menghubungkan infrastruktur enterprise melalui kemitraan strategis dengan manufaktur pengkabelan terkemuka dunia, menjamin transmisi data ultra-cepat dengan sertifikasi standar Fluke Networks.",
    overview: [
      "Lapisan fisik (Layer 1) merupakan fondasi vital bagi kelangsungan operasional seluruh sistem IT perusahaan. Kualitas kabel dan konektor menentukan keandalan transmisi data tanpa packet loss.",
      "PT. Datatel Inter Nusa menjalin kemitraan resmi dengan manufaktur structured cabling papan atas dunia seperti Panduit, CommScope, Belden, dan Legrand. Seluruh teknisi dan engineer kami mengantongi sertifikasi Certified Cabling Specialist, berhak memberikan garansi kinerja sistem resmi dari prinsipal hingga 25 tahun.",
    ],
    iconName: "Cable",
    stats: [
      { value: "25 Thn", label: "Garansi Kinerja Sistem Resmi" },
      { value: "Cat.6A / 8", label: "Spesifikasi UTP / STP Tertinggi" },
      { value: "OM3-OS2", label: "Backbone Fiber Optic Multi/Singlemode" },
      { value: "100%", label: "Uji Fluke Versiv DSX Terverifikasi" },
    ],
    partners: [
      {
        id: "panduit",
        name: "Panduit",
        categorySlug: "structured-cabling-optical-fiber",
        categoryName: "Structured Cabling & Fiber",
        tier: "Tier-1 Principal Partner",
        description:
          "Pemimpin dunia dalam solusi infrastruktur fisik, kabel Cat.6/6A Pan-Net, patch panel modular Mini-Com, fiber optik, dan cable routing NetKey.",
        specialties: ["Cat.6A Copper Systems", "OptiCam Fiber Terminations", "Cable Pathway Solutions"],
        logo: "/assets/img/brands/c1.png",
        websiteUrl: "https://www.panduit.com",
        country: "USA",
      },
      {
        id: "commscope",
        name: "CommScope / AMP NETCONNECT",
        categorySlug: "structured-cabling-optical-fiber",
        categoryName: "Structured Cabling & Fiber",
        tier: "Premier Certified Partner",
        description:
          "Solusi pengkabelan terstruktur berstandar industri dengan merek legendaris SYSTIMAX dan AMP NETCONNECT untuk enterprise dan kampus.",
        specialties: ["SYSTIMAX Solutions", "AMP Netconnect Cat.6", "High-Density Fiber Panels"],
        logo: "/assets/img/brands/c2.png",
        websiteUrl: "https://www.commscope.com",
        country: "USA",
      },
      {
        id: "belden",
        name: "Belden",
        categorySlug: "structured-cabling-optical-fiber",
        categoryName: "Structured Cabling & Fiber",
        tier: "Authorized Solution Partner",
        description:
          "Spesialis kabel transmisi sinyal dan data kelas industri, kabel tahan gangguan interferensi berat (EMI), dan sistem IBDN.",
        specialties: ["Industrial Ethernet Cables", "DataTuff Shielded Lines", "Enterprise IBDN Systems"],
        logo: "/assets/img/brands/c3.png",
        websiteUrl: "https://www.belden.com",
        country: "USA",
      },
      {
        id: "legrand",
        name: "Legrand / Ortronics",
        categorySlug: "structured-cabling-optical-fiber",
        categoryName: "Structured Cabling & Fiber",
        tier: "Certified System Integrator",
        description:
          "Produsen global sistem manajemen jalur kabel wiremesh Cablofil, patch panel LCS3 berkinerja tinggi, dan workstation outlet.",
        specialties: ["LCS3 Cabling Systems", "Cablofil Wire Mesh Trays", "Floor Boxes & Outlets"],
        logo: "/assets/img/brands/c4.png",
        websiteUrl: "https://www.legrand.com",
        country: "France",
      },
      {
        id: "ls-cable",
        name: "LS Cable & System",
        categorySlug: "structured-cabling-optical-fiber",
        categoryName: "Structured Cabling & Fiber",
        tier: "Authorized Solution Partner",
        description:
          "Penyedia kabel telekomunikasi, serat optik OPGW/ADSS, dan kabel UTP premise berdaya tahan tinggi bersertifikasi internasional.",
        specialties: ["Premise Data Cabling", "Outdoor Optical Cables", "Flame Retardant LSZH Cables"],
        logo: "/assets/img/brands/c5.png",
        websiteUrl: "https://www.lscns.com",
        country: "South Korea",
      },
      {
        id: "rosenberger",
        name: "Rosenberger",
        categorySlug: "structured-cabling-optical-fiber",
        categoryName: "Structured Cabling & Fiber",
        tier: "Gold Alliance Partner",
        description:
          "Konektivitas optik presisi tinggi asal Jerman, rakitan kabel patch cord MPO/MTP berdensitas tinggi untuk interkoneksi data center.",
        specialties: ["MPO/MTP Ultra-Density Fiber", "Pre-terminated Trunks", "Data Center Patching"],
        logo: "/assets/img/brands/c6.png",
        websiteUrl: "https://www.rosenberger.com",
        country: "Germany",
      },
    ],
    solutions: [
      {
        title: "Copper Cabling Solution (Cat.6 / Cat.6A)",
        desc: "Pemasangan kabel UTP/FTP horizontal dan vertical riser dengan performa bandwidth hingga 500 MHz untuk PoE+ dan 10GBASE-T.",
        iconName: "Cable",
      },
      {
        title: "Fiber Optic Backbone Integration",
        desc: "Instalasi kabel serat optik single-mode (OS2) dan multi-mode (OM3/OM4) dengan fusion splicing rendah redaman (<0.05 dB).",
        iconName: "Network",
      },
      {
        title: "25-Year Performance Warranty",
        desc: "Sertifikasi kelulusan uji Fluke DSX CableAnalyzer yang didaftarkan resmi ke prinsipal untuk garansi penggantian penuh.",
        iconName: "ShieldCheck",
      },
    ],
    keyHighlights: [
      "Kemitraan resmi dengan prinsipal Panduit, CommScope, dan Belden",
      "Engineer dan teknisi bersertifikat Copper & Fiber Installer",
      "Penerapan standar internasional ANSI/TIA-568-D dan ISO/IEC 11801",
      "Dokumentasi lengkap as-built drawing, labeling, dan laporan Fluke",
    ],
  },
  {
    slug: "enterprise-networking-routing",
    alternateSlugs: ["networking", "enterprise-networking"],
    title: "Enterprise Networking, Routing & Switching",
    navLabel: "Enterprise Networking",
    subtitle: "Active Network Infrastructure, SD-WAN & Core Switching",
    shortDesc:
      "Solusi perangkat aktif jaringan enterprise, core routing, high-density switching, software-defined WAN, dan cloud-managed controller.",
    lead:
      "Membangun backbone jaringan perusahaan yang cerdas, cepat, dan terlindungi melalui kemitraan dengan pionir perangkat jaringan komputer global.",
    overview: [
      "Jaringan enterprise modern membutuhkan ketersediaan tinggi (high availability), latensi rendah, serta kemampuan segmentasi jaringan yang ketat untuk menopang komputasi multi-cabang dan akses cloud.",
      "PT. Datatel Inter Nusa bekerja sama dengan produsen switch dan router terkemuka dunia seperti Cisco, HPE Aruba, Ruijie Networks, dan Juniper. Kami mengintegrasikan arsitektur Core, Distribution, dan Access Layer yang siap menangani lonjakan trafik data, VoIP, dan komputasi bisnis kritis.",
    ],
    iconName: "Network",
    stats: [
      { value: "99.99%", label: "Target Network High Availability" },
      { value: "100 Gbps", label: "Kapasitas Core Spine-Leaf Switching" },
      { value: "Zero Trust", label: "Arsitektur Keamanan Terintegrasi" },
      { value: "24/7", label: "Dukungan Teknis & SLA Eskalasi" },
    ],
    partners: [
      {
        id: "cisco",
        name: "Cisco Systems",
        categorySlug: "enterprise-networking-routing",
        categoryName: "Enterprise Networking",
        tier: "Premier Certified Partner",
        description:
          "Standar industri jaringan global dengan lini switch Catalyst 9000, router ISR/Catalyst 8000, Cisco Meraki Cloud, dan solusi Cisco DNA Center.",
        specialties: ["Catalyst 9000 Switching", "Meraki Cloud Managed Network", "Cisco SD-WAN Solutions"],
        logo: "/assets/img/brands/c7.png",
        websiteUrl: "https://www.cisco.com",
        country: "USA",
      },
      {
        id: "hpe-aruba",
        name: "HPE Aruba Networking",
        categorySlug: "enterprise-networking-routing",
        categoryName: "Enterprise Networking",
        tier: "Premier Certified Partner",
        description:
          "Arsitektur jaringan edge-to-cloud cerdas dengan Aruba CX Switching (AOS-CX), Aruba Central AI-powered management, dan ClearPass Policy Manager.",
        specialties: ["Aruba CX Enterprise Switches", "Aruba Central Cloud AI", "ClearPass Network Access"],
        logo: "/assets/img/brands/c8.png",
        websiteUrl: "https://www.arubanetworks.com",
        country: "USA",
      },
      {
        id: "ruijie",
        name: "Ruijie Networks / Reyee",
        categorySlug: "enterprise-networking-routing",
        categoryName: "Enterprise Networking",
        tier: "Authorized Solution Partner",
        description:
          "Solusi switching enterprise dengan nilai investasi optimal, integrasi cloud gratis tanpa lisensi tahunan, dan switch PoE high-budget.",
        specialties: ["Enterprise Core Switches", "Reyee Cloud Managed Devices", "Smart PoE Power Delivery"],
        logo: "/assets/img/brands/c9.png",
        websiteUrl: "https://www.ruijienetworks.com",
        country: "China",
      },
      {
        id: "juniper",
        name: "Juniper Networks",
        categorySlug: "enterprise-networking-routing",
        categoryName: "Enterprise Networking",
        tier: "Gold Alliance Partner",
        description:
          "Infrastruktur jaringan bertenaga AI dengan Mist AI, EX Series Ethernet switches, QFX data center switches, dan router keamanan SRX.",
        specialties: ["Mist AI Operations", "EX Series Campus Switches", "SRX Secure Branch Routers"],
        logo: "/assets/img/brands/c10.png",
        websiteUrl: "https://www.juniper.net",
        country: "USA",
      },
      {
        id: "mikrotik",
        name: "MikroTik",
        categorySlug: "enterprise-networking-routing",
        categoryName: "Enterprise Networking",
        tier: "Certified System Integrator",
        description:
          "RouterOS carrier-grade edge routers CCR series, Cloud Core Router, dan sistem bandwidth management hemat biaya untuk multi-ISP load balancing.",
        specialties: ["CCR Multi-Core Routers", "BGP & Multi-WAN Failover", "Bandwidth Management QoS"],
        logo: "/assets/img/brands/c11.png",
        websiteUrl: "https://mikrotik.com",
        country: "Latvia",
      },
      {
        id: "allied-telesis",
        name: "Allied Telesis",
        categorySlug: "enterprise-networking-routing",
        categoryName: "Enterprise Networking",
        tier: "Authorized Solution Partner",
        description:
          "Switch industri tangguh dan solusi Autonomous Management Framework (AMF) untuk otomasi konfigurasi jaringan tanpa intervensi manual.",
        specialties: ["Industrial Rugged Switches", "Autonomous Management (AMF)", "Secure Layer 3 Core"],
        logo: "/assets/img/brands/z1.png",
        websiteUrl: "https://www.alliedtelesis.com",
        country: "Japan",
      },
    ],
    solutions: [
      {
        title: "Campus Core & Distribution Switching",
        desc: "Desain jaringan 3-tier (Core-Distribution-Access) atau Spine-Leaf dengan virtual switching stacking dan link aggregation LACP.",
        iconName: "Network",
      },
      {
        title: "SD-WAN & Multi-WAN Load Balancing",
        desc: "Koneksi terenkripsi antar-cabang dengan seleksi jalur otomatis berbasis performa latensi dan jitter aplikasi bisnis.",
        iconName: "Cpu",
      },
      {
        title: "Zero Trust Network Access & VLAN Segmentation",
        desc: "Pemisahan zona jaringan tamu, server database, CCTV, dan perangkat IoT guna memitigasi potensi pergerakan lateral ancaman siber.",
        iconName: "ShieldCheck",
      },
    ],
    keyHighlights: [
      "Sertifikasi tim teknis Cisco CCNA/CCNP, Aruba Certified, dan MTCRE",
      "Ketersediaan spare unit dan kontrak dukungan pemeliharaan SLA 4 jam",
      "Layanan audit konfigurasi jaringan, packet capture, dan analisis bottleneck",
      "Implementasi Network Management System (NMS) terpadu dengan alert real-time",
    ],
  },
  {
    slug: "data-center-power-cooling",
    alternateSlugs: ["data-center", "dc-power"],
    title: "Data Center Infrastructure, Power & Cooling",
    navLabel: "Data Center & Power",
    subtitle: "Mission-Critical Power, Precision Cooling & Server Racks",
    shortDesc:
      "Solusi modular data center, Uninterruptible Power Supply (UPS), Precision Air Conditioning (PAC), rak server, dan DCIM terpadu.",
    lead:
      "Memastikan ruang server dan data center beroperasi 24/7 tanpa henti dengan dukungan infrastruktur daya dan tata udara dari prinsipal global terpercaya.",
    overview: [
      "Kegagalan satu detik pada sistem daya atau pendingin ruang server dapat mengakibatkan kerugian finansial yang signifikan bagi bisnis enterprise.",
      "PT. Datatel Inter Nusa bermitra resmi dengan pemimpin solusi data center global seperti APC by Schneider Electric, Vertiv (Liebert), dan Eaton untuk merancang, membangun, dan menyuplai sistem kelistrikan terproteksi (UPS On-Line Double Conversion), Precision AC InRow, dan sistem monitoring lingkungan DCIM.",
    ],
    iconName: "Server",
    stats: [
      { value: "Tier II - III", label: "Kepatuhan Desain Standar TIA-942" },
      { value: "<1.4 PUE", label: "Efisiensi Energi Power Usage Effectiveness" },
      { value: "N+1 / 2N", label: "Redundansi Daya & Pendingin Presisi" },
      { value: "0 ms", label: "Transfer Time UPS Online Double Conversion" },
    ],
    partners: [
      {
        id: "apc-schneider",
        name: "APC by Schneider Electric",
        categorySlug: "data-center-power-cooling",
        categoryName: "Data Center & Power",
        tier: "Elite Data Center Partner",
        description:
          "Standar emas solusi ruang server dunia dengan jajaran modular Smart-UPS, Symmetra PX, InRow Cooling, rak NetShelter, dan platform EcoStruxure IT.",
        specialties: ["Smart-UPS On-Line Systems", "NetShelter SX Server Enclosures", "InRow Precision Cooling"],
        logo: "/assets/img/brands/z2.png",
        websiteUrl: "https://www.apc.com",
        country: "France / USA",
      },
      {
        id: "vertiv",
        name: "Vertiv (Liebert)",
        categorySlug: "data-center-power-cooling",
        categoryName: "Data Center & Power",
        tier: "Premier Certified Partner",
        description:
          "Inovator pendingin presisi Liebert CRV / PEX, sistem UPS industri Liebert ITA2, dan solusi manajemen daya terpadu untuk data center berdensitas tinggi.",
        specialties: ["Liebert Precision Cooling", "Industrial Online UPS", "Thermal Management"],
        logo: "/assets/img/brands/z3.png",
        websiteUrl: "https://www.vertiv.com",
        country: "USA",
      },
      {
        id: "eaton",
        name: "Eaton Power Quality",
        categorySlug: "data-center-power-cooling",
        categoryName: "Data Center & Power",
        tier: "Authorized Solution Partner",
        description:
          "Sistem proteksi daya andal dengan efisiensi energi terdepan, Intelligent Power Manager (IPM), dan Power Distribution Units (ePDU) terpantau.",
        specialties: ["Online 9PX/93E UPS Series", "Managed ePDU Systems", "Intelligent Power Management"],
        logo: "/assets/img/brands/z4.png",
        websiteUrl: "https://www.eaton.com",
        country: "Ireland / USA",
      },
      {
        id: "rittal",
        name: "Rittal",
        categorySlug: "data-center-power-cooling",
        categoryName: "Data Center & Power",
        tier: "Certified System Integrator",
        description:
          "Produsen rak server presisi tinggi asal Jerman dengan standar proteksi IP ekstra ketat, solusi containment lorong dingin/panas (cold/hot aisle).",
        specialties: ["TS IT High-End Racks", "Cold/Hot Aisle Containment", "Edge DC Shelters"],
        logo: "/assets/img/brands/z5.png",
        websiteUrl: "https://www.rittal.com",
        country: "Germany",
      },
      {
        id: "panduit-dc",
        name: "Panduit SmartZone DC Systems",
        categorySlug: "data-center-power-cooling",
        categoryName: "Data Center & Power",
        tier: "Tier-1 Principal Partner",
        description:
          "Solusi manajemen kabel vertikal berdensitas tinggi, sistem pemantauan lingkungan IoT SmartZone, dan overhead cable pathway system.",
        specialties: ["SmartZone DCIM Monitoring", "High Capacity Wire Trays", "Seismic Server Racks"],
        logo: "/assets/img/brands/z6.png",
        websiteUrl: "https://www.panduit.com",
        country: "USA",
      },
    ],
    solutions: [
      {
        title: "Modular UPS Power Backup System",
        desc: "Sistem UPS modular dengan baterai terkelola, otomatisasi bypass switch, dan kapasitas skalabel dari 3 kVA hingga 500 kVA.",
        iconName: "Server",
      },
      {
        title: "InRow Precision Cooling & Containment",
        desc: "Tata udara presisi yang diarahkan langsung ke beban panas server dengan sistem sekat lorong (Aisle Containment) untuk menghemat listrik.",
        iconName: "Cpu",
      },
      {
        title: "Environment Monitoring & Fire Suppression",
        desc: "Sensor suhu, kelembaban, kebocoran air, serta sistem pemadam api clean gas FM-200 / Novec 1230 yang aman untuk sirkuit elektronik.",
        iconName: "ShieldCheck",
      },
    ],
    keyHighlights: [
      "Engineer tersertifikasi Certified Data Center Professional (CDCP)",
      "Garansi resmi pabrikan untuk unit UPS, modul baterai, dan sistem pendingin",
      "Layanan preventive maintenance berkala baterai, kapasitor, dan filter AC",
      "Penyediaan sertifikasi kelayakan ruang server berstandar TIA-942",
    ],
  },
  {
    slug: "cctv-surveillance-security",
    alternateSlugs: ["cctv", "surveillance"],
    title: "Digital CCTV & Video Surveillance",
    navLabel: "Digital CCTV & Surveillance",
    subtitle: "High-Definition IP Cameras, AI Analytics & Enterprise VMS",
    shortDesc:
      "Sistem pengawasan kamera IP resolusi ultra-tinggi, Video Management Software (VMS), analitik AI cerdas, dan NVR enterprise.",
    lead:
      "Menghadirkan pengawasan visual tanpa celah dengan teknologi pemrosesan kecerdasan buatan dari prinsipal kamera keamanan nomor satu dunia.",
    overview: [
      "Kamera keamanan saat ini bukan sekadar alat rekam pasif, melainkan sensor cerdas yang mampu mendeteksi pelanggaran perimeter, mengenali nomor plat kendaraan (ANPR), serta menganalisis pola kerumunan secara real-time.",
      "PT. Datatel Inter Nusa bekerja sama dengan prinsipal CCTV nomor satu dunia seperti Hikvision, Dahua Technology, Axis Communications, dan Honeywell untuk membangun arsitektur pengawasan terpadu dari ratusan hingga ribuan titik kamera.",
    ],
    iconName: "Video",
    stats: [
      { value: "4K UHD", label: "Resolusi Visual Ultra High Definition" },
      { value: "ColorVu / Wiz", label: "Penglihatan Berwarna Penuh 24 Jam" },
      { value: "AI AcuSense", label: "Filter Alarm Palsu Berbasis Manusia/Kendaraan" },
      { value: "H.265+", label: "Efisiensi Kompresi Bandwidth & Storage Hingga 75%" },
    ],
    partners: [
      {
        id: "hikvision",
        name: "Hikvision",
        categorySlug: "cctv-surveillance-security",
        categoryName: "Digital CCTV & Surveillance",
        tier: "Tier-1 Principal Partner",
        description:
          "Produsen sistem pengawasan video terbesar di dunia dengan lini kamera DeepinView AI, DarkFighter, ColorVu, Thermal, dan platform HikCentral Enterprise.",
        specialties: ["HikCentral VMS Management", "DeepinView AI Detection", "ColorVu Low-Light Optics"],
        logo: "/assets/img/brands/z7.png",
        websiteUrl: "https://www.hikvision.com",
        country: "China",
      },
      {
        id: "dahua",
        name: "Dahua Technology",
        categorySlug: "cctv-surveillance-security",
        categoryName: "Digital CCTV & Surveillance",
        tier: "Premier Certified Partner",
        description:
          "Inovator solusi IoT video cerdas dengan teknologi WizMind, kamera panoramic multi-sensor, AI perimeter protection, dan NVR enterprise seri 5/6.",
        specialties: ["WizMind AI Analytics", "Perimeter Defense Alarms", "Multi-Sensor 360 Panoramic"],
        logo: "/assets/img/brands/z8.png",
        websiteUrl: "https://www.dahuasecurity.com",
        country: "China",
      },
      {
        id: "axis",
        name: "Axis Communications",
        categorySlug: "cctv-surveillance-security",
        categoryName: "Digital CCTV & Surveillance",
        tier: "Gold Alliance Partner",
        description:
          "Pelopor kamera jaringan IP premium asal Swedia dengan ketahanan fisik luar biasa, teknologi Zipstream efisien, dan radar sensor terintegrasi.",
        specialties: ["High-End Network Cameras", "Axis Zipstream Compression", "Radar Motion Detectors"],
        logo: "/assets/img/brands/c1.png",
        websiteUrl: "https://www.axis.com",
        country: "Sweden",
      },
      {
        id: "honeywell-security",
        name: "Honeywell Commercial Security",
        categorySlug: "cctv-surveillance-security",
        categoryName: "Digital CCTV & Surveillance",
        tier: "Authorized Solution Partner",
        description:
          "Solusi pengawasan kelas enterprise dengan MAXPRO VMS, kamera industri tahan ledakan (explosion proof), dan integrasi kontrol gedung terpusat.",
        specialties: ["MAXPRO Enterprise VMS", "Explosion Proof Enclosures", "High-Security Banking CCTV"],
        logo: "/assets/img/brands/c2.png",
        websiteUrl: "https://www.honeywell.com",
        country: "USA",
      },
      {
        id: "uniview",
        name: "Uniview (UNV)",
        categorySlug: "cctv-surveillance-security",
        categoryName: "Digital CCTV & Surveillance",
        tier: "Authorized Solution Partner",
        description:
          "Pelopor IP video surveillance dengan teknologi kompresi Ultra 265, sensor LightHunter, dan solusi display video wall controller.",
        specialties: ["Ultra 265 Video Compression", "LightHunter Low-light Tech", "UNV Enterprise Storage"],
        logo: "/assets/img/brands/c3.png",
        websiteUrl: "https://www.uniview.com",
        country: "China",
      },
    ],
    solutions: [
      {
        title: "Perimeter & Intrusion AI Detection",
        desc: "Garis batas virtual (tripwire) cerdas yang membedakan manusia dan kendaraan dari hewan atau daun bergoyang guna menghilangkan false alarm.",
        iconName: "ShieldCheck",
      },
      {
        title: "Automated Number Plate Recognition (ANPR)",
        desc: "Kamera khusus pembaca plat nomor kendaraan otomatis untuk gerbang masuk pabrik, gedung kantor, dan sistem parkir otomatis.",
        iconName: "Video",
      },
      {
        title: "Centralized Enterprise VMS & Video Wall",
        desc: "Manajemen ribuan stream kamera dalam satu dashboard pusat komando (Command Center) dengan matrix video wall beresolusi tinggi.",
        iconName: "Cpu",
      },
    ],
    keyHighlights: [
      "Dukungan storage SAN/NAS skala petabyte dengan RAID 5/6 toleran kegagalan",
      "Kamera berstandar outdoor IK10 vandal-proof dan IP67 weather-proof",
      "Koneksi terenkripsi HTTPS dan otentikasi 802.1X pada seluruh stream kamera",
      "Pelatihan berkala bagi tim security internal klien untuk operasional VMS",
    ],
  },
  {
    slug: "access-control-physical-security",
    alternateSlugs: ["access-control", "biometrics"],
    title: "Access Control & Physical Security Systems",
    navLabel: "Access Control & Security",
    subtitle: "Biometrics, Smart Card Readers, Turnstiles & Interlocks",
    shortDesc:
      "Sistem kontrol akses pintu biometrik, pembaca kartu RFID/smart card, tripod turnstile, dan integrasi presensi waktu kehadiran.",
    lead:
      "Mencegah akses tak berwenang ke area terbatas dengan sistem verifikasi identitas fisik termutakhir dari prinsipal biometrik global.",
    overview: [
      "Keamanan fisik adalah benteng pertama dalam melindungi data center, ruang server, laboratorium, dan lantai eksekutif perusahaan dari akses ilegal.",
      "PT. Datatel Inter Nusa mengintegrasikan sistem pembaca biometrik pengenalan wajah anti-spoofing, sidik jari optik cepat, kredensial kartu pintar terenkripsi (Mifare DESFire / HID iCLASS SE), serta gerbang turnstile otomatis bekerja sama dengan prinsipal dunia seperti Suprema, HID Global, dan Bosch Security.",
    ],
    iconName: "KeyRound",
    stats: [
      { value: "<0.5 dtk", label: "Kecepatan Pengenalan Wajah & Biometrik" },
      { value: "AES-128", label: "Enkripsi Kredensial Kartu Pintar & OSDP" },
      { value: "100K+", label: "Kapasitas Pengguna & Log Riwayat Pintu" },
      { value: "Anti-Passback", label: "Fitur Proteksi Duplikasi Akses & Interlock" },
    ],
    partners: [
      {
        id: "suprema",
        name: "Suprema",
        categorySlug: "access-control-physical-security",
        categoryName: "Access Control & Security",
        tier: "Tier-1 Principal Partner",
        description:
          "Pemimpin teknologi biometrik premium asal Korea Selatan dengan produk FaceStation F2, BioStation 3, platform BioStar 2, dan akses mobile NFC/BLE.",
        specialties: ["FaceStation F2 AI Biometrics", "BioStar 2 Enterprise Platform", "Mobile Access Credentials"],
        logo: "/assets/img/brands/z7.png",
        websiteUrl: "https://www.supremainc.com",
        country: "South Korea",
      },
      {
        id: "hid-global",
        name: "HID Global",
        categorySlug: "access-control-physical-security",
        categoryName: "Access Control & Security",
        tier: "Premier Certified Partner",
        description:
          "Standar keamanan identitas tertinggi dunia dengan pembaca kartu iCLASS SE, kartu Seos terenkripsi kuat, dan pengontrol akses OSDP.",
        specialties: ["iCLASS SE & Seos Smart Cards", "HID Mobile Access Solutions", "OSDP Secure Controllers"],
        logo: "/assets/img/brands/z8.png",
        websiteUrl: "https://www.hidglobal.com",
        country: "USA",
      },
      {
        id: "bosch-security",
        name: "Bosch Security Systems",
        categorySlug: "access-control-physical-security",
        categoryName: "Access Control & Security",
        tier: "Gold Alliance Partner",
        description:
          "Sistem kontrol akses gedung terintegrasi dengan Building Integration System (BIS), Access Modular Controller (AMC), dan integrasi alarm kebakaran.",
        specialties: ["AMC Access Modular Controllers", "Building Integration System", "Integrated Fire Interlocking"],
        logo: "/assets/img/brands/c4.png",
        websiteUrl: "https://www.boschsecurity.com",
        country: "Germany",
      },
      {
        id: "zkteco",
        name: "ZKTeco",
        categorySlug: "access-control-physical-security",
        categoryName: "Access Control & Security",
        tier: "Authorized Solution Partner",
        description:
          "Produsen turnstile, flap barrier, dan terminal biometrik multi-modal SpeedFace dengan harga kompetitif untuk absensi massal karyawan pabrik.",
        specialties: ["SpeedFace Biometric Terminals", "Flap Barriers & Turnstiles", "ZKBio CVSecurity Platform"],
        logo: "/assets/img/brands/c5.png",
        websiteUrl: "https://www.zkteco.com",
        country: "China",
      },
      {
        id: "honeywell-access",
        name: "Honeywell Commercial Access",
        categorySlug: "access-control-physical-security",
        categoryName: "Access Control & Security",
        tier: "Authorized Solution Partner",
        description:
          "Platform manajemen keamanan Pro-Watch enterprise untuk gedung bertingkat tinggi dengan kontrol lift (lift destination dispatch).",
        specialties: ["Pro-Watch Security Management", "Elevator Access Integration", "Emergency Door Release"],
        logo: "/assets/img/brands/c6.png",
        websiteUrl: "https://www.honeywell.com",
        country: "USA",
      },
    ],
    solutions: [
      {
        title: "Data Center Airlock & Mantrap Interlocking",
        desc: "Sistem interlocking dua pintu di mana pintu kedua tidak dapat dibuka sebelum pintu pertama tertutup rapat dan terverifikasi otentikasinya.",
        iconName: "KeyRound",
      },
      {
        title: "Touchless AI Facial Recognition & Mobile Key",
        desc: "Akses tanpa sentuh dengan kamera inframerah 3D yang kebal foto/video palsu, serta otentikasi smartphone via Bluetooth Low Energy (BLE).",
        iconName: "ShieldCheck",
      },
      {
        title: "Pedestrian Speed Gate & Turnstile Integration",
        desc: "Pemasangan tripod turnstile, swing barrier, atau flap barrier di lobby gedung perkantoran untuk membatasi akses pengunjung.",
        iconName: "Cpu",
      },
    ],
    keyHighlights: [
      "Integrasi langsung dengan sistem Fire Alarm untuk auto-release pintu saat darurat",
      "Laporan kehadiran dan log audit pintu terpusat yang dapat diakses tim HR/Security",
      "Kredensial anti-kloning berstandar internasional Mifare DESFire EV2/EV3",
      "Pilihan catu daya UPS backup agar pintu tetap terkunci saat listrik padam",
    ],
  },
  {
    slug: "wireless-unified-communications",
    alternateSlugs: ["wireless", "telecommunications"],
    title: "Wireless Infrastructure & Unified Communications",
    navLabel: "Wireless & Unified Comm",
    subtitle: "High-Density Wi-Fi 6/7, Long-Range Microwave & IP Telephony",
    shortDesc:
      "Solusi Wi-Fi 6/7 berkapasitas tinggi, point-to-point wireless backhaul jarak jauh, VoIP PBX, dan sistem konferensi audio-video.",
    lead:
      "Menghadirkan konektivitas nirkabel berkecepatan gigabit di area pabrik, gudang, kampus, dan kantor pusat dengan jangkauan stabil dan tanpa blind spot.",
    overview: [
      "Di era mobilitas kerja tinggi dan adopsi perangkat handheld barcode scanner di pergudangan modern, koneksi nirkabel tanpa roaming delay menjadi syarat mutlak kelancaran bisnis.",
      "PT. Datatel Inter Nusa bekerja sama dengan inovator nirkabel dunia seperti Cambium Networks, Ubiquiti UniFi, Yealink, dan Grandstream untuk mendesain cakupan sinyal Wi-Fi berdensitas tinggi, link radio microwave Point-to-Point (PTP) antar-gedung tanpa kabel fisik, serta sistem telepon IP PBX terpadu.",
    ],
    iconName: "Radio",
    stats: [
      { value: "Wi-Fi 6 / 7", label: "Standar Nirkabel Generasi Terbaru" },
      { value: "Up to 20 Km", label: "Jarak Point-to-Point Wireless Backhaul" },
      { value: "<10 ms", label: "Fast BSS Roaming 802.11r/k/v" },
      { value: "HD Voice", label: "Kualitas Komunikasi Suara & Video Telephony" },
    ],
    partners: [
      {
        id: "cambium",
        name: "Cambium Networks",
        categorySlug: "wireless-unified-communications",
        categoryName: "Wireless & Unified Comm",
        tier: "Tier-1 Principal Partner",
        description:
          "Spesialis radio nirkabel broadband point-to-point (PTP 670/820), multi-point (PMP), dan Wi-Fi enterprise cnPilot dengan ketahanan cuaca ekstrem.",
        specialties: ["PTP Long-Distance Wireless", "cnWave 60GHz Multi-Gigabit", "ePMP Outdoor Backhaul"],
        logo: "/assets/img/brands/c7.png",
        websiteUrl: "https://www.cambiumnetworks.com",
        country: "USA",
      },
      {
        id: "ubiquiti",
        name: "Ubiquiti Networks (UniFi)",
        categorySlug: "wireless-unified-communications",
        categoryName: "Wireless & Unified Comm",
        tier: "Premier Certified Partner",
        description:
          "Platform jaringan nirkabel terpopuler dengan jajaran Access Point UniFi 6/7 Enterprise, manajemen UniFi Cloud Gateway, dan radio jarak jauh airMAX.",
        specialties: ["UniFi 6/7 Enterprise APs", "UniFi Network Controller", "airMAX Point-to-Point Links"],
        logo: "/assets/img/brands/c8.png",
        websiteUrl: "https://www.ui.com",
        country: "USA",
      },
      {
        id: "yealink",
        name: "Yealink",
        categorySlug: "wireless-unified-communications",
        categoryName: "Wireless & Unified Comm",
        tier: "Certified System Integrator",
        description:
          "Penyedia telepon IP korporat nomor satu dunia, perangkat konferensi Microsoft Teams / Zoom Rooms, dan headset wireless enterprise.",
        specialties: ["Enterprise IP Desk Phones", "Video Conferencing Bars", "Microsoft Teams Certified Systems"],
        logo: "/assets/img/brands/c9.png",
        websiteUrl: "https://www.yealink.com",
        country: "China",
      },
      {
        id: "grandstream",
        name: "Grandstream Networks",
        categorySlug: "wireless-unified-communications",
        categoryName: "Wireless & Unified Comm",
        tier: "Authorized Solution Partner",
        description:
          "Produsen IP PBX terpadu UCM series tanpa biaya lisensi per-ekstensi, IP intercom, gateway VoIP FXS/FXO, dan sistem Wi-Fi GWN.",
        specialties: ["UCM IP PBX Appliance", "VoIP FXS/FXO Gateways", "GWN Enterprise Wi-Fi"],
        logo: "/assets/img/brands/c10.png",
        websiteUrl: "https://www.grandstream.com",
        country: "USA",
      },
    ],
    solutions: [
      {
        title: "Predictive RF Heatmap & Wi-Fi Survey",
        desc: "Survei simulasi frekuensi radio (Ekahau Site Survey) untuk menentukan posisi access point optimum tanpa interferensi dan zero dead-zone.",
        iconName: "Radio",
      },
      {
        title: "Point-to-Point Wireless Backhaul",
        desc: "Menghubungkan jaringan dua gedung atau pabrik yang terpisah hingga 10-20 kilometer menggunakan radio frekuensi microwave tanpa tarik kabel.",
        iconName: "Network",
      },
      {
        title: "Enterprise IP PBX & Telephony Migration",
        desc: "Modernisasi sistem PABX analog lama ke VoIP IP PBX dengan integrasi ekstensi smartphone, IVR auto-attendant, dan rekaman percakapan.",
        iconName: "Cpu",
      },
    ],
    keyHighlights: [
      "Dukungan roaming mulus untuk mobile scanner di gudang logistik dan pabrik",
      "Pemisahan SSID tamu (Guest Portal dengan voucher/SMS OTP) dan SSID internal",
      "Perangkat tahan cuaca IP67 untuk instalasi luar ruangan pada tower dan rooftop",
      "Penghematan biaya telepon antar-cabang dengan SIP trunking privat",
    ],
  },
]

// Helper queries
export function getAllPartnerCategories(): PartnerCategory[] {
  return partnerCategories
}

export function getPartnerCategory(slug: string): PartnerCategory | undefined {
  return partnerCategories.find(
    (c) => c.slug === slug || (c.alternateSlugs && c.alternateSlugs.includes(slug))
  )
}

export function getAllPartners(): TechnologyPartner[] {
  return partnerCategories.flatMap((c) => c.partners)
}

export function getTotalPartnerCount(): number {
  return getAllPartners().length
}
