import type { Metadata } from "next"
import {
  Video,
  Eye,
  ShieldCheck,
  Server,
  Building2,
  Car,
  Factory,
  Radio,
  HardDrive,
  Users,
  Truck,
} from "lucide-react"
import { ServicePage, type ServicePageData } from "@/components/sandbox/service-page"

export const metadata: Metadata = {
  title: "Digital CCTV | PT. Datatel Inter Nusa",
  description:
    "We supply and install traditional CCTV systems and CCTV over IP for commercial, industrial, and domestic applications by PT. Datatel Inter Nusa.",
}

const data: ServicePageData = {
  title: "Digital CCTV",
  description:
    "We supply and install traditional CCTV systems and also CCTV over IP (Computer networks), internally and externally.",
  overview: {
    eyebrow: "Surveillance & Optical Security",
    title: "High-Resolution Digital Video Surveillance",
    lead: "We supply and install traditional CCTV systems and also CCTV over IP (Computer networks), they can be located internally and externally.",
    paragraphs: [
      "We supply digital technology which provides better images at a reduced cost, making the systems more affordable for your commercial and domestic purposes.",
    ],
  },
  highlights: {
    title: "Our CCTV Services Include",
    icon: Video,
    checklist: [
      "Traditional and IP CCTV systems",
      "Advice on design, installation and maintenance of the system",
      "Commercial and domestic systems",
      "Door access control and visitor management",
      "Remote view systems",
      "Take on existing systems",
      "Finance options available",
    ],
  },
  sections: [
    {
      eyebrow: "Services & Solutions",
      title: "Complete Digital Surveillance Solutions",
      description: "Reliable IP security hardware and intelligent network storage designed to enterprise standards.",
      items: [
        { title: "Traditional & IP CCTV Systems", desc: "Analog HD and CCTV over IP (computer networks) for internal and external locations.", icon: Video },
        { title: "Design, Installation & Maintenance", desc: "Camera position planning, field-of-view calculation, and routine preventive servicing.", icon: ShieldCheck },
        { title: "Commercial & Domestic Systems", desc: "Scalable surveillance for offices, warehouses, retail chains, and residential premises.", icon: Building2 },
        { title: "Door Access & Visitor Management", desc: "Video verification integrated with entry barriers, turnstiles, and reception desks.", icon: Users },
        { title: "Remote View Systems", desc: "Secure mobile and web streams for real-time remote monitoring from anywhere.", icon: Eye },
        { title: "Take On Existing Systems", desc: "Audit, repair, and migrate legacy cameras into centralized digital recorders.", icon: HardDrive },
      ],
    },
    {
      eyebrow: "Applications",
      title: "Where CCTV Systems Can Be Used",
      description: "CCTV systems can be used in the following applications:",
      columns: 4,
      items: [
        { title: "Industrial", desc: "Protecting production lines, machinery, and storage yards.", icon: Factory },
        { title: "Commercial", desc: "Surveillance for offices, retail, banks, and hospitality.", icon: Building2 },
        { title: "Public Area Surveillance", desc: "Crowd overview for public spaces, lobbies, and facilities.", icon: Users },
        { title: "Remote Unmanned Locations", desc: "Surveillance for pipelines, towers, and substations.", icon: Radio },
        { title: "Transportation", desc: "Monitoring terminals, depots, and logistics areas.", icon: Truck },
        { title: "Automatic Number Plate Recognition", desc: "Automated plate scanning for gates and parking.", icon: Car },
        { title: "Production & Plant Monitoring", desc: "Continuous visual monitoring of manufacturing floors.", icon: Server },
        { title: "Site Health & Safety", desc: "HSE compliance verification and incident recording.", icon: ShieldCheck },
      ],
    },
  ],
  cta: {
    title: "Looking for Professional CCTV Installation?",
    description: "Reach out to our engineers to discuss site surveys, camera coverage, storage estimation, and finance options.",
  },
}

export default function DigitalCctvPage() {
  return <ServicePage data={data} />
}
