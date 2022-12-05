import { MenuService } from '@uxshop/storefront-core'
import { MenuFields } from '@uxshop/storefront-core/dist/modules/menu/MenuTypes'
import { useEffect } from 'react'

interface MenuHookParams {
  id?: string
}

export function useMenus({ id }: MenuHookParams, fields?: MenuFields[]): any {
  let result = {
    data: null,
    error: null
  }

  function getOneById(id: string, fields?: MenuFields[]) {
    MenuService.getById(id, fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  function getList(fields?: MenuFields[]) {
    MenuService.getList(fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  useEffect(() => {
    id ? getOneById(id, fields) : getList(fields)
  }, [id])

  return result
}
