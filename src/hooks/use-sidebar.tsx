import { SidebarService } from '@uxshop/storefront-core'
interface SidebarHookParams {
  id: number
  type: string
  name: string
}

export function useSidebar(sidebarFilter?: Array<SidebarHookParams>): any {
  function get(sidebarFilter?: Array<SidebarHookParams>) {
    let result = {
      data: null,
      error: null
    }

    SidebarService.get(sidebarFilter)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  return get(sidebarFilter)
}
