import { useEffect, useState } from 'react'
import { CategoryService } from '@uxshop/storefront-core'
import { CategoryFields } from '@uxshop/storefront-core/dist/modules/category/CategoryTypes'

interface CategoryHookParams {
  id?: string
  slug?: string
}

export function useCategory({ id, slug }: CategoryHookParams, fields?: Array<CategoryFields>): any {
  const [category, setCategory] = useState<any>()

  async function getOne({ id, slug }: CategoryHookParams, fields?: Array<CategoryFields>) {
    const service = id ? CategoryService.getById : CategoryService.getBySlug
    const param = id ?? slug

    const result = await service(param, fields)

    setCategory(result)
  }

  useEffect(() => {
    getOne({ id, slug }, fields)
  }, [])

  return category
}
