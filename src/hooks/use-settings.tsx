import { useEffect, useState } from 'react'
import { SettingsService, Socket } from '@uxshop/storefront-core'
import { SettingFilter } from '@uxshop/storefront-core/dist/modules/settings/SettingsTypes'

export function useSettings(filter: SettingFilter): any {
  const urlParams = new URLSearchParams(window.location.search)
  const hashPreview = urlParams.get('preview')
  const [settings, setSettings] = useState<any>()

  async function getSettings() {
    const result = await SettingsService.getOne(filter)

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
