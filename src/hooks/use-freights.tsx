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
): Freight[] {
  const [freights, setFreights] = useState<any>()

  async function getList(
    { variationId, zipCode, components }: FreightHookParams,
    fields?: FreightFields[]
  ) {
    const result = await FreightService.getList(
      {
        variationId: Number(variationId),
        zipCode,
        components
      },
      fields
    )
    setFreights(result)
  }

  useEffect(() => {
    getList({ variationId, zipCode, components }, fields)
  }, [])

  return freights
}
