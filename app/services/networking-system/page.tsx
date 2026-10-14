import type { Metadata } from "next"
import {
  ShieldCheck,
  Activity,
  Layers,
  Cpu,
  Lock,
  Network,
  Wrench,
  Search,
  FileText,
  RefreshCw,
  HardDrive,
  Eye,
  Server,
} from "lucide-react"
import { ServicePage, type ServicePageData } from "@/components/sandbox/service-page"

export const metadata: Metadata = {
  title: "Networking System | PT. Datatel Inter Nusa",
  description:
    "Total IT consulting & implementation services designed to Simplify your IT infrastructure/System with your business objective by PT. Datatel Inter Nusa.",
}

const data: ServicePageData = {
  title: "Networking System",
  heroImage: "/assets/img/photos/networking-system.png",
  description:
    "Total IT consulting & implementation services designed to Simplify your IT infrastructure/System with your business objective.",
  overview: {
    eyebrow: "Core IT Infrastructure",
    title: "High-Resilient Architecture for Enterprise Computing & Virtualization",
    lead: "The System network must provide a highly resilient structure to enable scalable, high-performance server interconnection, as well as the virtualization of computing, storage, and application resources.",
    paragraphs: [
      "A properly planned network protects application and data integrity, optimizes application availability and performance, and provides adaptability to business priorities.",
    ],
    note: {
      title: "Total IT Consulting & Implementation",
      text: (
        <>
          <strong className="text-sb-navy">PT. Datatel Inter Nusa</strong> have the experiences in design and concept a
          Total IT consulting &amp; implementation services designed to Simplify your IT infrastructure/System with your
          business objective.
        </>
      ),
    },
  },
  highlights: {
    title: "Network Characteristics",
    icon: Server,
    items: [
      { title: "Connectivity", desc: "Seamless, high-speed interconnection for servers, computing, and branch networks.", icon: Network },
      { title: "Performance", desc: "Optimized application throughput with low latency and prioritized mission-critical data.", icon: Activity },
      { title: "Security", desc: "Robust defense against unauthorized access, network anomalies, and cyber threats.", icon: Lock },
      { title: "Resiliency", desc: "High availability architecture with fail-safe redundancy to minimize unexpected downtime.", icon: ShieldCheck },
    ],
  },
  sections: [
    {
      eyebrow: "Scope of Services",
      title: "Our Networking System Services Include",
      description: "End-to-end services from assessment and blueprint design to monitoring, troubleshooting and migration.",
      items: [
        { title: "Existing IT Infrastructure & System Assessment", desc: "Comprehensive evaluation of existing hardware, network devices, and system performance to identify bottlenecks and utilization levels.", icon: Search },
        { title: "Gap Analysis and Recommendations", desc: "Analytical benchmarking of current IT posture against business requirements, providing actionable technical enhancement strategies.", icon: FileText },
        { title: "Blue Print on IT Infrastructure and System", desc: "End-to-end strategic architectural design covering physical topology, logical routing, VLAN configuration, and disaster recovery.", icon: Layers },
        { title: "Integration of Software and Hardware Components", desc: "Seamless multi-vendor integration bridging active network appliances with Network Operating Systems (NOS) and enterprise software.", icon: Cpu },
        { title: "IT Infrastructure Management", desc: "Centralized lifecycle management encompassing enterprise desktops, rack servers, and critical networking devices across LAN and WAN.", icon: HardDrive },
        { title: "Monitoring, Administration & Diagnostics", desc: "Proactive 24/7 oversight for managing key elements: PCs, servers, network links, software/applications, and overall security.", icon: Eye },
        { title: "Troubleshooting Networking Problem", desc: "Rapid incident response, packet-level diagnosis, root cause analysis, and SLA-backed problem resolution for network disruptions.", icon: Wrench },
        { title: "Security Management Services", desc: "Enterprise network protection including firewall policies, Access Control Lists (ACLs), encrypted VPNs, and perimeter defense.", icon: Lock },
        { title: "Software Installations, Upgrade & Migration Services", desc: "Zero-disruption operating system upgrades, routine firmware patching, and seamless network component migrations.", icon: RefreshCw },
      ],
    },
  ],
}

export default function NetworkingSystemPage() {
  return <ServicePage data={data} />
}
