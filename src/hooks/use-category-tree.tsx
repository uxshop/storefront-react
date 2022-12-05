import { CategoryService } from '@uxshop/storefront-core'
import { CategoryTreeFields } from '@uxshop/storefront-core/dist/modules/category/CategoryTypes'

export function useCategoryTree(fields?: CategoryTreeFields[]) {
  function get(fields?: CategoryTreeFields[]) {
    let result = {
      data: null,
      error: null
    }
    CategoryService.getTree(fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }
  return get(fields)
}
