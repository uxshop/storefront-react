import { CookieService } from '@uxshop/storefront-core/dist/services/CookieService'
import {
  Cart,
  CartItemAddInput,
  CartItemUpdateInput,
  CartItemDeleteInput
} from '@uxshop/storefront-core/dist/modules/cart/CartTypes'
import { useEffect, useState } from 'react'
import { CartService } from '@uxshop/storefront-core/dist/modules/cart/CartService'

type CartMutation<T> = (input: T) => Promise<any>

interface CartErrors {
  messages?: Array<string>
}

interface CartHook {
  data: Cart
  addItem: CartMutation<Array<CartItemAddInput>>
  updateItem: CartMutation<CartItemUpdateInput>
  deleteItem: CartMutation<CartItemDeleteInput>
  errors: CartErrors
}

const COOKIE_CART = '_dc_cart'

export function useCart(): CartHook {
  const token = CookieService.getCookie(COOKIE_CART)
  const [cart, setCart] = useState<Cart>({})
  const [cartToken, setCartToken] = useState<string>(token)
  const [cartErrors, setCartErrors] = useState<CartErrors>({})

  function setToken(token: string) {
    if (token) {
      setCartToken(token)
      CookieService.setCookie(COOKIE_CART, token, 7)
    }
  }

  function eraseToken() {
    setCartToken('')
    CookieService.eraseCookie(COOKIE_CART)
  }

  function sanitizeCart() {
    setCart({})
    eraseToken()
  }

  function updateCartErrors(error: any) {
    const updatedCartErrors: CartErrors = {
      messages: [error.toString(), ...(cartErrors.messages || [])]
    }
    setCartErrors(updatedCartErrors)
  }

  async function addItem(input: Array<CartItemAddInput>): Promise<any> {
    try {
      const updatedCart = await CartService.addItem({
        items: input,
        cartToken: cartToken || null
      })
      updatedCart && setCart(updatedCart)
      !cartToken && setToken(updatedCart.token)
    } catch (error) {
      updateCartErrors(error)
    }
  }

  async function updateItem(input: CartItemUpdateInput): Promise<any> {
    try {
      if (!cartToken) throw new Error('')
      const updatedCart: Cart = await CartService.updateItem({
        item: input,
        cartToken: cartToken
      })
      updatedCart && setCart(updatedCart)
    } catch (error) {
      updateCartErrors(error)
    }
  }

  async function deleteItem(input: CartItemDeleteInput): Promise<any> {
    try {
      if (!cartToken) throw new Error('')
      const updatedCart = await CartService.deleteItem({
        item: input,
        cartToken: cartToken
      })
      !updatedCart.items ? sanitizeCart() : setCart(updatedCart)
    } catch (error) {
      updateCartErrors(error)
    }
  }

  async function getCart() {
    try {
      const result = await CartService.getCart(cartToken)
      setCart(result)
    } catch (error) {
      sanitizeCart()
      updateCartErrors(error)
    }
  }

  useEffect(() => {
    getCart()
  }, [])

  return {
    data: cart,
    addItem: addItem,
    updateItem: updateItem,
    deleteItem: deleteItem,
    errors: cartErrors
  }
}
