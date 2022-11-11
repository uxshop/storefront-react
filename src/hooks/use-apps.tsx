import { useEffect, useState } from 'react'
import { AppService } from '@uxshop/storefront-core'
import {AppFields} from '@uxshop/storefront-core/dist/modules/app/AppTypes'

interface AppHookParams {
  id: string
}

export function useApps({ id }: AppHookParams, fields?: AppFields[]): any {
  const [apps, setApps] = useState<any>()

  async function getById({ id }: AppHookParams, fields?: AppFields[]) {
    const result = await AppService.getById(id, fields)
    setApps(result)
  }

  useEffect(() => {
    getById({ id }, fields)
  }, [])

  return apps
}
