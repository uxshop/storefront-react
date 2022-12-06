import { SidebarService } from '@uxshop/storefront-core'
import { useEffect } from 'react'
interface SidebarHookParams {
  id: number
  type: string
  name: string
}

export function useSidebar(sidebarFilter?: Array<SidebarHookParams>): any {
  let result = {
    data: null,
    error: null
  }

  function get() {
    SidebarService.get(sidebarFilter)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }
  useEffect(() => {
    get()
  }, [sidebarFilter])
  return result
}
