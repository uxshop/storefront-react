import { defineCustomElement as defineUxTextImage } from '@uxshop/storefront-components/dist/components/ux-text-image'
import React from 'react'
import { UxTextImageProps } from './types'

export function UxTextImage({ settings }: UxTextImageProps) {
  const dataProps = {
    'data-image': settings.dataImage,
    'data-title': settings.dataTitle,
    'data-description': settings.dataDescription,
    'data-button-label': settings.dataButtonLabel,
    'data-button-href': settings.dataButtonHref,
    'data-position': settings.dataPosition
  }

  defineUxTextImage()

  return React.createElement('ux-text-image', dataProps)
}
