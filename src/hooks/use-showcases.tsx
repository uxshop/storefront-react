import { useEffect, useState } from 'react'
import { ShowcaseService } from '@uxshop/storefront-core/dist/modules/showcase/ShowcaseService'
import { ShowcaseFields } from '@uxshop/storefront-core/dist/modules/showcase/ShowcaseTypes'
import { Pagination } from '@uxshop/storefront-core/dist/types/PaginationTypes'

interface ShowcaseHookParams {
  id?: string
  slug?: string
  pagination?: Pagination
}

interface GetOneParams extends Omit<ShowcaseHookParams, 'pagination'> {}

export function useShowcases(
  { id, slug, pagination }: ShowcaseHookParams,
  fields?: Array<ShowcaseFields>
): any {
  const [showcases, setShowcases] = useState<any>()

  async function getOne({ id, slug }: GetOneParams, fields?: Array<ShowcaseFields>) {
    const service = id ? ShowcaseService.getById : ShowcaseService.getBySlug
    const param = id ?? slug
    const result = await service(param, fields)
    setShowcases(result)
  }

  async function getList(pagination?: Pagination, fields?: Array<ShowcaseFields>) {
    const result = await ShowcaseService.getList(pagination, fields)
    setShowcases(result)
  }

  useEffect(() => {
    console.log(pagination)
    id || slug ? getOne({ id, slug }, fields) : getList(pagination, fields)
  }, [pagination])

  return showcases
}
