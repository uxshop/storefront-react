import { useEffect, useState } from 'react'
import { PageFields } from '../../core/modules/pages/PageTypes'
import { services } from '../../core'

interface PageHookParams {
  id?: string
  slug?: string
}

export function usePages({ id, slug }: PageHookParams, fields?: Array<PageFields>): any {
  const [pages, setPages] = useState<any>()

  async function getOne({ id, slug }: PageHookParams, fields?: Array<PageFields>) {
    const service = id ? services.pages.getById : services.pages.getBySlug
    const param = id ?? slug
    const result = await service(param, fields)
    setPages(result)
  }

  async function getList(fields?: Array<PageFields>) {
    const result = await services.pages.getList(fields)
    setPages(result)
  }

  useEffect(() => {
    id || slug ? getOne({ id, slug }, fields) : getList(fields)
  }, [])

  return pages
}
