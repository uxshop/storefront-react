import { useEffect, useState } from 'react'
import { HookData } from './types/HookData'
import { NewsletterService } from '@uxshop/storefront-core'
import { NewsletterInput } from '@uxshop/storefront-core/dist/modules/newsletter/NewsletterTypes'

export function useNewsletter(): any {
  const [state, setState] = useState<HookData>({
    loading: false,
    data: null,
    error: null
  })
  async function subscribe(userData?: NewsletterInput) {
    setState(state => ({ ...state, loading: true }))

    await NewsletterService.subscribe(userData)
      .then(response => setState({ loading: false, data: response }))
      .catch(error => setState({ loading: false, error }))

    return { state }
  }

  useEffect(() => {
    subscribe
  })

  return { ...state, subscribe }
}
