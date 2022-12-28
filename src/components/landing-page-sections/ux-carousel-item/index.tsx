import React from 'react'
import { defineCustomElement as defineUxCarouselItem } from '@uxshop/storefront-components/dist/components/ux-carousel-item'
import { UxCarouselItemProps } from './types'

export function UxCarouselItem({ settings }: UxCarouselItemProps) {
  const dataProps = {
    'data-button-href': settings.dataButtonHref,
    'data-button-label': settings.dataButtonLabel,
    'data-description': settings.dataDescription,
    'data-desktop-image': settings.dataDesktopImage,
    'data-mobile-image': settings.dataMobileImage,
    'data-title': settings.dataTitle
  }

  defineUxCarouselItem()

  return React.createElement('ux-carousel-item', dataProps)
}
