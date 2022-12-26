export interface UxShowcaseItemSettings {
  dataHref: string
  dataImage: string
  dataName: string
  dataPrice: number
  dataHasInterest?: boolean
  dataParcelPrice?: number
  dataParcels?: number
  dataPriceCompare?: number
}

export interface UxShowcaseItemProps {
  settings: UxShowcaseItemSettings
}
