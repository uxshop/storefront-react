import { SectionsService, Socket } from '@uxshop/storefront-core'
import { SectionFilter } from '@uxshop/storefront-core/dist/modules/sections/SectionsTypes'
import { useEffect, useState } from 'react'
import { HookData } from './types/HookData'

export function useSections(filter: SectionFilter): HookData {
  const [status, setStatus] = useState<HookData>({
    loading: false
  })
  const urlParams = new URLSearchParams(window.location.search)
  const hashPreview = urlParams.get('preview')

  function getSections() {
    setStatus({ loading: true })
    SectionsService.getOne(filter)
      .then(response => {
        setStatus({ loading: false, data: response })
      })
      .catch(error => {
        setStatus({ loading: false, error })
      })

    if (hashPreview) {
      Socket.create(hashPreview, onUpdate)
    }
  }

  function onUpdate({ data }: any) {
    if (data) {
      setStatus({ loading: false, data })
    }
  }

  useEffect(() => {
    getSections()
  }, [])

  return { ...status }
}
