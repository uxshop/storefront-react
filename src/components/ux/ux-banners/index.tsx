import React from 'react'
import { UxBannersProps } from './types'
import { defineCustomElement as defineUxBanners } from '@uxshop/storefront-components/dist/components/ux-banners'

export function UxBanners({ settings }: UxBannersProps) {
  const dataProps = {
    'data-images': settings.dataImages
  }

  defineUxBanners()

  return React.createElement('ux-banners', dataProps)
}
