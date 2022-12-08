import { useEffect, useState } from 'react'
import { MenuService } from '@uxshop/storefront-core'
import { MenuFields } from '@uxshop/storefront-core/dist/modules/menu/MenuTypes'
import { HookData } from './types/HookData'

interface MenuHookParams {
  id?: string
}

export function useMenus({ id }: MenuHookParams, fields?: MenuFields[]): HookData {
  const [status, setStatus] = useState<HookData>({
    loading: false
  })

  function getOneById() {
    setStatus(state => ({ ...state, loading: true }))
    MenuService.getById(id, fields)
      .then(response => setStatus({ loading: false, data: response }))
      .catch(error => setStatus({ loading: false, error }))
  }

  function getList() {
    setStatus(state => ({ ...state, loading: true }))
    MenuService.getList(fields)
      .then(response => setStatus({ loading: false, data: response }))
      .catch(error => setStatus({ loading: false, error }))
  }

  useEffect(() => {
    id ? getOneById() : getList()
  }, [id])

  return { ...status }
}
