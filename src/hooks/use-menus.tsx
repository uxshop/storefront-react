import { MenuService } from '@uxshop/storefront-core'
import { MenuFields } from '@uxshop/storefront-core/dist/modules/menu/MenuTypes'

interface MenuHookParams {
  id?: string
}

export function useMenus({ id }: MenuHookParams, fields?: MenuFields[]): any {
  function getOneById(id: string, fields?: MenuFields[]) {
    let result = {
      data: null,
      error: null
    }

    MenuService.getById(id, fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  function getList(fields?: MenuFields[]) {
    let result = {
      data: null,
      error: null
    }

    MenuService.getList(fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  return id ? getOneById(id, fields) : getList(fields)
}
