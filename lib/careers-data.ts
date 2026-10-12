export interface JobOpening {
  id: string
  title: string
  jobType: string
  location: string
  category: string
  experience: string
  description: string
  requirements: string[]
  responsibilities: string[]
}

export const jobOpenings: JobOpening[] = [
  {
    id: "network-systems-engineer",
    title: "Network Systems Engineer",
    jobType: "Full Time",
    location: "Jakarta, Indonesia",
    category: "Network & System Integration",
    experience: "2 - 4 Tahun",
    description:
      "Bertanggung jawab atas perencanaan arsitektur, konfigurasi, integrasi, dan troubleshooting perangkat aktif jaringan enterprise (Core Switch, Router, Firewall, SD-WAN, dan Wireless Controller).",
    requirements: [
      "Pendidikan minimal D3 / S1 Teknik Informatika, Telekomunikasi, atau Sistem Komputer.",
      "Memiliki sertifikasi CCNA / CCNP atau setara merupakan nilai tambah utama.",
      "Menguasai protokol routing (OSPF, BGP), VLAN trunking, Spanning Tree, ACL, dan VPN IPSec.",
      "Pengalaman implementasi perangkat Cisco Catalyst, HPE Aruba, atau Ruijie minimal 2 tahun.",
      "Mampu menganalisis paket data (Wireshark) dan menyelesaikan isu degradasi jaringan.",
    ],
    responsibilities: [
      "Melakukan desain topologi jaringan dan konfigurasi switch L2/L3, router, dan firewall.",
      "Melakukan uji commissioning dan migrasi sistem jaringan aktif tanpa downtime fatal.",
      "Menyusun dokumentasi teknis as-built drawing, konfigurasi backup, dan laporan acceptance.",
      "Memberikan dukungan eskalasi teknis tingkat 2/3 untuk pemegang kontrak SLA pemeliharaan.",
    ],
  },
  {
    id: "structured-cabling-fiber-specialist",
    title: "Structured Cabling & Fiber Specialist",
    jobType: "Full Time",
    location: "Jakarta, Indonesia",
    category: "Structured Cabling System",
    experience: "1 - 3 Tahun",
    description:
      "Melakukan instalasi jalur kabel tembaga (Cat.6/6A), terminasi modular patch panel, penarikan backbone kabel serat optik (fusion splicing), dan pengujian sertifikasi Fluke Networks Versiv.",
    requirements: [
      "Pendidikan minimal SMK Teknik Komputer Jaringan (TKJ), Elektro, atau D3 Teknik.",
      "Memahami standar pengkabelan terstruktur ANSI/TIA/EIA-568-D dan ISO/IEC 11801.",
      "Mahir mengoperasikan alat fusion splicer fiber optik, cleaver, dan visual fault locator (VFL).",
      "Berpengalaman menggunakan Fluke DSX CableAnalyzer dan membaca hasil laporan pengujian.",
      "Disiplin terhadap standar Keselamatan dan Kesehatan Kerja (K3) di lokasi proyek.",
    ],
    responsibilities: [
      "Instalasi horizontal cable containment (tray, wiremesh, conduit) dan vertical optical riser.",
      "Terminasi patch panel Cat.6A dan closure fiber optik single-mode / multi-mode (OM3/OM4).",
      "Melakukan penomoran label terstandarisasi pada seluruh outlet dan rack patch cord.",
      "Mendokumentasikan hasil uji redaman Fluke untuk pendaftaran garansi resmi prinsipal.",
    ],
  },
  {
    id: "data-center-power-engineer",
    title: "Data Center & Power Infrastructure",
    jobType: "Full Time",
    location: "Jakarta, Indonesia",
    category: "Data Center Design & Build",
    experience: "2 - 5 Tahun",
    description:
      "Merancang, mengawasi instalasi, dan melakukan pemeliharaan infrastruktur kelistrikan terproteksi ruang server (UPS Online Double Conversion, Panel PDU) dan pendingin presisi InRow Cooling.",
    requirements: [
      "S1 Teknik Elektro (Arus Kuat / Lemah), Tenaga Listrik, atau Fisika Teknik.",
      "Pengalaman praktis pada sistem UPS enterprise (Schneider APC, Vertiv, Eaton) minimal 2 tahun.",
      "Memahami prinsip kerja Precision Air Conditioning (PAC/InRow) dan tata udara lorong tertutup.",
      "Sertifikasi CDCP (Certified Data Center Professional) atau kepatuhan TIA-942 menjadi nilai tambah.",
      "Mampu membaca gambar single-line diagram (SLD) dan tata letak rak server.",
    ],
    responsibilities: [
      "Supervisi pemasangan sistem distribusi daya ruang server, modul baterai, dan grounding.",
      "Melakukan uji beban dummy (load bank testing) pada sistem UPS dan panel ATS/AMF genset.",
      "Melaksanakan jadwal preventive maintenance rutin untuk filter AC presisi dan kesehatan baterai.",
      "Melakukan audit efisiensi energi (PUE) dan pemantauan sistem sensor lingkungan (DCIM).",
    ],
  },
  {
    id: "digital-cctv-access-control",
    title: "Digital CCTV & Access Control",
    jobType: "Full Time",
    location: "Jakarta, Indonesia",
    category: "Security & Surveillance",
    experience: "1 - 3 Tahun",
    description:
      "Instalasi, konfigurasi jaringan IP camera pengawasan, Video Management Software (VMS), serta sistem keamanan fisik biometrik pintu, turnstile, dan interlock ruang steril.",
    requirements: [
      "Minimal D3 / S1 Teknik Elektro, Komputer, atau Informatika.",
      "Berpengalaman dalam konfigurasi IP CCTV enterprise (Hikvision, Dahua, Axis Communications).",
      "Memahami sistem kontrol akses biometrik (Suprema, HID Global, ZKTeco) dan kunci magnetik/dropbolt.",
      "Memahami dasar konfigurasi switch PoE, IP subnetting, dan storage NVR/SAN RAID.",
      "Mampu berkomunikasi dengan baik saat memberikan pelatihan sistem ke security tim klien.",
    ],
    responsibilities: [
      "Konfigurasi sudut pandang kamera, penyesuaian analitik AI (ANPR, perimeter, tripwire).",
      "Integrasi controller akses pintu dengan sensor kebakaran (fire alarm door release otomatis).",
      "Setup software manajemen terpusat (HikCentral / BioStar 2) dan pendaftaran user biometrik.",
      "Troubleshooting koneksi kabel jaringan dan catu daya perangkat keamanan lapangan.",
    ],
  },
  {
    id: "business-development-b2b",
    title: "Business Development B2B",
    jobType: "Full Time",
    location: "Jakarta, Indonesia",
    category: "Business Development",
    experience: "2 - 4 Tahun",
    description:
      "Mengembangkan kemitraan korporasi B2B, mengelola hubungan klien lama, dan memimpin penjualan solusi terpadu pengkabelan, data center, dan perangkat aktif jaringan IT.",
    requirements: [
      "Pendidikan minimal S1 semua jurusan (diutamakan Teknik Informatika, Manajemen, atau Komunikasi).",
      "Pengalaman sales B2B minimal 2 tahun di perusahaan IT System Integrator atau IT Distributor.",
      "Memiliki portofolio relasi aktif di sektor BUMN, perbankan, manufaktur, atau data center.",
      "Memahami gambaran umum solusi infrastruktur jaringan dan hardware enterprise.",
      "Kemampuan negosiasi bisnis, presentasi solusi, dan pencapaian target penjualan yang terbukti.",
    ],
    responsibilities: [
      "Mengidentifikasi peluang kebutuhan proyek infrastruktur IT baru pada akun korporat target.",
      "Bekerja sama dengan tim presales engineer untuk menyusun proposal teknis dan BoQ penawaran.",
      "Mengikuti proses tender pengadaan dan melakukan follow-up intensif hingga terbit PO resmi.",
      "Menjaga kepuasan klien dan mengidentifikasi peluang recurring contract pemeliharaan berkala.",
    ],
  },
  {
    id: "it-network-trainee",
    title: "IT Network & Systems Trainee",
    jobType: "Full Time",
    location: "Jakarta, Indonesia",
    category: "Tech and Operations",
    experience: "Fresh Graduate / Intern",
    description:
      "Program akselerasi teknisi muda untuk belajar langsung praktek instalasi jaringan enterprise, rack server management, pengkabelan terstruktur, dan konfigurasi switch.",
    requirements: [
      "Mahasiswa tingkat akhir atau baru lulus D3/S1 Teknik Komputer, Telekomunikasi, atau Elektro.",
      "Memiliki minat yang sangat tinggi di bidang Computer Network & System Integration.",
      "Memahami konsep dasar OSI Layer, IP Address, kabel UTP, dan fungsi switch/router.",
      "Cekatan, memiliki kemauan belajar mandiri, dan berani bekerja di lingkungan proyek.",
      "Bersedia magang minimal 3 - 6 bulan dengan potensi pengangkatan karyawan tetap.",
    ],
    responsibilities: [
      "Mendampingi senior engineer dalam kegiatan site survey dan perakitan rak server di lokasi klien.",
      "Membantu proses terminasi kabel, penataan kabel (cable management), dan labeling port.",
      "Mempelajari pengoperasian alat ukur Fluke Networks dan konfigurasi switch dasar.",
      "Membantu pencatatan log data pengujian dan pembuatan draf laporan serah terima proyek.",
    ],
  },
]
