import * as React from 'react'
import { BrandMicroDataProps } from './types'
import { SeoServiceFactory } from '@uxshop/storefront-core/dist/services/seo/SeoServiceFactory'

export function BrandMicroData({ data }: BrandMicroDataProps) {
    return (
        <script type="application/ld+json">{SeoServiceFactory.getInstance('brand', data)}</script>
    )
}
