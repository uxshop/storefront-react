import { UserService, CookieService } from '@uxshop/storefront-core'
import {
  User,
  LoginCredentials,
  UserFields
} from '@uxshop/storefront-core/dist/modules/user/UserTypes'
interface UserHook {
  result: any
  auth: (credentials: LoginCredentials) => Promise<any>
}

const COOKIE_USER = '_dc_token'

export function useUser(credentials: LoginCredentials): UserHook {
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
    let result = {
      data: null,
      error: null
    }

    UserService.get(token)
      .then(response => (result.data = response))
      .catch(error => {
        result.error = error
      })
    setUserData(result.data?.user)

    return { data: result.data, error: result.error }
  }

  function auth(): any {
    let result = {
      data: null,
      error: null
    }

    UserService.auth(credentials)
      .then(response => {
        setUserData(result.data?.user)
        result.data = response
      })
      .catch(error => {
        result.error = error
      })

    return result
  }

  return tokenExists ? get(tokenExists) : auth()
}
