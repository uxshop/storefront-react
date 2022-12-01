import { useEffect, useState } from 'react'
import { CategoryService } from '@uxshop/storefront-core'
import { CategoryFields } from '@uxshop/storefront-core/dist/modules/category/CategoryTypes'

interface CategoryHookParams {
  id?: string
  slug?: string
}

export function useCategory({ id, slug }: CategoryHookParams, fields?: Array<CategoryFields>): any {
  const [category, setCategory] = useState<any>()
  const [error, setError] = useState()
  async function getOne({ id, slug }: CategoryHookParams, fields?: Array<CategoryFields>) {
    try {
      const service = id ? CategoryService.getById : CategoryService.getBySlug
      const param = id ?? slug

      const result = await service(param, fields)

      setCategory(result)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getOne({ id, slug }, fields)
  }, [])

  return { data: category, errors: error }
}
