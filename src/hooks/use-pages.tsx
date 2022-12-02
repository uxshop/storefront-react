import { PagesService } from '@uxshop/storefront-core'
import { PageFields } from '@uxshop/storefront-core/dist/modules/pages/PageTypes'

interface PageHookParams {
  id?: string
  slug?: string
}

export function usePages({ id, slug }: PageHookParams, fields?: PageFields[]): any {
  function getOne({ id, slug }: PageHookParams, fields?: PageFields[]) {
    let result = {
      data: null,
      error: null
    }

    const service = id ? PagesService.getById : PagesService.getBySlug
    const param = id ?? slug

    service(param, fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  function getList(fields?: PageFields[]) {
    let result = {
      data: null,
      error: null
    }

    PagesService.getList(fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  return id || slug ? getOne({ id, slug }, fields) : getList(fields)
}
