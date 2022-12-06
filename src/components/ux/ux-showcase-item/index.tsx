import React from 'react'
import { UxShowcaseItemProps } from './types'
import { defineCustomElement as defineUxShowcaseItem } from '@uxshop/storefront-components/dist/components/ux-showcase-item'

export function UxShowcaseItem({ settings }: UxShowcaseItemProps) {
  const dataProps = {
    'data-has-interest': settings.hasInterest,
    'data-href': settings.href,
    'data-image': settings.image,
    'data-name': settings.name,
    'data-parcel-price': settings.parcelPrice,
    'data-parcels': settings.parcels,
    'data-price': settings.price,
    'data-price-compare': settings.priceCompare
  }

  defineUxShowcaseItem()

  return React.createElement('ux-showcase-item', dataProps)
}
