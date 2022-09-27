import { ShopService } from '@uxshop/storefront-core'
import { useEffect, useState } from 'react'

export function useShop(): any {
  const [shop, setShop] = useState<any>()

  async function getShop() {
    const result = await ShopService.getShop()
    setShop(result)
  }

  useEffect(() => {
    getShop()
  }, [])

  return shop
}
