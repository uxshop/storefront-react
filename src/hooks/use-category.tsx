import { useEffect, useState } from 'react'
import { CategoryService } from '@uxshop/storefront-core'
import { CategoryFields } from '@uxshop/storefront-core/dist/modules/category/CategoryTypes'

interface CategoryHookParams {
  id?: string
  slug?: string
}

export function useCategory({ id, slug }: CategoryHookParams, fields?: CategoryFields[]): any {
  function getOne({ id, slug }: CategoryHookParams, fields?: CategoryFields[]) {
    let result = {
      data: null,
      error: null
    }

    const service = id ? CategoryService.getById : CategoryService.getBySlug
    const param = id ?? slug

    service(param, fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  return getOne({ id, slug })
}
