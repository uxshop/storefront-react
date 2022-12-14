import React from 'react'
import { UxShowcaseProps } from './types'
import { defineCustomElement as defineUxShowcase } from '@uxshop/storefront-components/dist/components/ux-showcase'

export function UxShowcase({ children }: UxShowcaseProps) {
  defineUxShowcase()

  return React.createElement('ux-showcase', null, children)
}
