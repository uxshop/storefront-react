import { useEffect, useState } from 'react'
import { MenuFields } from '../../core/modules/menu/MenuTypes'
import { services } from '../../core'

interface MenuHookParams {
  id?: string
}

export function useMenus({ id }: MenuHookParams, fields?: Array<MenuFields>): any {
  const [menus, setMenus] = useState<any>()

  async function getOneById(id: string, fields?: Array<MenuFields>) {
    const result = await services.menu.getById(id, fields)
    setMenus(result)
  }

  async function getList(fields?: Array<MenuFields>) {
    const result = await services.menu.getList(fields)
    setMenus(result)
  }

  useEffect(() => {
    id ? getOneById(id, fields) : getList(fields)
  }, [])

  return menus
}
