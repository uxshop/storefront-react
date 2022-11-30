import React from 'react'
import { UxCarouselProps } from './types'
import { defineCustomElement as defineUxCarousel } from '@uxshop/storefront-components/dist/components/ux-text-image'

export function UxCarousel({ settings }: UxCarouselProps) {
  const dataProps = {
    'data-arrows': settings.arrows,
    'data-autoplay': settings.autoplay,
    'data-pagination': settings.pagination,
    'data-rewind': settings.rewind
  }

  defineUxCarousel()

  return React.createElement('ux-carousel', dataProps)
}
