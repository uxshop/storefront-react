export interface UxTextImageSettings {
  dataTitle: string
  dataSubtitle: string
  dataDescription: string
  dataImage: string
  dataButtonLabel: string
  dataButtonHref?: string
  dataPosition?: 'right' | 'left'
}

export interface UxTextImageProps {
  settings: UxTextImageSettings
}
