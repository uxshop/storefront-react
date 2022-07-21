import * as React from 'react'
import { SeoServiceFactory } from '../../../core/services/seo/SeoServiceFactory'
import { BrandMicroDataProps } from './types'

export function BrandMicroData({ data }: BrandMicroDataProps) {
  return <script type="application/ld+json">{SeoServiceFactory.getInstance('brand', data)}</script>
}
