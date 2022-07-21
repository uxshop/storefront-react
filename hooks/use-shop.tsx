import { useEffect, useState } from 'react'
import { services } from '../../core'

export function useShop(): any {
  const [shop, setShop] = useState<any>()

  async function getShop() {
    const result = await services.shop.getShop()
    setShop(result)
  }

  useEffect(() => {
    getShop()
  }, [])

  return shop
}
