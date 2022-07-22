export interface SeoProps {
  data: SeoDataProps
}

interface SeoDataProps {
  title?: string
  description?: string
  url?: string
  image?: ImageTagsProps
  type?: string
}

interface ImageTagsProps {
  url: string
  width?: string
  height?: string
  alt?: string
}
