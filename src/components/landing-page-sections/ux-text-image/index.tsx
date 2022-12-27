import React from 'react'
import { UxTextImageProps } from './types'
import { defineCustomElement as defineUxTextImage } from '@uxshop/storefront-components/dist/components/ux-text-image'

export function UxTextImage({ settings }: UxTextImageProps) {
  const dataProps = {
    'data-title': settings.dataTitle,
    'data-description': settings.dataDescription,
    'data-image': settings.dataImage,
    'data-button-href': settings.dataButtonHref,
    'data-button-label': settings.dataButtonLabel,
    'data-side': settings.dataSide
  }

  defineUxTextImage()

  return React.createElement('ux-text-image', dataProps)
}
