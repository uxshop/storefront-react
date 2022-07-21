import { useEffect, useState } from 'react'
import { CategoryFields } from '../../core/modules/category/CategoryTypes'
import { services } from '../../core'

interface CategoryHookParams {
  id?: string
  slug?: string
}

export function useCategory({ id, slug }: CategoryHookParams, fields?: Array<CategoryFields>): any {
  const [category, setCategory] = useState<any>()

  async function getOne({ id, slug }: CategoryHookParams, fields?: Array<CategoryFields>) {
    const service = id ? services.category.getById : services.category.getBySlug
    const param = id ?? slug

    const result = await service(param, fields)

    setCategory(result)
  }

  useEffect(() => {
    getOne({ id, slug }, fields)
  }, [])

  return category
}
