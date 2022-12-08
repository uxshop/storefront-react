import { useEffect, useState } from 'react'
import { SettingsService, Socket } from '@uxshop/storefront-core'
import { SettingFilter } from '@uxshop/storefront-core/dist/modules/settings/SettingsTypes'
import { HookData } from './types/HookData'

export function useSettings(filter: SettingFilter): HookData {
  const urlParams = new URLSearchParams(window.location.search)
  const hashPreview = urlParams.get('preview')
  const [status, setStatus] = useState<HookData>({
    loading: false
  })

  async function getSettings() {
    setStatus({ loading: true })
    SettingsService.getOne(filter)
      .then(response => {
        setStatus({ loading: false, data: response })
      })
      .catch(error => setStatus({ loading: false, error }))
  }

  function onUpdate({ data }: any) {
    if (data) {
      setStatus({ loading: false, data })
    }
  }

  useEffect(() => {
    getSettings()
    if (hashPreview) {
      Socket.create(hashPreview, onUpdate)
    }
  }, [])

  return { ...status }
}
