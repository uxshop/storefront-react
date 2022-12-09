import { UserService, CookieService } from '@uxshop/storefront-core'
import {
  User,
  LoginCredentials,
  UserFields
} from '@uxshop/storefront-core/dist/modules/user/UserTypes'
import { useEffect, useState } from 'react'
import { HookData } from './types/HookData'
interface UserHook {
  state: HookData
  auth: (credentials: LoginCredentials) => Promise<any>
}

const COOKIE_USER = '_dc_token'

export function useUser(credentials: LoginCredentials): UserHook {
  const [state, setState] = useState<HookData>({
    loading: false,
    data: null,
    error: null
  })

  const tokenExists = CookieService.getCookie(COOKIE_USER)
  tokenExists ? (setToken(tokenExists), get(tokenExists)) : credentials && auth()

  function setToken(token: string) {
    if (!token) return
    CookieService.setCookie(COOKIE_USER, token, 7)
  }

  function setUserData(user: User) {
    setToken(user.token)
  }

  async function get(token: string) {
    setState(state => ({ ...state, loading: true }))

    UserService.get(token)
      .then(response => setState({ ...state, loading: false, data: response }))
      .catch(error => {
        setState({ ...state, loading: false, error })
      })
    setUserData(state.data?.user)
  }

  function auth(): any {
    setState(state => ({ ...state, loading: true }))

    UserService.auth(credentials)
      .then(response => {
        setState({ ...state, loading: false, data: response })
        setUserData(state.data?.user)
      })
      .catch(error => {
        setState({ ...state, loading: false, error })
      })
  }

  useEffect(() => {
    tokenExists ? get(tokenExists) : auth()
  }, [])

  return { state, auth }
}
