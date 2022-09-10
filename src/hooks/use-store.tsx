import { ShopService } from '@uxshop/storefront-core'
import { useEffect, useState } from 'react'

export function useStore(): any {
  const [shop, setShop] = useState<any>()

  async function getShop() {
    const result = {}
    setShop(result)
  }

  useEffect(() => {
    getShop()
  }, [])

  return shop
}
