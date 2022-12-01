import { useEffect, useState } from 'react'
import { CategoryService } from '@uxshop/storefront-core'
import { CategoryTreeFields } from '@uxshop/storefront-core/dist/modules/category/CategoryTypes'

export function useCategoryTree(fields?: Array<CategoryTreeFields>) {
  const [categoryTree, setCategoryTree] = useState<any>()
  const [error, setError] = useState()

  async function get(fields?: Array<CategoryTreeFields>) {
    try {
      const result = await CategoryService.getTree(fields)
      setCategoryTree(result)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    get(fields)
  }, [])

  return { categoryTree, error }
}
