import { defineCustomElement as defineUxCarousel } from '@uxshop/storefront-components/dist/components/ux-carousel'
import React from 'react'
import { UxCarouselProps } from './types'

export function UxCarousel(props: UxCarouselProps) {
  const dataProps = {
    'data-rewind': Boolean(props.settings.dataRewind),
    'data-autoplay': Boolean(props.settings.dataAutoplay),
    'data-arrows': Boolean(props.settings.dataArrows),
    'data-items': JSON.stringify(props.blocks.map(block => block.settings))
  }

  defineUxCarousel()

  return React.createElement('ux-carousel', dataProps)
}
