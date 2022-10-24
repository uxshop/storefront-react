import { useState } from 'react'
import { NewsletterService } from '@uxshop/storefront-core'
import { NewsletterInput } from '@uxshop/storefront-core/dist/modules/newsletter/NewsletterTypes'

export function useNewsletter(): any {
  const [newsletter, setNewsletter] = useState<any>(null)

  async function subscribe(userData: NewsletterInput) {
    const result = await NewsletterService.subscribe(userData)
    setNewsletter(result)
  }

  return { newsletter, subscribe }
}
