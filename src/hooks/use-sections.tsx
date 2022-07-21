import { useEffect, useState } from 'react'
import { services, socket } from '../../core'

export function useSections(): any {
  const urlParams = new URLSearchParams(window.location.search)
  const hashPreview = urlParams.get('preview')
  const [sections, setSections] = useState<any>()

  async function getSections() {
    const result = await services.sections.getOne()

    setSections(result.data)
  }

  function onUpdate({ shopID, data }) {
    if (data) {
      setSections(data?.sections)
    }
  }

  useEffect(() => {
    getSections()
    if (hashPreview) {
      socket.create(hashPreview, onUpdate)
    }
  }, [])

  return sections
}
