import { SectionsService, Socket } from '@uxshop/storefront-core'
import { SectionFilter } from '@uxshop/storefront-core/dist/modules/sections/SectionsTypes'

export function useSections(filter: SectionFilter): any {
  const urlParams = new URLSearchParams(window.location.search)
  const hashPreview = urlParams.get('preview')

  let result = {
    data: null,
    error: null
  }

  function getSections() {
    SectionsService.getOne(filter)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    if (hashPreview) {
      Socket.create(hashPreview, onUpdate)
    }
    return result
  }

  function onUpdate({ data }: any) {
    if (data) {
      result.data = data?.sections
    }
  }

  return getSections()
}
