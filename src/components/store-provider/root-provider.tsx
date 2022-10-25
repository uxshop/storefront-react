import * as React from 'react'
import { useRoutes } from 'react-router-dom'
import config from '../../routes/config'

export default function RootProvider(props: any) {
  const configRouter = props.pages && config(props.pages, props.routes)
  const routerElement = useRoutes(configRouter)

  return <>{routerElement}</>
}
