import { useEffect, useState } from 'react'
import { HookData } from './types/HookData'
import { PagesService } from '@uxshop/storefront-core'
import { PageFields } from '@uxshop/storefront-core/dist/modules/pages/PageTypes'

interface PageHookParams {
  id?: string
  slug?: string
}

export function usePages({ id, slug }: PageHookParams, fields?: PageFields[]): any {
  const [state, setState] = useState<HookData>({
    loading: false,
    data: null,
    error: null
  })

  function getOne() {
    setState(state => ({ ...state, loading: true }))

    const service = id ? PagesService.getById : PagesService.getBySlug
    const param = id ?? slug

    service(param, fields)
      .then(response => setState(state => ({ ...state, loading: false, data: response })))
      .catch(error => setState(state => ({ ...state, loading: false, error })))
  }

  function getList() {
    setState(state => ({ ...state, loading: true }))

    PagesService.getList(fields)
      .then(response => setState(state => ({ ...state, loading: false, data: response })))
      .catch(error => setState(state => ({ ...state, loading: false, error })))
  }

  useEffect(() => {
    id || slug ? getOne() : getList()
  }, [])

  return { ...state }
}
