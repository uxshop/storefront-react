import React from 'react'
import { defineCustomElement as defineUxShowcase } from '@uxshop/storefront-components/dist/components/ux-showcase'
import { UxShowcaseProps } from './types'

export function UxShowcase({ children }: UxShowcaseProps) {
  defineUxShowcase()

  return React.createElement('ux-showcase', null, children)
}
