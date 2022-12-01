export interface UxTextImageSettings {
  title?: string
  description?: string
  image?: string
  buttonLabel?: string
  buttonHref?: string
  side?: 'right' | 'left'
}

export interface UxTextImageProps {
  settings: UxTextImageSettings
}
