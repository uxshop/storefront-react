import React, { createElement } from 'react'
import { defineCustomElement as defineUxShowcaseItem } from '@uxshop/storefront-components/dist/components/ux-showcase-item'
import { UxShowcaseItemProps } from './types'

export function UxShowcaseItem({ settings }: UxShowcaseItemProps) {
  const dataProps = {
    'data-has-interest': settings.dataHasInterest,
    'data-href': settings.dataHref,
    'data-image': settings.dataImage,
    'data-name': settings.dataName,
    'data-parcel-price': settings.dataParcelPrice,
    'data-parcels': settings.dataParcels,
    'data-price': settings.dataPrice,
    'data-price-compare': settings.dataPriceCompare
  }

  defineUxShowcaseItem()

  return React.createElement('ux-showcase-item', dataProps)
}
