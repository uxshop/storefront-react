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
  function getOne() {
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

  function getList() {
    let result = {
      data: null,
      error: null
    }

    const filter = { page, first, postCategoryId }
    const fastSearch = searchTerm ? { fastSearch: { queryString: searchTerm } } : {}

    BlogPostService.getList({ ...filter, ...fastSearch }, fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  return id || slug ? getOne() : getList()
}
