export interface UxShowcaseItemSettings {
  hasInterest?: boolean
  href: string
  image: string
  name: string
  parcelPrice?: number
  parcels?: number
  price: number
  priceCompare?: number
}

export interface UxShowcaseItemProps {
  settings: UxShowcaseItemSettings
}
