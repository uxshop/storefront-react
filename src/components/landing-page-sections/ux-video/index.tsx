import React from 'react'
import { UxVideoProps } from './types'
import { defineCustomElement as defineUxVideo } from '@uxshop/storefront-components/dist/components/ux-video'

export function UxVideo({ settings }: UxVideoProps) {
  const dataProps = {
    'data-src': settings.dataSrc,
    'data-title': settings.dataTitle,
    'data-description': settings.dataDescription
  }

  defineUxVideo()

  return React.createElement('ux-video', dataProps)
}
