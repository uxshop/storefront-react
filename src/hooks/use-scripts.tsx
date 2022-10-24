import { useEffect, useState } from 'react'
import { ScriptsService } from '@uxshop/storefront-core'
import { ScriptFields } from '@uxshop/storefront-core/dist/modules/scripts/ScriptsTypes'
interface ScriptsHookParam {
  page?: string
  location?: string
}

export function useScripts(
  { page, location }: ScriptsHookParam,
  fields?: Array<ScriptFields>
): any {
  const [scripts, setScripts] = useState<any>()

  async function getScriptsByFilter(
    { page, location }: ScriptsHookParam,
    fields?: Array<ScriptFields>
  ) {
    const service = page ? ScriptsService.getListByPage : ScriptsService.getListByLocation
    const param = page ?? location

    const result = await service(param, fields)
    setScripts(result)
  }

  async function getAllScripts(fields?: Array<ScriptFields>) {
    const result = await ScriptsService.getList(fields)
    setScripts(result)
  }

  useEffect(() => {
    page || location ? getScriptsByFilter({ page, location }, fields) : getAllScripts(fields)
  }, [])

  return scripts
}
