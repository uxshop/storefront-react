import { useEffect, useState } from 'react'
import { BlogPostService } from '@uxshop/storefront-core'
import {
  BlogPostFields,
  BlogPostListFilter
} from '@uxshop/storefront-core/dist/modules/blog/post/BlogPostTypes'
import { HookData } from './types/HookData'

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
  const [status, setStatus] = useState<HookData>({
    loading: false,
    data: null
  })

  function getOne() {
    setStatus({ loading: true })

    const service = id ? BlogPostService.getById : BlogPostService.getBySlug
    const param = id ?? slug
    service(param, fields)
      .then(response => setStatus({ loading: false, data: response }))
      .catch(error => setStatus({ loading: false, error }))
  }

  function getList() {
    setStatus({ loading: true })

    const filter = { page, first, postCategoryId }
    const fastSearch = searchTerm ? { fastSearch: { queryString: searchTerm } } : {}

    BlogPostService.getList({ ...filter, ...fastSearch }, fields)
      .then(response => setStatus({ loading: false, data: response }))
      .catch(error => setStatus({ loading: false, error }))
  }

  useEffect(() => {
    id || slug ? getOne() : getList()
  })
  return { ...status }
}
