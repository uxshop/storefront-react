import { BlogCategoryService } from '@uxshop/storefront-core'
import { BlogCategoryFields } from '@uxshop/storefront-core/dist/modules/blog/category/BlogCategoryTypes'

interface BlogCategoryHookParams {
  id?: string
  slug?: string
}

export function useBlogCategories(
  getOneFilter?: BlogCategoryHookParams,
  fields?: BlogCategoryFields[]
): any {
  function getOne({ id, slug }: BlogCategoryHookParams, fields?: BlogCategoryFields[]) {
    let result = {
      data: null,
      error: null
    }
    const service = id ? BlogCategoryService.getById : BlogCategoryService.getBySlug
    const param = id ?? slug

    service(param, fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  function getList(fields?: BlogCategoryFields[]) {
    let result = {
      data: null,
      error: null
    }

    BlogCategoryService.getList(fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  return { getOne: getOne(getOneFilter, fields), getList: getList(fields) }
}
