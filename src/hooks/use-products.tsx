import { ProductService } from '@uxshop/storefront-core'
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
  fields?: ProductFields[]
): any {
  function getOne({ productId, slug }: GetOneParams, fields?: ProductFields[]) {
    let result = {
      data: null,
      error: null
    }
    const service = productId ? ProductService.getById : ProductService.getBySlug
    const param = productId ?? slug
    service(param, fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  function getList(filter?: ProductListFilter, agg?: Aggregator, fields?: ProductFields[]) {
    let result = {
      data: null,
      error: null
    }
    ProductService.getList({ filter, agg, fields })
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  return productId || slug ? getOne({ productId, slug }, fields) : getList(filter, agg, fields)
}
