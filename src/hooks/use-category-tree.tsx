import { useEffect, useState } from 'react'
import { CategoryService } from '@uxshop/storefront-core/dist/modules/category/CategoryService'
import { CategoryTreeFields } from '@uxshop/storefront-core/dist/modules/category/CategoryTypes'

export function useCategoryTree(fields?: Array<CategoryTreeFields>) {
  const [categoryTree, setCategoryTree] = useState<any>()

  async function get(fields?: Array<CategoryTreeFields>) {
    const result = await CategoryService.getTree(fields)
    setCategoryTree(result)
  }

  useEffect(() => {
    get(fields)
  }, [])

  return categoryTree
}
