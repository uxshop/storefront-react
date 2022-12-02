import { ShopService } from '@uxshop/storefront-core'

export function useShop(): any {
  function getShop() {
    let result = {
      data: null,
      error: null
    }

    ShopService.getShop()
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  return getShop()
}
