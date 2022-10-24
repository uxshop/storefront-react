import { useEffect, useState } from 'react'
import { AppsService } from '@uxshop/storefront-core'
import { AppsFields } from '@uxshop/storefront-core/dist/modules/apps/AppsTypes'

interface AppHookParams {
  id: string
}

export function useApps({ id }: AppHookParams, fields?: Array<AppsFields>): any {
  const [apps, setApps] = useState<any>()

  async function getById({ id }: AppHookParams, fields?: Array<AppsFields>) {
    const result = await AppsService.getById(id, fields)
    setApps(result)
  }

  useEffect(() => {
    getById({ id }, fields)
  }, [])

  return apps
}
