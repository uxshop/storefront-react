import React from 'react'
import { UxTestimonialsProps } from './types'
import { defineCustomElement as defineUxTestimonials } from '@uxshop/storefront-components/dist/components/ux-testimonials'

export function UxTestimonials({ settings }: UxTestimonialsProps) {
  const dataProps = {
    'data-description': settings.description,
    'data-testimonials': settings.testimonials,
    'data-title': settings.title
  }

  defineUxTestimonials()

  return React.createElement('ux-testimonials', dataProps)
}
