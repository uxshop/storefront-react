import React from 'react'
import { UxCarouselProps } from './types'
import { defineCustomElement as defineUxCarousel } from '@uxshop/storefront-components/dist/components/ux-carousel'

export function UxCarousel({ settings, children }: UxCarouselProps) {
  const dataProps = {
    'data-arrows': settings.arrows,
    'data-autoplay': settings.autoplay,
    'data-pagination': settings.pagination,
    'data-rewind': settings.rewind
  }

  defineUxCarousel()

  return React.createElement('ux-carousel', dataProps, children)
}
