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
  fields?: BlogPostFields[]
): any {
  function getOne(id?: string, slug?: string, fields?: BlogPostFields[]) {
    let result = {
      data: null,
      error: null
    }

    const service = id ? BlogPostService.getById : BlogPostService.getBySlug
    const param = id ?? slug
    service(param, fields)
      .then(reponse => (result.data = reponse))
      .catch(error => (result.error = error))

    return result
  }

  function getList(filter?: BlogPostListFilter, searchTerm?: string, fields?: BlogPostFields[]) {
    let result = {
      data: null,
      error: null
    }
    const fastSearch = searchTerm ? { fastSearch: { queryString: searchTerm } } : {}

    BlogPostService.getList({ ...filter, ...fastSearch }, fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  return getList({ page, first, postCategoryId }, searchTerm, fields), getOne(id, slug, fields)
}
