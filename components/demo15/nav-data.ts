export interface NavItem {
  label: string
  href: string
}

export const serviceNavItems: NavItem[] = [
  { label: "Networking System", href: "/services/networking-system" },
  { label: "Access Control", href: "/services/access-control" },
  { label: "Data Center, Design & Build", href: "/services/data-center-design-build" },
  { label: "Digital CCTV", href: "/services/digital-cctv" },
  { label: "Structured Cabling System Certified", href: "/services/structured-cabling-system" },
]

export const quickLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Vision & Mission", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/news" },
]
