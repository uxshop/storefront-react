export interface UxShowcaseItemSettings {
  href: string
  image: string
  name: string
  price: number
  parcelPrice: number
  parcels?: number
  priceCompare?: number
}

export interface UxShowcaseItemProps {
  settings: UxShowcaseItemSettings
}
