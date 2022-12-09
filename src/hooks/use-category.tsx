import { useEffect, useState } from 'react'
import { CategoryService } from '@uxshop/storefront-core'
import { CategoryFields } from '@uxshop/storefront-core/dist/modules/category/CategoryTypes'
import { HookData } from './types/HookData'

interface CategoryHookParams {
  id?: string
  slug?: string
}

export function useCategory({ id, slug }: CategoryHookParams, fields?: CategoryFields[]): any {
  const [state, setState] = useState<HookData>({
    loading: false,
    data: null,
    error: null
  })

  function getOne() {
    const service = id ? CategoryService.getById : CategoryService.getBySlug
    const param = id ?? slug

    setState(state => ({ ...state, loading: true }))
    service(param, fields)
      .then(response => setState(state => ({ ...state, loading: false, data: response })))
      .catch(error => setState(state => ({ ...state, loading: false, error })))
  }

  useEffect(() => {
    getOne()
  }, [])

  return { ...state }
}
