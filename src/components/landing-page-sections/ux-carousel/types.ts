export interface UxCarouselSettings {
  dataRewind?: boolean
  dataAutoplay?: boolean
  dataArrows?: boolean
  dataPagination?: boolean
}

export interface UxCarouselItemSettings {
  dataButtonLabel: string
  dataButtonHref: string
  dataTitle?: string
  dataDescription?: string
  dataDesktopImage?: string
  dataMobileImage?: string
  dataImageAlt?: string
}

export interface UxCarouselBLocks {
  settings: UxCarouselItemSettings
}

export interface UxCarouselProps {
  settings: UxCarouselSettings
  blocks: UxCarouselBLocks[]
}
