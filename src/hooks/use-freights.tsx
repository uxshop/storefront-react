import { useEffect, useState } from 'react'
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
  errors: any
  isLoading: boolean
  data: Freight[]
}

export function useFreights(params: FreightHookParams, fields?: FreightFields[]): FreightData {
  const [freights, setFreights] = useState<any>([])
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  async function fetchFreights() {
    const result =
      params.variationId && params.zipCode && (await FreightService.getList(params, fields))
    setFreights(result)
  }

  async function getList() {
    try {
      await fetchFreights()
    } catch (error) {
      setFreights([])
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    getList()
  }, [params.variationId, params.zipCode, params.components])

  return { data: freights, isLoading: isLoading, errors: error }
}
