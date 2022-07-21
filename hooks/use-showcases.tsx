import { useEffect, useState } from 'react'
import { ShowcaseFields, ShowcasePaginationFilter } from '../../core/modules/showcase/ShowcaseTypes'
import { services } from '../../core'

interface ShowcaseHookParams {
  id?: string
  slug?: string
  pagination?: ShowcasePaginationFilter
}

interface GetOneParams extends Omit<ShowcaseHookParams, 'pagination'> {}

export function useShowcases({ id, slug, pagination }: ShowcaseHookParams, fields?: Array<ShowcaseFields>): any {
  const [showcases, setShowcases] = useState<any>()

  async function getOne({ id, slug }: GetOneParams, fields?: Array<ShowcaseFields>) {
    const service = id ? services.showcase.getById : services.showcase.getBySlug
    const param = id ?? slug
    const result = await service(param, fields)
    setShowcases(result)
  }

  async function getList(pagination?: ShowcasePaginationFilter, fields?: Array<ShowcaseFields>) {
    const result = await services.showcase.getList(pagination, fields)
    setShowcases(result)
  }

  useEffect(() => {
    id || slug ? getOne({ id, slug }, fields) : getList(pagination, fields)
  }, [])

  return showcases
}
