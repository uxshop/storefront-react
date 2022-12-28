export interface UxTestimonialsSettings {
  dataDescription?: string
  dataTestimonials?: string
  dataTitle?: string
}
export interface UxTestimonialsBlocks {
  settings?: UxTestimonialsBlocksSettings
}

export interface UxTestimonialsProps {
  blocks: UxTestimonialsBlocks[]
  settings: UxTestimonialsSettings
}

export interface UxTestimonialsBlocksSettings {
  name?: string
  icon?: string
  message?: string
}
