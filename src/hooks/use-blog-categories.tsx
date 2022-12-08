import { BlogCategoryService } from '@uxshop/storefront-core'
import { BlogCategoryFields } from '@uxshop/storefront-core/dist/modules/blog/category/BlogCategoryTypes'
import { useEffect, useState } from 'react'
import { HookData } from './types/HookData'

interface BlogCategoryHookParams {
  id?: string
  slug?: string
}

export function useBlogCategories(
  getOneFilter?: BlogCategoryHookParams,
  fields?: BlogCategoryFields[]
): any {
  const [status, setStatus] = useState<HookData>({
    loading: false,
    data: null
  })

  function getOne() {
    setStatus({ loading: true })

    const service = getOneFilter.id ? BlogCategoryService.getById : BlogCategoryService.getBySlug
    const param = getOneFilter.id ?? getOneFilter.slug

    service(param, fields)
      .then(response => setStatus({ loading: false, data: response }))
      .catch(error => setStatus({ loading: false, error }))
  }

  function getList() {
    setStatus({ loading: true })

    BlogCategoryService.getList(fields)
      .then(response => setStatus({ loading: false, data: response }))
      .catch(error => setStatus({ loading: false, error }))
  }
  useEffect(() => {
    getOneFilter?.id || getOneFilter?.slug ? getOne() : getList()
  }, [])

  return { ...status }
}
