import * as React from 'react'
import { SeoServiceFactory } from '../../../core/services/seo/SeoServiceFactory'
import { BlogCategoryMicroDataProps } from './types'

export function BlogCategoryMicroData({ data }: BlogCategoryMicroDataProps) {
  return <script type="application/ld+json">{SeoServiceFactory.getInstance('blog-category', data)}</script>
}
