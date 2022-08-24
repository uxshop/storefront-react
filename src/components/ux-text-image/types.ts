export interface settingsUxTextImage {
    title?: string
    description?: string
    image?: string
    buttonLabel?: string
    buttonHref?: string
    side?: 'right' | 'left'
}

export interface uxTextImageProps {
    settings: settingsUxTextImage
}
