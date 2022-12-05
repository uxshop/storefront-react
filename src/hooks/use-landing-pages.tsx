import { LandingPagesService, Socket } from '@uxshop/storefront-core'
import { LandingPageFields } from '@uxshop/storefront-core/dist/modules/landing-pages/LandingPagesTypes'

interface LandingPagesHooksParams {
  id?: string
  slug?: string
}

export function useLandingPages(
  { id, slug }: LandingPagesHooksParams,
  fields?: LandingPageFields[]
): any {
  const urlParams = new URLSearchParams(window.location.search)
  const hashPreview = urlParams.get('preview')

  let result = {
    data: null,
    error: null
  }

  function getOne({ id, slug }: LandingPagesHooksParams, fields?: LandingPageFields[]) {
    const service = id ? LandingPagesService.getById : LandingPagesService.getBySlug
    const param = id ?? slug

    service(param, fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    if (hashPreview) {
      Socket.create(hashPreview, onUpdate)
    }

    return result
  }

  function onUpdate({ data }: any) {
    if (data) {
      result.data = data?.landingPages
    }
  }

  return getOne({ id: id, slug: slug }, fields)
}
