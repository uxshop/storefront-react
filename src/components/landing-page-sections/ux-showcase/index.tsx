import React from 'react'
import { defineCustomElement as defineUxShowcase } from '@uxshop/storefront-components/dist/components/ux-showcase'
import { UxShowcaseProps } from './types'

export function UxShowcase(props: UxShowcaseProps) {
  const dataProps = {
    'data-products': JSON.stringify(props.blocks.map(block => block.settings)),
    'data-title': props.settings.dataTitle,
    'data-item-limit': props.settings.dataItemLimit
  }

  defineUxShowcase()

  return React.createElement('ux-showcase', dataProps)
}
