import { useEffect, useState } from 'react'
import { ScriptFields } from '../../core/modules/scripts/ScriptsTypes'
import { services } from '../../core'

interface ScriptsHookParam {
  page?: string
  location?: string
}

export function useScripts({ page, location }: ScriptsHookParam, fields?: Array<ScriptFields>): any {
  const [scripts, setScripts] = useState<any>()

  async function getScriptsByFilter({ page, location }: ScriptsHookParam, fields?: Array<ScriptFields>) {
    const service = page ? services.scripts.getListByPage : services.scripts.getListByLocation
    const param = page ?? location

    const result = await service(param, fields)
    setScripts(result)
  }

  async function getAllScripts(fields?: Array<ScriptFields>) {
    const result = await services.scripts.getList(fields)
    setScripts(result)
  }

  useEffect(() => {
    page || location ? getScriptsByFilter({ page, location }, fields) : getAllScripts(fields)
  }, [])

  return scripts
}
