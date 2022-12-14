import { useCallback, useEffect, useState } from 'react'
import { HookData } from './types/HookData'
import { MenuService } from '@uxshop/storefront-core'
import { MenuFields } from '@uxshop/storefront-core/dist/modules/menu/MenuTypes'

interface MenuHookParams {
  id?: string
}

export function useMenus({ id }: MenuHookParams, fields?: MenuFields[]): HookData {
  const [state, setState] = useState<HookData>({
    loading: false,
    data: null,
    error: null
  })

  const getOneById = useCallback(() => {
    setState(state => ({ ...state, loading: true }))
    MenuService.getById(id, fields)
      .then(response => setState(state => ({ ...state, loading: false, data: response })))
      .catch(error => setState(state => ({ ...state, loading: false, error })))
  }, [id])

  const getList = useCallback(() => {
    setState(state => ({ ...state, loading: true }))
    MenuService.getList(fields)
      .then(response => setState(state => ({ ...state, loading: false, data: response })))
      .catch(error => setState(state => ({ ...state, loading: false, error })))
  }, [fields])

  useEffect(() => {
    id ? getOneById() : getList()
  }, [id])

  return { ...state }
}
