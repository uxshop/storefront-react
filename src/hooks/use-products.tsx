import { ProductService } from '@uxshop/storefront-core'
import {
  ProductFields,
  ProductListFilter,
  Aggregator
} from '@uxshop/storefront-core/dist/modules/product/ProductTypes'
import { useCallback, useEffect, useState } from 'react'
import { HookData } from './types/HookData'

interface ProductHookParams {
  productId?: string
  slug?: string
  filter?: ProductListFilter
  agg?: Aggregator
}

export function useProducts(
  { productId, slug, agg, filter }: ProductHookParams,
  fields?: ProductFields[]
): HookData {
  const [state, setState] = useState<HookData>({
    loading: false,
    data: null,
    error: null
  })

  const getOne = useCallback(() => {
    setState(state => ({ ...state, loading: true }))
    const service = productId ? ProductService.getById : ProductService.getBySlug
    const param = productId ?? slug
    service(param, fields)
      .then(response => setState(state => ({ ...state, loading: false, data: response })))
      .catch(error => setState(state => ({ ...state, loading: false, error })))
  }, [productId, slug])

  const getList = useCallback(() => {
    setState(state => ({ ...state, loading: true }))
    ProductService.getList({ filter, agg, fields })
      .then(response => setState(state => ({ ...state, loading: false, data: response })))
      .catch(error => setState(state => ({ ...state, loading: false, error })))
  }, [filter, agg])

  useEffect(() => {
    productId || slug ? getOne() : getList()
  }, [])

  return { ...state }
}
