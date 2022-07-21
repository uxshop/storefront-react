import { useEffect, useState } from 'react'
import { BlogCategoryFields } from '../../core/modules/blog/category/BlogCategoryTypes'
import { services } from '../../core'

interface BlogCategoryHookParams {
  id?: string
  slug?: string
}

export function useBlogCategories({ id, slug }: BlogCategoryHookParams, fields?: Array<BlogCategoryFields>): any {
  const [blogCategories, setBlogCategories] = useState<any>()

  async function getOne({ id, slug }: BlogCategoryHookParams, fields?: Array<BlogCategoryFields>) {
    const service = id ? services.blogCategory.getById : services.blogCategory.getBySlug
    const param = id ?? slug
    const result = await service(param, fields)
    setBlogCategories(result)
  }

  async function getList(fields?: Array<BlogCategoryFields>) {
    const result = await services.blogCategory.getList(fields)
    setBlogCategories(result)
  }

  useEffect(() => {
    id || slug ? getOne({ id, slug }, fields) : getList(fields)
  }, [])

  return blogCategories
}
