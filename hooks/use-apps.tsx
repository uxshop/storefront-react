import { useEffect, useState } from 'react'
import { AppsFields } from '../../core/modules/apps/AppsTypes'
import { services } from '../../core'

interface AppHookParams {
  id: string
}

export function useApps({ id }: AppHookParams, fields?: Array<AppsFields>): any {
  const [apps, setApps] = useState<any>()

  async function getById({ id }: AppHookParams, fields?: Array<AppsFields>) {
    const result = await services.apps.getById(id, fields)
    setApps(result)
  }

  useEffect(() => {
    getById({ id }, fields)
  }, [])

  return apps
}
