import { useEffect, useState } from 'react'
import { HookData } from './types/HookData'
import { LandingPagesService, Socket } from '@uxshop/storefront-core'
import { LandingPageFields } from '@uxshop/storefront-core/dist/modules/landing-pages/LandingPagesTypes'

interface LandingPagesHooksParams {
  id?: string
  slug?: string
}

export function useLandingPages(
  { id, slug }: LandingPagesHooksParams,
  fields?: LandingPageFields[]
): any {
  const urlParams = new URLSearchParams(window.location.search)
  const hashPreview = urlParams.get('preview')

  const [state, setState] = useState<HookData>({
    loading: false,
    data: null,
    error: null
  })

  function getOne() {
    setState(state => ({ ...state, loading: true }))

    const service = id ? LandingPagesService.getById : LandingPagesService.getBySlug
    const param = id ?? slug

    service(param, fields)
      .then(response => setState(state => ({ ...state, loading: false, data: response })))
      .catch(error => setState(state => ({ ...state, loading: false, error })))

    if (hashPreview) {
      Socket.create(hashPreview, onUpdate)
    }
  }

  function onUpdate({ data }: any) {
    if (data.landingPage) {
      setState(state => ({ ...state, loading: false, data: data?.landingPage }))
    }
  }

  useEffect(() => {
    getOne()
  }, [])

  return { ...state }
}
