import { LandingPagesService } from '@uxshop/storefront-core/dist/modules/landing-pages/LandingPagesService'
import { LandingPageFields } from '@uxshop/storefront-core/dist/modules/landing-pages/LandingPagesTypes'
import { Socket } from '@uxshop/storefront-core/dist/socket'
import { useEffect, useState } from 'react'

interface LandingPagesHooksParams {
    id?: string
    slug?: string
}

export function useLandingPages(
    { id, slug }: LandingPagesHooksParams,
    fields?: Array<LandingPageFields>
): any {
    const urlParams = new URLSearchParams(window.location.search)
    const hashPreview = urlParams.get('preview')
    const [landingPages, setLandingPages] = useState<any>()

    async function getOne(
        { id, slug }: LandingPagesHooksParams,
        fields?: Array<LandingPageFields>
    ) {
        const service = id ? LandingPagesService.getById : LandingPagesService.getBySlug
        const param = id ?? slug
        const result = await service(param, fields)
        setLandingPages(result)
    }

    function onUpdate({ data }: any) {
        if (data) {
            setLandingPages(data?.landingPages)
        }
    }

    useEffect(() => {
        getOne({ id: id, slug: slug }, fields)
        if (hashPreview) {
            Socket.create(hashPreview, onUpdate)
        }
    }, [])

    return landingPages
}
