import { useEffect, useState } from 'react'
import { LandingPageFields } from '../../core/modules/landing-pages/LandingPagesTypes'
import { services, socket } from '../../core'

interface LandingPagesHooksParams {
  id?: string
  slug?: string
}

export function useLandingPages({ id, slug }: LandingPagesHooksParams, fields?: Array<LandingPageFields>): any {
  const urlParams = new URLSearchParams(window.location.search)
  const hashPreview = urlParams.get('preview')
  const [landingPages, setLandingPages] = useState<any>()

  async function getOne({ id, slug }: LandingPagesHooksParams, fields?: Array<LandingPageFields>) {
    const service = id ? services.landingPages.getById : services.landingPages.getBySlug
    const param = id ?? slug
    const result = await service(param, fields)
    setLandingPages(result)
  }

  function onUpdate({ shopID, data }) {
    if (data) {
      setLandingPages(data?.landingPages)
    }
  }

  useEffect(() => {
    getOne({ id: id, slug: slug }, fields)
    if (hashPreview) {
      socket.create(hashPreview, onUpdate)
    }
  }, [])

  return landingPages
}
