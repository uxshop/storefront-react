import { useEffect, useState } from 'react'
import { SidebarService } from '@uxshop/storefront-core'
import { OptionsGetSidebar } from '@uxshop/storefront-core/dist/modules/sidebar/SidebarTypes'
import { HookData } from './types/HookData'

interface SidebarHookParams extends OptionsGetSidebar {}

export function useSidebar(sidebarFilter?: SidebarHookParams): HookData {
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
