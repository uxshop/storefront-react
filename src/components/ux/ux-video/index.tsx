import React from 'react'
import { UxVideoProps } from './types'
import { defineCustomElement as defineUxVideo } from '@uxshop/storefront-components/dist/components/ux-video'

export function UxVideo({ settings }: UxVideoProps) {
  const dataProps = {
    'data-src': settings.url,
    'data-title': settings.title,
    'data-description': settings.description
  }

  defineUxVideo()

  return React.createElement('ux-video', dataProps)
}
