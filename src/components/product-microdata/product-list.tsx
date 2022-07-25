import * as React from 'react'
import { SeoServiceFactory } from '@uxshop/storefront-core/dist/services/seo/SeoServiceFactory'
import { ProductListMicroDataProps } from './types'

export function ProductListMicroData({ data }: ProductListMicroDataProps) {
    return (
        <script type="application/ld+json">
            {SeoServiceFactory.getInstance('product-list', data)}
        </script>
    )
}
