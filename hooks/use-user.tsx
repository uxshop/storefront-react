import { useEffect, useState } from 'react'
import { CookieService } from '../../core/services/CookieService'
import { services } from '../../core'
import { LoginCredentials, User, UserFields } from '../../core/modules/user/UserTypes'

interface UserHook {
  data: User
  auth: (credentials: LoginCredentials) => Promise<any>
}

const COOKIE_USER = '_dc_token'

export function useUser(credentials: LoginCredentials): UserHook {
  const [user, setUser] = useState<User>({})
  const [userToken, setUserToken] = useState<string>('')

  function setToken(token: string) {
    if (token) {
      setUserToken(token)
      CookieService.setCookie(COOKIE_USER, token, 7)
    }
  }

  function setUserData(user: User) {
    setUser(user)
    setToken(user.token)
  }

  function eraseToken() {
    setUserToken('')
    CookieService.eraseCookie(COOKIE_USER)
  }

  function cleanUserData() {
    eraseToken()
    setUser({})
  }

  async function get(token: string) {
    try {
      const user = await services.user.get(token)
      user && setUserData(user)
    } catch (error) {
      cleanUserData()
    }
  }

  async function auth(credentials: LoginCredentials, fields?: Array<UserFields>): Promise<any> {
    try {
      const user = await services.user.auth(credentials)
      user && setUserData(user)
    } catch (error) {
      cleanUserData()
    }
  }

  useEffect(() => {
    const token = CookieService.getCookie(COOKIE_USER)
    if (token) {
      setToken(token)
      get(token)
    } else {
      credentials && auth(credentials)
    }
  }, [])

  return {
    data: user,
    auth: auth
  }
}
