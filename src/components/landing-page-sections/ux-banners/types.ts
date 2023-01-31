export interface UxBannersSettings {
  href: string
  srcDesktop: string
  srcMobile: string
}

interface Blocks {
  name: string
  schema: string
  settings: UxBannersSettings
}

export interface UxBannersProps {
  settings: any[]
  blocks: Blocks[]
}
