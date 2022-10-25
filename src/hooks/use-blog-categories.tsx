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

  async function getOne({ id, slug }: BlogCategoryHookParams, fields?: BlogCategoryFields[]) {
    const service = id ? BlogCategoryService.getById : BlogCategoryService.getBySlug
    const param = id ?? slug
    const result = await service(param, fields)
    setBlogCategories(result)
  }

  async function getList(fields?: BlogCategoryFields[]) {
    const result = await BlogCategoryService.getList(fields)
    setBlogCategories(result)
  }

  useEffect(() => {
    getOneFilter ? getOne(getOneFilter, fields) : getList(fields)
  }, [])

  return blogCategories
}
