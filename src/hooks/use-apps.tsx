import { AppService } from '@uxshop/storefront-core'
import { AppFields } from '@uxshop/storefront-core/dist/modules/app/AppTypes'

interface AppHookParams {
  id: string
}

export function useApps({ id }: AppHookParams, fields?: AppFields[]): any {
  function getById() {
    let result = {
      data: null,
      error: null
    }
    AppService.getById(id, fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  return getById()
}
