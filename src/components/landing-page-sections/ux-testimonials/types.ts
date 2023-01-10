export interface UxTestimonialsBLockSettings {
  icon: string
  message: string
  name: string
}

export interface UxTestimonialsBLocks {
  name: string
  schema: string
  settings: UxTestimonialsBLockSettings
}

export interface UxTestimonialsSettings {
  dataDescription: string
  dataTitle: string
}

export interface UxTestimonialsProps {
  settings: UxTestimonialsSettings
  blocks: UxTestimonialsBLocks[]
}
