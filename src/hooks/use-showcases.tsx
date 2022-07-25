import { useEffect, useState } from 'react'
import { ShowcaseService } from '@uxshop/storefront-core/dist/modules/showcase/ShowcaseService'
import {
    ShowcaseFields,
    ShowcasePaginationFilter
} from '@uxshop/storefront-core/dist/modules/showcase/ShowcaseTypes'

interface ShowcaseHookParams {
    id?: string
    slug?: string
    pagination?: ShowcasePaginationFilter
}

interface GetOneParams extends Omit<ShowcaseHookParams, 'pagination'> {}

export function useShowcases(
    { id, slug, pagination }: ShowcaseHookParams,
    fields?: Array<ShowcaseFields>
): any {
    const [showcases, setShowcases] = useState<any>()

    async function getOne({ id, slug }: GetOneParams, fields?: Array<ShowcaseFields>) {
        const service = id ? ShowcaseService.getById : ShowcaseService.getBySlug
        const param = id ?? slug
        const result = await service(param, fields)
        setShowcases(result)
    }

    async function getList(pagination?: ShowcasePaginationFilter, fields?: Array<ShowcaseFields>) {
        const result = await ShowcaseService.getList(pagination, fields)
        setShowcases(result)
    }

    useEffect(() => {
        id || slug ? getOne({ id, slug }, fields) : getList(pagination, fields)
    }, [])

    return showcases
}
