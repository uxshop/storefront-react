export interface UxCarouselSettings {
  dataRewind?: boolean
  dataAutoplay?: boolean
  dataArrows?: boolean
}

export interface UxCarouselItemSettings {
  dataButtonLabel: string
  dataButtonHref: string
  dataTitle: string
  dataDescription: string
  dataDesktopImage: string
  dataMobileImage: string
  dataImageAlt: string
  dataShouldCenterInfos: boolean
  dataButtonColor: string
  dataFontButtonColor: string
  dataFontColor: string
}

export interface UxCarouselBLocks {
  settings: UxCarouselItemSettings
}

export interface UxCarouselProps {
  settings: UxCarouselSettings
  blocks: UxCarouselBLocks[]
}
