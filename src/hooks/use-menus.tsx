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

  function getOneById() {
    MenuService.getById(id, fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  function getList() {
    MenuService.getList(fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  useEffect(() => {
    id ? getOneById() : getList()
  }, [id])

  return result
}
