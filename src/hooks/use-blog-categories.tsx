import { useEffect, useState } from 'react'
import { HookData } from './types/HookData'
import { BlogCategoryService } from '@uxshop/storefront-core'
import { BlogCategoryFields } from '@uxshop/storefront-core/dist/modules/blog/category/BlogCategoryTypes'

interface BlogCategoryHookParams {
  id?: string
  slug?: string
}

export function useBlogCategories(
  getOneFilter?: BlogCategoryHookParams,
  fields?: BlogCategoryFields[]
) {
  const [state, setState] = useState<HookData>({
    loading: false,
    data: null,
    error: null
  })

  function getOne() {
    setState(state => ({ ...state, loading: true }))

    const service = getOneFilter.id ? BlogCategoryService.getById : BlogCategoryService.getBySlug
    const param = getOneFilter.id ?? getOneFilter.slug

    service(param, fields)
      .then(response => setState(state => ({ ...state, loading: false, data: response })))
      .catch(error => setState(state => ({ ...state, loading: false, error })))
  }

  function getList() {
    setState(state => ({ ...state, loading: true }))

    BlogCategoryService.getList(fields)
      .then(response => setState(state => ({ ...state, loading: false, data: response })))
      .catch(error => setState(state => ({ ...state, loading: false, error })))
  }
  useEffect(() => {
    getOneFilter?.id || getOneFilter?.slug ? getOne() : getList()
  }, [getOneFilter.id, getOneFilter.slug])

  return { ...state }
}
