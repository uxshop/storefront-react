import * as React from 'react'
import { useRoutes } from 'react-router-dom'
import { socket } from '../../../core'
import config from '../../routes/config'

function RootProvider(props) {
  const routerElement = useRoutes(config(props.pages, props.routes))

  return <>{routerElement}</>
}

export default RootProvider
