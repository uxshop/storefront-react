import { useEffect, useState } from 'react'
import { ProductService } from '@uxshop/storefront-core/dist/modules/product/ProductService'
import {
  ProductFields,
  ProductListFilter,
  Aggregator
} from '@uxshop/storefront-core/dist/modules/product/ProductTypes'

interface ProductHookParams {
  productId?: string
  slug?: string
  filter?: ProductListFilter
  agg?: Aggregator
}

interface GetOneParams extends Omit<ProductHookParams, 'pagination'> {}

export function useProducts(
  { productId, slug, agg, filter }: ProductHookParams,
  fields?: Array<ProductFields>
): any {
  const [products, setProducts] = useState<any>()

  async function getOne({ productId, slug }: GetOneParams, fields?: Array<ProductFields>) {
    const service = productId ? ProductService.getById : ProductService.getBySlug
    const param = productId ?? slug
    const result = await service(param, fields)
    setProducts(result)
  }

  async function getList(
    filter?: ProductListFilter,
    agg?: Aggregator,
    fields?: Array<ProductFields>
  ) {
    const result = await ProductService.getList({ filter, agg, fields })
    setProducts(result)
  }

  useEffect(() => {
    productId || slug ? getOne({ productId, slug }, fields) : getList(filter, agg, fields)
  }, [filter])

  return products
}
