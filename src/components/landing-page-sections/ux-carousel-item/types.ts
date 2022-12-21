export interface UxCarouselItemSettings {
  title?: string
  description?: string
  buttonLabel?: string
  buttonHref?: string
  desktopImage?: string
  mobileImage?: string
}

export interface UxCarouselItemProps {
  settings: UxCarouselItemSettings
}
