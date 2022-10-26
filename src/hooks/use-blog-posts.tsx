import { useEffect, useState } from 'react'
import { BlogPostService } from '@uxshop/storefront-core'
import {
  BlogPostFields,
  BlogPostListFilter
} from '@uxshop/storefront-core/dist/modules/blog/post/BlogPostTypes'

interface BlogPostHookParams extends Omit<BlogPostListFilter, 'page'> {
  page?: number
  id?: string
  slug?: string
}

export function useBlogPosts(
  { id, slug, page, first, post_category_id, fastSearch }: BlogPostHookParams,
  fields?: Array<BlogPostFields>
): any {
  const [blogPosts, setBlogPosts] = useState<any>()

  async function getOne(id?: string, slug?: string, fields?: BlogPostFields[]) {
    const service = id ? BlogPostService.getById : BlogPostService.getBySlug
    const param = id ?? slug
    const result = await service(param, fields)
    setBlogPosts(result)
  }

  async function getList(filter?: BlogPostListFilter, fields?: BlogPostFields[]) {
    const result = await BlogPostService.getList(filter, fields)
    setBlogPosts(result)
  }

  useEffect(() => {
    id || slug
      ? getOne(id, slug, fields)
      : getList({ page, first, post_category_id, fastSearch }, fields)
  }, [id, slug, page, first, post_category_id, fastSearch, fields])

  return blogPosts
}
