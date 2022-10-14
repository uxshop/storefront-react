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

export function useFreights(
  { variationId, zipCode, components }: FreightHookParams,
  fields?: FreightFields[]
): { isLoading: boolean; freights: Freight[] } {
  const [freights, setFreights] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  async function getList(
    { variationId, zipCode, components }: FreightHookParams,
    fields?: FreightFields[]
  ) {
    let result = []
    try {
      result =
        variationId &&
        zipCode &&
        (await FreightService.getList(
          {
            variationId: Number(variationId),
            zipCode,
            components
          },
          fields
        ))
    } finally {
      setIsLoading(false)
    }

    setFreights(result)
  }

  useEffect(() => {
    setIsLoading(true)
    getList({ variationId, zipCode, components }, fields)
  }, [variationId, zipCode, components])

  return { freights, isLoading }
}
