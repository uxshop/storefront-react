import { CategoryService } from '@uxshop/storefront-core'
import { CategoryTreeFields } from '@uxshop/storefront-core/dist/modules/category/CategoryTypes'
import { useEffect, useState } from 'react'
import { HookData } from './types/HookData'

export function useCategoryTree(fields?: CategoryTreeFields[]) {
  const [state, setState] = useState<HookData>({
    loading: false,
    data: null,
    error: null
  })

  function get() {
    setState(state => ({ ...state, loading: true }))

    CategoryService.getTree(fields)
      .then(response => setState(state => ({ ...state, loading: false, data: response })))
      .catch(error => setState(state => ({ ...state, loading: false, error })))
  }

  useEffect(() => {
    get()
  }, [])
  return { ...state }
}
