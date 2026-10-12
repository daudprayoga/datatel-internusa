import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sortPortfolios<T extends { name: string }>(portfolios: T[]): T[] {
  const priorityOrder = [
    "OneClick Apotek Alpro",
    "Rensbook",
    "Hafa Pilar",
    "DigiLaw Indonesia",
  ]

  return [...portfolios].sort((a, b) => {
    const indexA = priorityOrder.findIndex(
      (name) => a.name.trim().toLowerCase() === name.toLowerCase()
    )
    const indexB = priorityOrder.findIndex(
      (name) => b.name.trim().toLowerCase() === name.toLowerCase()
    )

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB
    }
    if (indexA !== -1) return -1
    if (indexB !== -1) return 1

    return 0
  })
}

