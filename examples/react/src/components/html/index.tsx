import { HtmlProps } from './types'

export default function Html({ settings }: HtmlProps) {
  return <section className={settings.customClass} dangerouslySetInnerHTML={{ __html: settings.htmlContent }}></section>
}
