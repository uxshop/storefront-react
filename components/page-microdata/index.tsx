import * as React from 'react'
import { SeoServiceFactory } from '../../../core/services/seo/SeoServiceFactory'
import { PageMicroDataProps } from './types'

export function PageMicroData({ data }: PageMicroDataProps) {
  return <script type="application/ld+json">{SeoServiceFactory.getInstance('page', data)}</script>
}
