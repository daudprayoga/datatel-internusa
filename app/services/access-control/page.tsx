import type { Metadata } from "next"
import {
  ShieldCheck,
  Lock,
  Users,
  Building,
  KeyRound,
  Fingerprint,
  ScanFace,
  CreditCard,
  DoorClosed,
  BellRing,
  ClipboardList,
} from "lucide-react"
import { ServicePage, type ServicePageData } from "@/components/sandbox/service-page"

export const metadata: Metadata = {
  title: "Access Control | PT. Datatel Inter Nusa",
  description:
    "Controlling access to your premises and its assets is fundamental to safeguarding your employees and business by PT. Datatel Inter Nusa.",
}

const data: ServicePageData = {
  title: "Access Control",
  heroImage: "/assets/img/photos/access-control.png",
  description:
    "Controlling access to your premises and its assets is fundamental to safeguarding your employees and business.",
  overview: {
    eyebrow: "Physical & Premise Security",
    title: "Protect Your Workforce, Data & Assets with Intelligent Access Control",
    lead: "In these uncertain times, security has become a major concern. Controlling access to your premises and its assets is fundamental to safeguarding your employees and business.",
    paragraphs: [
      "Access Control monitors the movement of individuals in and out of your premises, giving your organization complete transparency, elevated security standards, and real-time perimeter protection.",
    ],
    note: {
      title: "Tailored Enterprise Security Integration",
      text: (
        <>
          <strong className="text-sb-navy">PT. Datatel Inter Nusa</strong> delivers end-to-end access control systems —
          from site assessment and hardware installation to building integration — reducing the cost and liability of
          security personnel.
        </>
      ),
    },
  },
  highlights: {
    title: "With Access Control You Can",
    icon: Fingerprint,
    items: [
      { title: "Regulate Who Gains Entry", desc: "Strictly manage and authorize personnel or visitor access to your business premises.", icon: KeyRound },
      { title: "Protect Your Staff & Assets", desc: "Safeguard people, server rooms, and confidential areas around the clock.", icon: ShieldCheck },
      { title: "Restrict Access to Certain Areas", desc: "Limit entry into high-security zones such as data centers and archive rooms.", icon: DoorClosed },
      { title: "Integrate with Other Security Systems", desc: "Synchronize with CCTV, fire alarm release, and building management systems.", icon: BellRing },
    ],
  },
  sections: [
    {
      eyebrow: "Scope & Capabilities",
      title: "Complete Access Management for Commercial & Industrial Facilities",
      description: "Reliable access hardware and software customized to your organizational security hierarchy.",
      items: [
        { title: "Biometric & Facial Recognition", desc: "Fast, contactless face verification and anti-spoof fingerprint scanners with instant authentication.", icon: ScanFace },
        { title: "RFID Smart Card Credentials", desc: "Smart card technology (Mifare, Desfire, HID) and mobile NFC/BLE credentials for seamless tapping.", icon: CreditCard },
        { title: "Turnstiles & Speed Gates", desc: "Tripod turnstiles, optical flap barriers, and speed gates for lobby crowd control.", icon: Users },
        { title: "Server Room Interlocking (Man-Trap)", desc: "Dual-door interlock mechanisms for maximum perimeter defense in data centers.", icon: Lock },
        { title: "Audit Trail & Time Attendance", desc: "Detailed access logs and time-stamped reporting for organizational compliance.", icon: ClipboardList },
        { title: "Reduce Cost & Liability", desc: "Lower security personnel costs and mitigate liability through automated electronic security.", icon: Building },
      ],
    },
  ],
  cta: {
    title: "Need Reliable Access Control for Your Facility?",
    description: "Contact our engineers for site surveys, door controller sizing, and turnstile system recommendations.",
  },
}

export default function AccessControlPage() {
  return <ServicePage data={data} />
}
