import { useCallback, useEffect, useState } from 'react'
import { FreightService } from '@uxshop/storefront-core'
import {
  Freight,
  FreightFields,
  Shipping
} from '@uxshop/storefront-core/dist/modules/freight/FreightTypes'
import { HookData } from './types/HookData'

interface FreightHookParams extends Omit<Shipping, 'variationId'> {
  variationId: string
}

interface FreightData {
  loading: boolean
  data?: Freight[]
  error?: Error
}

export function useFreights(params: FreightHookParams, fields?: FreightFields[]): FreightData {
  const [state, setState] = useState<HookData>({
    loading: false,
    data: null,
    error: null
  })

  const getList = useCallback(() => {
    setState(state => ({ ...state, loading: true }))

    const paramsExists = params.variationId && params.zipCode

    paramsExists &&
      FreightService.getList(params, fields)
        .then(response => setState(state => ({ ...state, loading: false, data: response })))
        .catch(error => setState(state => ({ ...state, loading: false, error })))
  }, [params.variationId, params.zipCode, params.components])

  useEffect(() => {
    getList()
  }, [])

  return { ...state }
}
