import { useEffect, useState } from 'react'
import { HookData } from './types/HookData'
import { SidebarService } from '@uxshop/storefront-core'

interface SidebarHookParams {
  id: number
  type: string
  name: string
}

export function useSidebar(sidebarFilter?: SidebarHookParams[]): HookData {
  const [state, setState] = useState<HookData>({
    loading: false,
    data: null,
    error: null
  })

  function get() {
    setState(state => ({ ...state, loading: true }))
    SidebarService.get(sidebarFilter)
      .then(response => {
        setState(state => ({ ...state, loading: false, data: response }))
      })
      .catch(error => setState(state => ({ ...state, loading: false, error })))
  }
  useEffect(() => {
    get()
  }, [])

  return { ...state }
}
