import React from 'react'
import { defineCustomElement as defineUxShowcase } from '@uxshop/storefront-components/dist/components/ux-showcase'

export function UxShowcase() {
  defineUxShowcase()

  return React.createElement('ux-showcase')
}
