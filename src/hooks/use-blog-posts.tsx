import { useCallback, useEffect, useState } from 'react'
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
  const [state, setState] = useState<HookData>({
    loading: false,
    data: null,
    error: null
  })

  const getOne = useCallback(() => {
    setState({ loading: true })

    const service = id ? BlogPostService.getById : BlogPostService.getBySlug
    const param = id ?? slug
    service(param, fields)
      .then(response => setState(state => ({ ...state, loading: false, data: response })))
      .catch(error => setState(state => ({ ...state, loading: false, error })))
  }, [id, slug])

  const getList = useCallback(() => {
    setState({ loading: true })

    const filter = { page, first, postCategoryId }
    const fastSearch = searchTerm ? { fastSearch: { queryString: searchTerm } } : {}

    BlogPostService.getList({ ...filter, ...fastSearch }, fields)
      .then(response => setState(state => ({ ...state, loading: false, data: response })))
      .catch(error => setState(state => ({ ...state, loading: false, error })))
  }, [fields])

  useEffect(() => {
    id || slug ? getOne() : getList()
  })
  return { ...state }
}
