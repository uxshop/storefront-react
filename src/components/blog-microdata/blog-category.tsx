import { SeoServiceFactory } from '@uxshop/storefront-core/dist/services/seo/SeoServiceFactory'
import * as React from 'react'
import { BlogCategoryMicroDataProps } from './types'

export function BlogCategoryMicroData({ data }: BlogCategoryMicroDataProps) {
    return (
        <script type="application/ld+json">
            {SeoServiceFactory.getInstance('blog-category', data)}
        </script>
    )
}
