import React from 'react'
import { UxTestimonialsProps } from './types'
import { defineCustomElement as defineUxTestimonials } from '@uxshop/storefront-components/dist/components/ux-testimonials'

export function UxTestimonials({ settings, blocks }: UxTestimonialsProps) {
  const dataProps = {
    'data-description': settings.dataDescription,
    'data-testimonials': JSON.stringify(blocks.map(block => block.settings)),
    'data-title': settings.dataTitle
  }

  defineUxTestimonials()
  return React.createElement('ux-testimonials', dataProps)
}
