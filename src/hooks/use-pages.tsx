import { useEffect, useState } from 'react'
import { PageFields } from '@uxshop/storefront-core/dist/modules/pages/PageTypes'
import { PagesService } from '@uxshop/storefront-core/dist/modules/pages/PagesService'

interface PageHookParams {
    id?: string
    slug?: string
}

export function usePages({ id, slug }: PageHookParams, fields?: Array<PageFields>): any {
    const [pages, setPages] = useState<any>()

    async function getOne({ id, slug }: PageHookParams, fields?: Array<PageFields>) {
        const service = id ? PagesService.getById : PagesService.getBySlug
        const param = id ?? slug
        const result = await service(param, fields)
        setPages(result)
    }

    async function getList(fields?: Array<PageFields>) {
        const result = await PagesService.getList(fields)
        setPages(result)
    }

    useEffect(() => {
        id || slug ? getOne({ id, slug }, fields) : getList(fields)
    }, [])

    return pages
}
