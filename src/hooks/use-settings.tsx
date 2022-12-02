import { SettingsService, Socket } from '@uxshop/storefront-core'
import { SettingFilter } from '@uxshop/storefront-core/dist/modules/settings/SettingsTypes'

export function useSettings(filter: SettingFilter): any {
  const urlParams = new URLSearchParams(window.location.search)
  const hashPreview = urlParams.get('preview')

  function getSettings() {
    let result = {
      data: null,
      error: null
    }
    SettingsService.getOne(filter)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    if (hashPreview) {
      Socket.create(hashPreview, onUpdate)
    }
    return result
  }

  function onUpdate({ data }: any) {
    if (data) {
    }
  }

  return getSettings()
}
