import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RootProvider from './root-provider'

export function StoreProvider(props: any) {
    const basename = props.basename ?? dc_config.base_path
    return (
        <BrowserRouter basename={basename}>
            <RootProvider pages={props.pages} routes={props.routes} />
        </BrowserRouter>
    )
}
