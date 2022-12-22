import { useEffect, useState } from 'react'
import { HookData } from './types/HookData'
import { SettingsService, Socket } from '@uxshop/storefront-core'
import { SettingFilter } from '@uxshop/storefront-core/dist/modules/settings/SettingsTypes'

export function useSettings(filter: SettingFilter): HookData {
  const urlParams = new URLSearchParams(window.location.search)
  const hashPreview = urlParams.get('preview')
  const [state, setState] = useState<HookData>({
    loading: false,
    data: null,
    error: null
  })

  async function getSettings() {
    setState(state => ({ ...state, loading: true }))

    SettingsService.getOne(filter)
      .then(response => {
        setState({ ...state, loading: false, data: response })
      })
      .catch(error => setState({ ...state, loading: false, error }))
  }

  function onUpdate({ data }: any) {
    if (data.settings) {
      setState({ ...state, loading: false, data: data.settings })
    }
  }

  useEffect(() => {
    getSettings()
    if (hashPreview) {
      Socket.create(hashPreview, onUpdate)
    }
  }, [])

  return { ...state }
}
