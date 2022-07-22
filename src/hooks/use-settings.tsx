import { useEffect, useState } from 'react'
import { services, socket } from '../../core'

export function useSettings(): any {
  const urlParams = new URLSearchParams(window.location.search)
  const hashPreview = urlParams.get('preview')
  const [settings, setSettings] = useState<any>()

  async function getSettings() {
    const result = await services.settings.getOne()

    setSettings(result.data)
  }

  function onUpdate({ shopID, data }) {
    if (data) {
      setSettings(data?.settings)
    }
  }

  useEffect(() => {
    getSettings()
    if (hashPreview) {
      socket.create(hashPreview, onUpdate)
    }
  }, [])

  return settings
}
