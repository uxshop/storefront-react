export interface UxTextImageSettings {
  dataTitle: string
  dataDescription: string
  dataImage: string
  dataButtonLabel: string
  dataButtonHref?: string
  dataPosition?: 'right' | 'left'
}

export interface UxTextImageProps {
  settings: UxTextImageSettings
}
