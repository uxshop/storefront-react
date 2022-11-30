import React from 'react'
import { UxCarouselItemProps } from './types'
import { defineCustomElement as defineUxCarouselItem } from '@uxshop/storefront-components/dist/components/ux-carousel-item'

export function UxCarouselItem({ settings }: UxCarouselItemProps) {
  const dataProps = {
    'data-button-href': settings.buttonHref,
    'data-button-label': settings.buttonLabel,
    'data-description': settings.description,
    'data-desktop-image': settings.desktopImage,
    'data-mobile-image': settings.mobileImage,
    'data-title': settings.title
  }

  defineUxCarouselItem()

  return React.createElement('ux-carousel-item', dataProps)
}
