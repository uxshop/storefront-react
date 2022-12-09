import { useEffect, useState } from 'react'
import { ScriptsService } from '@uxshop/storefront-core'
import { ScriptFields } from '@uxshop/storefront-core/dist/modules/scripts/ScriptsTypes'
import { HookData } from './types/HookData'
interface ScriptsHookParam {
  page?: string
  location?: string
}

export function useScripts({ page, location }: ScriptsHookParam, fields?: ScriptFields[]): any {
  const [state, setState] = useState<HookData>({
    loading: false,
    data: null,
    error: null
  })

  function getScriptsByFilter() {
    setState(state => ({ ...state, loading: true }))

    const service = page ? ScriptsService.getListByPage : ScriptsService.getListByLocation
    const param = page ?? location

    service(param, fields)
      .then(response => setState(state => ({ ...state, loading: false, data: response })))
      .catch(error => setState(state => ({ ...state, loading: false, error })))
  }

  function getAllScripts() {
    setState(state => ({ ...state, loading: true }))

    ScriptsService.getList(fields)
      .then(response => setState(state => ({ ...state, loading: false, data: response })))
      .catch(error => setState(state => ({ ...state, loading: false, error })))
  }
  useEffect(() => {
    page || location ? getScriptsByFilter() : getAllScripts()
  }, [])

  return { ...state }
}
