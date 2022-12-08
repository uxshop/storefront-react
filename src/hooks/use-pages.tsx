import { PagesService } from '@uxshop/storefront-core'
import { PageFields } from '@uxshop/storefront-core/dist/modules/pages/PageTypes'
import { useEffect, useState } from 'react'
import { HookData } from './types/HookData'

interface PageHookParams {
  id?: string
  slug?: string
}

export function usePages({ id, slug }: PageHookParams, fields?: PageFields[]): any {
  const [status, setStatus] = useState<HookData>({
    loading: false,
    data: null
  })

  function getOne() {
    setStatus({ loading: true })

    const service = id ? PagesService.getById : PagesService.getBySlug
    const param = id ?? slug

    service(param, fields)
      .then(response => setStatus({ loading: false, data: response }))
      .catch(error => setStatus({ loading: false, error }))
  }

  function getList() {
    setStatus({ loading: true })

    PagesService.getList(fields)
      .then(response => setStatus({ loading: false, data: response }))
      .catch(error => setStatus({ loading: false, error }))
  }

  useEffect(() => {
    id || slug ? getOne() : getList()
  }, [])

  return { ...status }
}
