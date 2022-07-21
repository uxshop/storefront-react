import * as React from 'react'
import { SeoServiceFactory } from '../../../core/services/seo/SeoServiceFactory'
import { BlogPostMicroDataProps } from './types'

export function BlogPostMicroData({ data }: BlogPostMicroDataProps) {
  return <script type="application/ld+json">{SeoServiceFactory.getInstance('blog-post', data)}</script>
}
