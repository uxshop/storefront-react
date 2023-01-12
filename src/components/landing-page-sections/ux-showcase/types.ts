export interface UxShowcaseBLockSettings {
  dataHref: string
  dataImage: string
  dataName: string
  dataPrice: number
  dataPriceCompare: number
  dataParcels?: number
  dataParcelPrice?: number
  dataHasInterest?: boolean
}

export interface UxShowcaseBLocks {
  settings: UxShowcaseBLockSettings
}

export interface UxShowcaseSettings {
  dataTitle: string
  dataItemLimit: string
}

export interface UxShowcaseProps {
  settings: UxShowcaseSettings
  blocks: UxShowcaseBLocks[]
}
