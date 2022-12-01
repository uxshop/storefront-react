import { useEffect, useState } from 'react'
import { AppService } from '@uxshop/storefront-core'
import { App, AppFields } from '@uxshop/storefront-core/dist/modules/app/AppTypes'

interface AppHookParams {
  id: string
}

export function useApps({ id }: AppHookParams, fields?: AppFields[]): any {
  const [apps, setApps] = useState<App>()
  const [error, setError] = useState()

  async function getById({ id }: AppHookParams, fields?: AppFields[]) {
    try {
      const result = await AppService.getById(id, fields)
      setApps(result)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getById({ id }, fields)
  }, [])

  return { data: apps, errors: error }
}
