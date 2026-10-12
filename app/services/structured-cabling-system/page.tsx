import type { Metadata } from "next"
import {
  Cable,
  ShieldCheck,
  Layers,
  FileCheck,
  Server,
  Zap,
  Clock,
  Network,
  Activity,
  FileText,
  Cpu,
  Boxes,
} from "lucide-react"
import { ServicePage, type ServicePageData } from "@/components/sandbox/service-page"

export const metadata: Metadata = {
  title: "Structured Cabling System Certified | PT. Datatel Inter Nusa",
  description:
    "A structured cabling system provides a universal platform upon which an overall information system strategy is built by PT. Datatel Inter Nusa.",
}

const data: ServicePageData = {
  title: "Structured Cabling Systems Certified",
  description:
    "A structured cabling system provides a universal platform upon which an overall information system's strategy is built.",
  overview: {
    eyebrow: "Universal Cabling Infrastructure",
    title: "Universal Structured Connectivity for Voice, Data & Multimedia",
    lead: "A structured cabling system provides a universal platform upon which an overall information system's strategy is built. With a flexible cabling infrastructure, a structured cabling system can support multiple voice, data, video and multimedia systems regardless of their manufacturer.",
    paragraphs: [
      "A well-designed cabling plant may include several independent cabling solutions of different media types, installed at each workstation to support multiple system performance requirements.",
    ],
    note: {
      title: "Certified Standards Compliance",
      text: (
        <>
          <strong className="text-sb-navy">Datatel Inter Nusa</strong>, experiences and expertise in successfully
          delivering Structured Cabling infrastructure projects. Our Standard Installation comply with ANSI/TIA/EIA 568-B,
          BS EN 50173-1:2011 &amp; IEC 60794, etc.
        </>
      ),
    },
  },
  highlights: {
    title: "Compliant Standards",
    icon: ShieldCheck,
    items: [
      { title: "ANSI/TIA/EIA 568-B", desc: "Commercial building telecommunications cabling standard.", icon: FileCheck },
      { title: "BS EN 50173-1:2011", desc: "Information technology generic cabling systems standard.", icon: FileCheck },
      { title: "IEC 60794", desc: "International optical fibre cable specifications.", icon: FileCheck },
    ],
    footnote: (
      <>
        <strong className="text-sb-navy">Full Support Maintenance 24 x 7</strong> for every installation.
      </>
    ),
  },
  sections: [
    {
      eyebrow: "Scope of Deliverables",
      title: "The Solutions Provided Include",
      description: "Comprehensive cabling engineering from pathway design to certified instrument testing.",
      items: [
        { title: "Structured Cabling Network Design", desc: "Topology planning to support multi-vendor voice, data, video, and multimedia.", icon: Network },
        { title: "Cat 5e / Cat.6 / Cat.6A Cabling Install", desc: "Certified twisted pair copper termination for gigabit and 10G throughput.", icon: Cable },
        { title: "Fiber Optic OM2/OM3/SM/MM", desc: "Precision splicing and high-bandwidth optical backbone distribution.", icon: Activity },
        { title: "UTP / FO Testing & Certification", desc: "Full testing and certification guaranteeing manufacturer-backed warranties.", icon: FileCheck },
        { title: "Full SCS Documentation", desc: "As-built schematics, port labeling, cable maps, and test reports.", icon: FileText },
        { title: "Overhead and Under Floor", desc: "Engineered pathway routing — overhead trays and under-floor conduits.", icon: Layers },
        { title: "Communications Network Cabinet", desc: "19-inch racks and wall-mount enclosures with organized patch management.", icon: Server },
        { title: "Electronic Cabling System", desc: "Low-voltage cabling for supporting electronic and building systems.", icon: Cpu },
        { title: "General Power & UPS Power", desc: "Dedicated clean power and UPS feeder connections for uninterrupted runtime.", icon: Zap },
        { title: "Cable Tray & Cabinet Solution", desc: "Basket trays, ladder racks, and cabinet solutions for tidy installations.", icon: Boxes },
        { title: "Full Support Maintenance 24 x 7", desc: "Round-the-clock maintenance and emergency response for critical links.", icon: Clock },
      ],
    },
  ],
  cta: {
    title: "Need Certified Structured Cabling?",
    description: "Connect with our cabling engineers for site audits, pathway design, and certification testing.",
  },
}

export default function StructuredCablingSystemPage() {
  return <ServicePage data={data} />
}
