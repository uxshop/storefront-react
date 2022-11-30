export interface SettingsUxCarouselItem {
  title?: string
  description?: string
  buttonLabel?: string
  buttonHref?: string
  desktopImage?: string
  mobileImage?: string
}

export interface UxCarouselItemProps {
  settings: SettingsUxCarouselItem
}
