import React from 'react'
import { uxTestimonialsProps } from './types'
import { defineCustomElement as defineUxTestimonials } from '@uxshop/storefront-components/dist/components/ux-testimonials'

export function UxTestimonials(props: uxTestimonialsProps) {
    const { blocks, settings } = props

    const dataBlocks = JSON.stringify(blocks)

    const dataProps = {
        'data-title': settings.title,
        'data-description': settings.description,
        'data-testimonials': dataBlocks
    }

    defineUxTestimonials()

    return React.createElement('ux-testimonials', dataProps)
}
