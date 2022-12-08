import { ShopService } from '@uxshop/storefront-core'
import { stat } from 'fs'
import { useEffect, useState } from 'react'
import { HookData } from './types/HookData'

export function useShop(): HookData {
  const [status, setStatus] = useState<HookData>({
    loading: false,
    data: null
  })

  function getShop() {
    setStatus({ loading: true })
    ShopService.getShop()
      .then(response => setStatus({ loading: false, data: response }))
      .catch(error => setStatus({ loading: false, error }))
  }

  useEffect(() => {
    getShop()
  }, [])

  return { ...status }
}
