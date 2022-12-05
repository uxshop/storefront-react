import { ScriptsService } from '@uxshop/storefront-core'
import { ScriptFields } from '@uxshop/storefront-core/dist/modules/scripts/ScriptsTypes'
interface ScriptsHookParam {
  page?: string
  location?: string
}

export function useScripts({ page, location }: ScriptsHookParam, fields?: ScriptFields[]): any {
  function getScriptsByFilter({ page, location }: ScriptsHookParam, fields?: ScriptFields[]) {
    let result = {
      data: null,
      error: null
    }

    const service = page ? ScriptsService.getListByPage : ScriptsService.getListByLocation
    const param = page ?? location

    service(param, fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  function getAllScripts(fields?: ScriptFields[]) {
    let result = {
      data: null,
      error: null
    }

    ScriptsService.getList(fields)
      .then(response => (result.data = response))
      .catch(error => (result.error = error))

    return result
  }

  return page || location ? getScriptsByFilter({ page, location }, fields) : getAllScripts(fields)
}
