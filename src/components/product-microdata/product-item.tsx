import * as React from 'react'
import { SeoServiceFactory } from '../../../core/services/seo/SeoServiceFactory'
import { ProductItemMicroDataProps } from './types'

export function ProductItemMicroData({ data }: ProductItemMicroDataProps) {
  return <script type="application/ld+json">{SeoServiceFactory.getInstance('product-item', data)}</script>
}
