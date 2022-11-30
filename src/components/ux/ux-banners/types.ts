export interface ImagesList {
  srcMobile?: string
  srcDesktop?: string
  alt?: string
}

export interface SettingsUxBanners {
  list: ImagesList[]
}

export interface UxBannersProps {
  settings: SettingsUxBanners
}
