import { useEffect, useState } from 'react'
import { BrandService } from '@uxshop/storefront-core'
import { BrandFields } from '@uxshop/storefront-core/dist/modules/brand/BrandTypes'
import { PaginationFilter } from '@uxshop/storefront-core/dist/types/PaginationTypes'
import { HookData } from './types/HookData'

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
  const [status, setStatus] = useState<HookData>({
    loading: false,
    data: null
  })

  function getOne({ id, slug }: GetOneParams, fields?: BrandFields[]) {
    setStatus({ loading: true })

    const service = id ? BrandService.getById : BrandService.getBySlug
    const param = id ?? slug

    service(param, fields)
      .then(response => setStatus({ loading: false, data: response }))
      .catch(error => setStatus({ loading: false, error }))
  }

  function getList(pagination?: PaginationFilter, fields?: BrandFields[]) {
    setStatus({ loading: true })

    BrandService.getList(pagination, fields)
      .then(response => setStatus({ loading: false, data: response }))
      .catch(error => setStatus({ loading: false, error }))
  }

  useEffect(() => {
    id || slug ? getOne({ id: id, slug: slug }, fields) : getList(pagination, fields)
  }, [])

  return { ...status }
}
