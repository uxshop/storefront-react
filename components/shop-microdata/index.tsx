import * as React from 'react'
import { SeoServiceFactory } from '../../../core/services/seo/SeoServiceFactory'
import { ShopMicroDataProps } from './types'

export function ShopMicroData({ data }: ShopMicroDataProps) {
  return <script type="application/ld+json">{SeoServiceFactory.getInstance('shop', data)}</script>
}
