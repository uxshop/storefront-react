import { useCallback, useRef } from 'react'
import { StringHelper } from '@uxshop/storefront-core'

export function useVariable() {
  const ref = useRef(null)

  const setVariables = (variables: object) => {
    const element = ref?.current || document.documentElement
    Object.entries(variables).map(
      ([name, value]) =>
        value && element.style.setProperty(`--${StringHelper.slugify(name)}`, value)
    )
  }

  const setRef = useCallback((element: any) => {
    ref.current = element
  }, [])

  return { setVariables, setRef }
}
