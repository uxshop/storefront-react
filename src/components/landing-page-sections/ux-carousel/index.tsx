import React from 'react'
import { UxCarouselProps } from './types'
import { defineCustomElement as defineUxCarousel } from '@uxshop/storefront-components/dist/components/ux-carousel'

export function UxCarousel({ settings, blocks }: UxCarouselProps) {
  const dataProps = {
    'data-arrows': settings.dataArrows,
    'data-autoplay': settings.dataAutoplay,
    'data-pagination': settings.dataPagination,
    'data-rewind': settings.dataRewind,
    'data-items': JSON.stringify(blocks.map(block => block.settings))
  }

  defineUxCarousel()

  return React.createElement('ux-carousel', dataProps)
}
