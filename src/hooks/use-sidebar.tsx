import { useEffect, useState } from 'react'
import { SidebarService } from '@uxshop/storefront-core'
import { nullable } from '@uxshop/storefront-core/src/types/HelpersTypes'
import { HookData } from './types/HookData'

interface SidebarHookParams {
  id: number
  type: string
  name: string
}

export function useSidebar(sidebarFilter?: nullable<SidebarHookParams[]>): HookData {
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
