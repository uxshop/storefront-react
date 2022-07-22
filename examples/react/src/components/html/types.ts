import { SectionProps } from '../../common/types/section'

export interface SettingsProps {
  htmlContent: string
  customClass?: string
}

export interface HtmlProps extends SectionProps<SettingsProps> {}
