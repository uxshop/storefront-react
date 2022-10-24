import { useEffect, useState } from 'react'
import { BlogCategoryService } from '@uxshop/storefront-core'
import { BlogCategoryFields } from '@uxshop/storefront-core/dist/modules/blog/category/BlogCategoryTypes'

interface BlogCategoryHookParams {
  id?: string
  slug?: string
}

export function useBlogCategories(
  { id, slug }: BlogCategoryHookParams,
  fields?: Array<BlogCategoryFields>
): any {
  const [blogCategories, setBlogCategories] = useState<any>()

  const service = BlogCategoryService

  async function getOne({ id, slug }: BlogCategoryHookParams, fields?: Array<BlogCategoryFields>) {
    const service = id ? BlogCategoryService.getById : BlogCategoryService.getBySlug
    const param = id ?? slug
    const result = await service(param, fields)
    setBlogCategories(result)
  }

  async function getList(fields?: Array<BlogCategoryFields>) {
    const result = await BlogCategoryService.getList(fields)
    setBlogCategories(result)
  }

  useEffect(() => {
    id || slug ? getOne({ id, slug }, fields) : getList(fields)
  }, [])

  return blogCategories
}
