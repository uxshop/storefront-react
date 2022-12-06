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
  function getOne() {
    let result = {
      data: null,
      error: null
    }
    const service = getOneFilter.id ? BlogCategoryService.getById : BlogCategoryService.getBySlug
    const param = getOneFilter.id ?? getOneFilter.slug

    service(param, fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  function getList() {
    let result = {
      data: null,
      error: null
    }

    BlogCategoryService.getList(fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  return getOneFilter?.id || getOneFilter?.slug ? getOne() : getList()
}
