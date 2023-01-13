import { defineCustomElement as defineUxCarousel } from '@uxshop/storefront-components/dist/components/ux-carousel'
import React from 'react'
import { UxCarouselProps } from './types'

export function UxCarousel(props: UxCarouselProps) {
  const dataProps = {
    'data-rewind': props.settings.dataRewind,
    'data-autoplay': props.settings.dataAutoplay,
    'data-arrows': props.settings.dataArrows,
    'data-pagination': props.settings.dataPagination,
    'data-items': JSON.stringify(props.blocks.map(block => block.settings))
  }

  defineUxCarousel()

  return React.createElement('ux-carousel', dataProps)
}
