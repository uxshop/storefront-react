import { NewsletterService } from '@uxshop/storefront-core'
import { NewsletterInput } from '@uxshop/storefront-core/dist/modules/newsletter/NewsletterTypes'

export function useNewsletter(userData: NewsletterInput): any {
  function subscribe(userData: NewsletterInput) {
    let result = {
      data: null,
      error: null
    }

    NewsletterService.subscribe(userData)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  return subscribe(userData)
}
