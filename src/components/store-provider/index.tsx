import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RootProvider from './root-provider'

export function StoreProvider(props) {
  return (
    <BrowserRouter>
      <RootProvider pages={props.pages} routes={props.routes} />
    </BrowserRouter>
  )
}
