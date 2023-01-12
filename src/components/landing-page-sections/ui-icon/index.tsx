import React from 'react'
import { UiIconProps } from './types'
import { defineCustomElement as defineUiIcon } from '@uxshop/storefront-components/dist/components/ui-icon'

export function UiIcon(props: UiIconProps) {
  const dataProps = {
    'data-color': props.dataColor,
    'data-icon-name': props.dataIconName
  }

  defineUiIcon()

  return React.createElement('ui-icon', dataProps)
}
