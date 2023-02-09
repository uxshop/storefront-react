import { useEffect, useState } from 'react'
import { HookData } from './types/HookData'
import { SectionsService, Socket } from '@uxshop/storefront-core'
import { SectionFilter } from '@uxshop/storefront-core/dist/modules/sections/SectionsTypes'

export function useSections(filter: SectionFilter): HookData {
  const [state, setState] = useState<HookData>({
    loading: false,
    data: null,
    error: null
  })
  const urlParams = new URLSearchParams(window.location.search)
  const hashPreview = urlParams.get('preview')

  function getSections() {
    setState(state => ({ ...state, loading: true }))
    SectionsService.getOne(filter)
      .then(response => {
        setState({ ...state, loading: false, data: response })
      })
      .catch(error => {
        setState({ ...state, loading: false, error })
      })

    if (hashPreview) {
      Socket.create(hashPreview, onUpdate)
    }
  }

  function onUpdate({ data }: any) {
    if (data.sections) {
      setState({ ...state, loading: false, data: data.sections })
    }
  }

  useEffect(() => {
    getSections()
  }, [])

  return { ...state }
}
