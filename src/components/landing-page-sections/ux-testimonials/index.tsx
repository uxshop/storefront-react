import React from 'react'
import { UxTestimonialsProps } from './types'
import { defineCustomElement as defineUxTestimonials } from '@uxshop/storefront-components/dist/components/ux-testimonials'

export function UxTestimonials({ settings }: UxTestimonialsProps) {
  const dataProps = {
    'data-description': settings.dataDescription,
    'data-testimonials': settings.dataTestimonials,
    'data-title': settings.dataTitle
  }

  defineUxTestimonials()

  return React.createElement('ux-testimonials', dataProps)
}
