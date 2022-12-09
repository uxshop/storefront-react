import { useCallback, useEffect, useState } from 'react'
import { AppService } from '@uxshop/storefront-core'
import { AppFields } from '@uxshop/storefront-core/dist/modules/app/AppTypes'
import { HookData } from './types/HookData'

interface AppHookParams {
  id: string
}

export function useApps({ id }: AppHookParams, fields?: AppFields[]): any {
  const [state, setState] = useState<HookData>({
    loading: false,
    data: null
  })

  const getById = useCallback(() => {
    setState({ ...state, loading: true })
    AppService.getById(id, fields)
      .then(response => setState(state => ({ ...state, loading: false, data: response })))
      .catch(error => setState(state => ({ ...state, loading: false, error })))
  }, [id])

  useEffect(() => {
    getById()
  }, [])

  return { ...state }
}
