import { FreightService } from '@uxshop/storefront-core/dist/modules/freight/FreightService'
import {
  Freight,
  FreightFields,
  Shipping
} from '@uxshop/storefront-core/dist/modules/freight/FreightTypes'
import { useEffect, useState } from 'react'

interface FreightHookParams extends Omit<Shipping, 'variationId'> {
  variationId: string
}

interface FreightData {
  isLoading: boolean
  freights: Freight[]
}

export function useFreights(params: FreightHookParams, fields?: FreightFields[]): FreightData {
  const [freights, setFreights] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  async function fetchFreights() {
    const result =
      params.variationId && params.zipCode && (await FreightService.getList(params, fields))
    setFreights(result)
  }

  async function getList() {
    try {
      await fetchFreights()
    } catch {
      setFreights([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    getList()
  }, [params.variationId, params.zipCode, params.components])

  return { freights, isLoading }
}
