import { SectionsService } from '@uxshop/storefront-core/dist/modules/sections/SectionsService'
import { Socket } from '@uxshop/storefront-core/dist/socket'
import { useEffect, useState } from 'react'

export function useSections(): any {
    const urlParams = new URLSearchParams(window.location.search)
    const hashPreview = urlParams.get('preview')
    const [sections, setSections] = useState<any>()

    async function getSections() {
        const result = await SectionsService.getOne()

        setSections(result.data)
    }

    function onUpdate({ data }: any) {
        if (data) {
            setSections(data?.sections)
        }
    }

    useEffect(() => {
        getSections()
        if (hashPreview) {
            Socket.create(hashPreview, onUpdate)
        }
    }, [])

    return sections
}
