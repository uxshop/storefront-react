export interface UxCarouselItemSettings {
  dataTitle?: string
  dataDescription?: string
  dataButtonLabel?: string
  dataButtonHref?: string
  dataDesktopImage?: string
  dataMobileImage?: string
}

export interface UxCarouselItemProps {
  settings: UxCarouselItemSettings
}
