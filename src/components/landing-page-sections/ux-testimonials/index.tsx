import React from 'react'
import { UxTestimonialsProps } from './types'
import { defineCustomElement as defineUxTestimonials } from '@uxshop/storefront-components/dist/components/ux-testimonials'

export function UxTestimonials(props: UxTestimonialsProps) {
  const dataProps = {
    'data-description': props.settings.dataDescription,
    'data-testimonials': JSON.stringify(props.blocks.map(block => block.settings)),
    'data-title': props.settings.dataTitle
  }

  defineUxTestimonials()

  return React.createElement('ux-testimonials', dataProps)
}
