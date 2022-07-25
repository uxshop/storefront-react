import * as React from 'react'
import { useRoutes } from 'react-router-dom'
import config from '../../routes/config'

function RootProvider(props: any) {
    const routerElement = useRoutes(config(props.pages, props.routes))

    return <>{routerElement}</>
}

export default RootProvider
