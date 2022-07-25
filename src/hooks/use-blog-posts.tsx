import { BlogPostService } from '@uxshop/storefront-core/dist/modules/blog/post/BlogPostService'
import { BlogPostFields } from '@uxshop/storefront-core/dist/modules/blog/post/BlogPostTypes'
import { PaginationFilter } from '@uxshop/storefront-core/dist/types/PaginationTypes'
import { useEffect, useState } from 'react'

interface BlogPostHookParams {
    id?: string
    slug?: string
    pagination?: PaginationFilter
}

export function useBlogPosts(
    { id, slug, pagination }: BlogPostHookParams,
    fields?: Array<BlogPostFields>
): any {
    const [blogPosts, setBlogPosts] = useState<any>()

    async function getOne({ id, slug }: BlogPostHookParams, fields?: Array<BlogPostFields>) {
        const service = id ? BlogPostService.getById : BlogPostService.getBySlug
        const param = id ?? slug
        const result = await service(param, fields)
        setBlogPosts(result)
    }

    async function getList(pagination?: PaginationFilter, fields?: Array<BlogPostFields>) {
        const result = await BlogPostService.getList(pagination, fields)
        setBlogPosts(result)
    }

    useEffect(() => {
        id || slug ? getOne({ id, slug }, fields) : getList(pagination, fields)
    }, [])

    return blogPosts
}
