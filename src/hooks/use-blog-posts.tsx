import { useEffect, useState } from 'react'
import { BlogPostService } from '@uxshop/storefront-core'
import {
  BlogPostFields,
  BlogPostListFilter
} from '@uxshop/storefront-core/dist/modules/blog/post/BlogPostTypes'

interface BlogPostHookParams extends Omit<BlogPostListFilter, 'page' | 'fastSearch'> {
  page?: number
  id?: string
  slug?: string
  searchTerm?: string
}

export function useBlogPosts(
  { id, slug, page, first, post_category_id, searchTerm }: BlogPostHookParams,
  fields?: Array<BlogPostFields>
): any {
  const [blogPosts, setBlogPosts] = useState<any>()

  async function getOne(id?: string, slug?: string, fields?: BlogPostFields[]) {
    const service = id ? BlogPostService.getById : BlogPostService.getBySlug
    const param = id ?? slug
    const result = await service(param, fields)
    setBlogPosts(result)
  }

  async function getList(
    filter?: BlogPostListFilter,
    searchTerm?: string,
    fields?: BlogPostFields[]
  ) {
    const fastSearch = searchTerm ? { fastSearch: { queryString: searchTerm } } : {}
    try {
      const result = await BlogPostService.getList({ ...filter, ...fastSearch }, fields)
      setBlogPosts(result)
    } catch (error) {
      setBlogPosts(null)
    }
  }

  useEffect(() => {
    id || slug
      ? getOne(id, slug, fields)
      : getList({ page, first, post_category_id }, searchTerm, fields)
  }, [id, slug, page, first, post_category_id, searchTerm, fields])

  return blogPosts
}
