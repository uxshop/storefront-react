import { useEffect, useState } from 'react'
import { BrandService } from '@uxshop/storefront-core'
import { BrandFields } from '@uxshop/storefront-core/dist/modules/brand/BrandTypes'
import { PaginationFilter } from '@uxshop/storefront-core/dist/types/PaginationTypes'

interface BrandHookParams {
  id?: string
  slug?: string
  pagination?: PaginationFilter
}

interface GetOneParams {
  id?: string
  slug?: string
}

export function useBrands(
  { id, slug, pagination }: BrandHookParams,
  fields?: Array<BrandFields>
): any {
  const [brands, setBrands] = useState<any>()

  async function getOne({ id, slug }: GetOneParams, fields?: Array<BrandFields>) {
    const service = id ? BrandService.getById : BrandService.getBySlug
    const param = id ?? slug
    const result = await service(param, fields)
    setBrands(result)
  }

  async function getList(pagination?: PaginationFilter, fields?: Array<BrandFields>) {
    const result = await BrandService.getList(pagination, fields)
    setBrands(result)
  }

  useEffect(() => {
    id || slug ? getOne({ id: id, slug: slug }, fields) : getList(pagination, fields)
  }, [])

  return brands
}
