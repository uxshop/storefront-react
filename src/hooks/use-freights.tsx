import { useEffect, useState } from 'react'
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
  const [status, setStatus] = useState<HookData>({
    loading: false,
    data: null
  })

  function getList() {
    const service = params.variationId && params.zipCode && FreightService.getList

    service(params, fields)
      .then(response => setStatus({ loading: false, data: response }))
      .catch(error => setStatus({ loading: false, error }))
  }

  useEffect(() => {
    getList()
  }, [params.variationId, params.zipCode, params.components])

  return { ...status }
}
