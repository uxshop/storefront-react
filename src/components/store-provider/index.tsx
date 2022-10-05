import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RootProvider from './root-provider'

export function StoreProvider(props: any) {
  return (
    <BrowserRouter basename={props.basename}>
      <RootProvider pages={props.pages} routes={props.routes} />
    </BrowserRouter>
  )
}
