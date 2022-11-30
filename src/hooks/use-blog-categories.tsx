import { useEffect, useState } from 'react'
import { BlogCategoryService } from '@uxshop/storefront-core'
import { BlogCategoryFields } from '@uxshop/storefront-core/dist/modules/blog/category/BlogCategoryTypes'

interface BlogCategoryHookParams {
  id?: string
  slug?: string
}

export function useBlogCategories(
  getOneFilter?: BlogCategoryHookParams,
  fields?: BlogCategoryFields[]
): any {
  const [blogCategories, setBlogCategories] = useState<any>()
  const [error, setError] = useState()

  async function getOne({ id, slug }: BlogCategoryHookParams, fields?: BlogCategoryFields[]) {
    try {
      const service = id ? BlogCategoryService.getById : BlogCategoryService.getBySlug
      const param = id ?? slug
      const result = await service(param, fields)
      setBlogCategories(result)
    } catch (error) {
      setError(error)
    }
  }

  async function getList(fields?: BlogCategoryFields[]) {
    try {
      const result = await BlogCategoryService.getList(fields)
      setBlogCategories(result)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getOneFilter?.id || getOneFilter?.slug ? getOne(getOneFilter, fields) : getList(fields)
  }, [])

  return { blogCategories, error }
}
