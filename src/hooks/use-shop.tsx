import { ShopService } from '@uxshop/storefront-core'
import { useEffect, useState } from 'react'
import { HookData } from './types/HookData'

export function useShop(): HookData {
  const [state, setState] = useState<HookData>({
    loading: false,
    data: null,
    error: null
  })

  function getShop() {
    setState(state => ({ ...state, loading: true }))
    ShopService.getShop()
      .then(response => setState(state => ({ ...state, loading: false, data: response })))
      .catch(error => setState(state => ({ ...state, loading: false, error })))
  }

  useEffect(() => {
    getShop()
  }, [])

  return { ...state }
}
