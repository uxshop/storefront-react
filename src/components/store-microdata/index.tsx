import * as React from 'react'
import { SeoServiceFactory } from '@uxshop/storefront-core/dist/services/seo/SeoServiceFactory'
import { ShopMicroDataProps } from './types'

export function StoreMicroData({ data }: ShopMicroDataProps) {
  return <script type="application/ld+json">{SeoServiceFactory.getInstance('shop', data)}</script>
}
