import React from 'react'
import { uxBannersProps } from './types'
import { defineCustomElement as defineUxBanners } from '@uxshop/storefront-components/dist/components/ux-banners'

export function UxBanners({ blocks }: uxBannersProps) {
    const blockInfos = JSON.stringify(blocks)

    const dataBlocks = {
        'data-images': blockInfos
    }

    defineUxBanners()

    return React.createElement('ux-banners', dataBlocks)
}
