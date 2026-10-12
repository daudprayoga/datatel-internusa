import type { Metadata } from "next"
import {
  Server,
  ShieldCheck,
  Zap,
  Flame,
  Activity,
  Layers,
  Gauge,
  Wind,
  Video,
  Settings,
  Wrench,
} from "lucide-react"
import { ServicePage, type ServicePageData } from "@/components/sandbox/service-page"

export const metadata: Metadata = {
  title: "Data Center, Design & Build | PT. Datatel Inter Nusa",
  description:
    "Datatel in making the concept of Data Center refers to TIA-942 standard. Reliable, Available, Maintainable, Flexible & Cost Effective Data Center Infrastructure.",
}

const data: ServicePageData = {
  title: "Data Center, Design & Build",
  description:
    "Designing to implementing the Data Center in accordance with the International Standard TIA-942.",
  overview: {
    eyebrow: "TIA-942 Global Standard",
    title: "World-Class Mission-Critical Data Center Architecture",
    lead: "In the development effort and improve the performance of a piece of equipment in the Technical Information Technology in accordance with International Standard as a reference in designing to implementing the Data Center required some special handling.",
    paragraphs: [
      <>
        <strong className="text-sb-navy">Datatel</strong> in making the concept of Data Center refers to the{" "}
        <strong className="text-sb-navy">TIA-942 standard</strong>. We use this standard because it is very comprehensive
        in specifications that have been proven world-class and recognized by data center service providers.
      </>,
    ],
    note: {
      title: "Basic Planning Considerations",
      text: "Reliable, Available, Maintenance, Flexible & Cost Effective.",
    },
  },
  highlights: {
    title: "Planning Considerations",
    icon: Server,
    items: [
      { title: "Reliable", desc: "Robust architecture to sustain continuous enterprise workloads.", icon: ShieldCheck },
      { title: "Available", desc: "Redundant electrical and cooling topology for high uptime.", icon: Activity },
      { title: "Maintenance", desc: "Components can be serviced without interrupting operations.", icon: Settings },
      { title: "Flexible & Cost Effective", desc: "Modular expansion that scales while optimizing total cost.", icon: Gauge },
    ],
  },
  sections: [
    {
      eyebrow: "Scope of Deliverables",
      title: "Datatel Experiences in Data Center Infrastructure",
      description: "Datatel have the experiences in the design and delivering the Data Center infrastructure, include:",
      items: [
        { title: "Raised Floor System", desc: "Heavy-duty anti-static raised flooring for optimal under-floor airflow and cable organization.", icon: Layers },
        { title: "Precision Air Condition", desc: "Dedicated precision cooling with strict temperature & humidity control and aisle containment.", icon: Wind },
        { title: "UPS", desc: "Industrial-grade modular UPS, battery backup, and automatic transfer for uninterrupted power.", icon: Zap },
        { title: "Fire Suppression System", desc: "Clean agent gas fire protection safe for live electronics, paired with early smoke detection.", icon: Flame },
        { title: "CCTV Camera", desc: "Perimeter and rack-aisle surveillance with high-definition recording.", icon: Video },
        { title: "Environment Monitoring System (EMS)", desc: "24/7 monitoring of temperature, humidity, water leakage, power status, and smoke alerts.", icon: Activity },
        { title: "Integrated M&E and Civil Works", desc: "Turnkey mechanical, electrical, and civil works — partitioning, grounding, and lighting.", icon: Wrench },
      ],
    },
  ],
  cta: {
    title: "Plan Your TIA-942 Data Center with Datatel",
    description: "Consult our data center specialists for civil layout, cooling calculation, power sizing, and fire suppression design.",
  },
}

export default function DataCenterDesignBuildPage() {
  return <ServicePage data={data} />
}
