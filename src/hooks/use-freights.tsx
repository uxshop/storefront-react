import { useEffect } from 'react'
import { FreightService } from '@uxshop/storefront-core'
import {
  Freight,
  FreightFields,
  Shipping
} from '@uxshop/storefront-core/dist/modules/freight/FreightTypes'

interface FreightHookParams extends Omit<Shipping, 'variationId'> {
  variationId: string
}

interface FreightData {
  data: Freight[]
}

export function useFreights(params: FreightHookParams, fields?: FreightFields[]): FreightData {
  let result = {
    data: null,
    error: null
  }

  function getList() {
    const service = params.variationId && params.zipCode && FreightService.getList

    service(params, fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  useEffect(() => {
    getList()
  }, [params.variationId, params.zipCode, params.components])

  return result
}
