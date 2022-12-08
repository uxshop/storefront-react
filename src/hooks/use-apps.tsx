import { AppService } from '@uxshop/storefront-core'
import { AppFields } from '@uxshop/storefront-core/dist/modules/app/AppTypes'
import { useEffect, useState } from 'react'
import { HookData } from './types/HookData'

interface AppHookParams {
  id: string
}

export function useApps({ id }: AppHookParams, fields?: AppFields[]): any {
  const [status, setStatus] = useState<HookData>({
    loading: false,
    data: null
  })

  function getById({ id }: AppHookParams, fields?: AppFields[]) {
    setStatus({ loading: true })
    AppService.getById(id, fields)
      .then(response => setStatus({ loading: false, data: response }))
      .catch(error => setStatus({ loading: false, error }))
  }
  useEffect(() => {
    getById({ id })
  }, [])
  return { ...status }
}
