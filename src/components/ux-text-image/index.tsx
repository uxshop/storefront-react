import React from 'react'
import { uxTextImageProps } from './types'
import { defineCustomElement as defineUxTextImage } from '@uxshop/storefront-components/dist/components/ux-text-image'

export function UxTextImage({ settings }: uxTextImageProps) {
    const dataProps = {
        'data-title': settings.title,
        'data-description': settings.description,
        'data-image': settings.image,
        'data-button-href': settings.buttonHref,
        'data-button-label': settings.buttonLabel,
        side: settings.side
    }

    defineUxTextImage()

    return React.createElement('ux-text-image', dataProps)
}
