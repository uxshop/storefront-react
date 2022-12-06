import { BlogPostService } from '@uxshop/storefront-core'
import {
  BlogPostFields,
  BlogPostListFilter
} from '@uxshop/storefront-core/dist/modules/blog/post/BlogPostTypes'
import { useEffect } from 'react'

interface BlogPostHookParams extends Omit<BlogPostListFilter, 'page' | 'fastSearch'> {
  page?: number
  id?: string
  slug?: string
  searchTerm?: string
}

export function useBlogPosts(
  { id, slug, page, first, postCategoryId, searchTerm }: BlogPostHookParams,
  fields?: BlogPostFields[]
): any {
  let result = {
    data: null,
    error: null
  }

  function getOne() {
    const service = id ? BlogPostService.getById : BlogPostService.getBySlug
    const param = id ?? slug
    service(param, fields)
      .then(reponse => (result.data = reponse))
      .catch(error => (result.error = error))

    return result
  }

  function getList() {
    const filter = { page, first, postCategoryId }
    const fastSearch = searchTerm ? { fastSearch: { queryString: searchTerm } } : {}

    BlogPostService.getList({ ...filter, ...fastSearch }, fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  useEffect(() => {
    id || slug ? getOne() : getList()
  }, [id, slug, page, first, postCategoryId, searchTerm, fields])

  return result
}
