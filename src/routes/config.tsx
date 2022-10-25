import * as React from 'react'
import defaultRoutes from './default-routes'

const routesConfig = (pages: any, newRoutes = {}) => {
  const routes = Object.assign(defaultRoutes, newRoutes)
  const Layout = pages['layout']

  const getChildren = () => {
    const children = Object.entries(routes).map(([id, item]) => {
      const Component = pages[item.component]

      return {
        index: id === 'home',
        path: item?.path ?? null,
        element: Component && (
          <React.Suspense fallback="">
            <Component />
          </React.Suspense>
        )
      }
    })

    return children
  }

  return [
    {
      path: '/',
      element: (
        <React.Suspense fallback="">
          <Layout />
        </React.Suspense>
      ),
      children: getChildren()
    }
  ]
}

export default routesConfig
