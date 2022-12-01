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
  { id, slug, page, first, postCategoryId, searchTerm }: BlogPostHookParams,
  fields?: Array<BlogPostFields>
): any {
  const [blogPosts, setBlogPosts] = useState<any>()
  const [error, setError] = useState()

  async function getOne(id?: string, slug?: string, fields?: BlogPostFields[]) {
    try {
      const service = id ? BlogPostService.getById : BlogPostService.getBySlug
      const param = id ?? slug
      const result = await service(param, fields)
      setBlogPosts(result)
    } catch (error) {
      setError(error)
    }
  }

  async function getList(
    filter?: BlogPostListFilter,
    searchTerm?: string,
    fields?: BlogPostFields[]
  ) {
    try {
      const fastSearch = searchTerm ? { fastSearch: { queryString: searchTerm } } : {}
      const result = await BlogPostService.getList({ ...filter, ...fastSearch }, fields)
      setBlogPosts(result)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    id || slug
      ? getOne(id, slug, fields)
      : getList({ page, first, postCategoryId }, searchTerm, fields)
  }, [id, slug, page, first, postCategoryId, searchTerm, fields])

  return { blogPosts, error }
}
