export interface settingsTestimonials {
    title?: string
    description?: string
}

export interface blocksTestimonials {
    customer: {
        name?: string
        icon?: string
    }
    message?: string
}

export interface uxTestimonialsProps {
    settings: settingsTestimonials
    blocks: blocksTestimonials[]
}
