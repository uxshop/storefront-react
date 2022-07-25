import { useEffect, useState } from 'react'
import { SettingsService } from '@uxshop/storefront-core/dist/modules/settings/SettingsService'
import { Socket } from '@uxshop/storefront-core/dist/socket'

export function useSettings(): any {
    const urlParams = new URLSearchParams(window.location.search)
    const hashPreview = urlParams.get('preview')
    const [settings, setSettings] = useState<any>()

    async function getSettings() {
        const result = await SettingsService.getOne()

        setSettings(result.data)
    }

    function onUpdate({ data }: any) {
        if (data) {
            setSettings(data?.settings)
        }
    }

    useEffect(() => {
        getSettings()
        if (hashPreview) {
            Socket.create(hashPreview, onUpdate)
        }
    }, [])

    return settings
}
