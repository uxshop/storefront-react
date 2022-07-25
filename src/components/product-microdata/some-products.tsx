import * as React from 'react'
import { SeoServiceFactory } from '@uxshop/storefront-core/dist/services/seo/SeoServiceFactory'
import { SomeProductsMicroDataProps } from './types'

export function SomeProductsMicroData({ data }: SomeProductsMicroDataProps) {
    return (
        <script type="application/ld+json">
            {SeoServiceFactory.getInstance('some-products', data)}
        </script>
    )
}
