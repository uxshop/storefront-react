import React, { createElement } from 'react'
import { defineCustomElement as defineUxShowcase } from '@uxshop/storefront-components/dist/components/ux-showcase'
import { UxShowcaseProps } from './types'

export function UxShowcase(props: UxShowcaseProps) {
  const dataProps = {
    'data-images': JSON.stringify(props.blocks.map(block => block.settings))
  }
  defineUxShowcase()

  return React.createElement('ux-showcase', dataProps)
}
