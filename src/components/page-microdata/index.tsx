import * as React from 'react'
import { SeoServiceFactory } from '@uxshop/storefront-core/dist/services/seo/SeoServiceFactory'
import { PageMicroDataProps } from './types'

export function PageMicroData({ data }: PageMicroDataProps) {
    return <script type="application/ld+json">{SeoServiceFactory.getInstance('page', data)}</script>
}
