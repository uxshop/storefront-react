import { useEffect, useState } from 'react'
import { SidebarService } from '@uxshop/storefront-core/dist/modules/sidebar/SidebarService'
interface SidebarHookParams {
  id: number
  type: string
  name: string
}

export function useSidebar(sidebarFilter?: Array<SidebarHookParams>): any {
  const [sidebar, setSidebar] = useState<any>()

  async function get(sidebarFilter?: Array<SidebarHookParams>) {
    const result = await SidebarService.get(sidebarFilter)
    setSidebar(result)
  }

  useEffect(() => {
    get(sidebarFilter)
  }, [])

  return sidebar
}
