import { useEffect, useState } from 'react'
import { MenuFields } from '@uxshop/storefront-core/dist/modules/menu/MenuTypes'
import { MenuService } from '@uxshop/storefront-core/dist/modules/menu/MenuService'

interface MenuHookParams {
    id?: string
}

export function useMenus({ id }: MenuHookParams, fields?: Array<MenuFields>): any {
    const [menus, setMenus] = useState<any>()

    async function getOneById(id: string, fields?: Array<MenuFields>) {
        const result = await MenuService.getById(id, fields)
        setMenus(result)
    }

    async function getList(fields?: Array<MenuFields>) {
        const result = await MenuService.getList(fields)
        setMenus(result)
    }

    useEffect(() => {
        id ? getOneById(id, fields) : getList(fields)
    }, [])

    return menus
}
