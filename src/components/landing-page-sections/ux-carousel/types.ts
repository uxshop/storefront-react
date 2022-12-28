import { UxCarouselItemSettings } from '../ux-carousel-item/types'

export interface UxCarouselSettings {
  dataRewind?: boolean
  dataAutoplay?: boolean
  dataArrows?: boolean
  dataPagination?: boolean
}

interface UxCarouselBlocks {
  name: string
  schema: string
  settings: UxCarouselItemSettings
}

export interface UxCarouselProps {
  settings: UxCarouselSettings
  blocks: UxCarouselBlocks[]
}
