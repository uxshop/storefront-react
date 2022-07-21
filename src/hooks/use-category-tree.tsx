import { useEffect, useState } from 'react'
import { CategoryTreeFields } from '../../core/modules/category/CategoryTypes'
import { services } from '../../core'

interface CategoryTreeHookParams {
  id?: string
  slug?: string
}

export function useCategoryTree({ id, slug }: CategoryTreeHookParams, fields?: Array<CategoryTreeFields>): any {
  const [categoryTree, setCategoryTree] = useState<any>()

  async function getOne({ id, slug }: CategoryTreeHookParams, fields?: Array<CategoryTreeFields>) {
    const service = id ? services.category.getTreeById : services.category.getTreeBySlug
    const param = id ?? slug

    const result = await service(param, fields)

    setCategoryTree(result)
  }

  useEffect(() => {
    getOne({ id, slug }, fields)
  }, [])

  return categoryTree
}
