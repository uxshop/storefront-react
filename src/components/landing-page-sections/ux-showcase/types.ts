import { UxShowcaseItemSettings } from '../ux-showcase-item/types'

interface UxShowcaseBlocks {
  name: string
  schema: string
  settings: UxShowcaseItemSettings
}
export interface UxShowcaseProps {
  blocks: UxShowcaseBlocks[]
}
