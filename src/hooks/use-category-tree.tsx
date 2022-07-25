import { CategoryService } from '@uxshop/storefront-core/dist/modules/category/CategoryService'
import { CategoryTreeFields } from '@uxshop/storefront-core/dist/modules/category/CategoryTypes'
import { useEffect, useState } from 'react'

interface CategoryTreeHookParams {
    id?: string
    slug?: string
}

export function useCategoryTree(
    { id, slug }: CategoryTreeHookParams,
    fields?: Array<CategoryTreeFields>
): any {
    const [categoryTree, setCategoryTree] = useState<any>()

    async function getOne(
        { id, slug }: CategoryTreeHookParams,
        fields?: Array<CategoryTreeFields>
    ) {
        const service = id ? CategoryService.getTreeById : CategoryService.getTreeBySlug
        const param = id ?? slug

        const result = await service(param, fields)

        setCategoryTree(result)
    }

    useEffect(() => {
        getOne({ id, slug }, fields)
    }, [])

    return categoryTree
}
