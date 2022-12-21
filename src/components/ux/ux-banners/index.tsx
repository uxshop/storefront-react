import React from 'react'
import { UxBannersProps } from './types'
import { defineCustomElement as defineUxBanners } from '@uxshop/storefront-components/dist/components/ux-banners'

export function UxBanners(props: UxBannersProps) {
  const dataProps = {
    'data-images': JSON.stringify(props.blocks.map(block => block.settings))
  }

  defineUxBanners()

  return React.createElement('ux-banners', dataProps)
}
