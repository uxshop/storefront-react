import { nullable } from '@uxshop/storefront-core/src/types/HelpersTypes'

interface RouteItem {
  path: nullable<string>
  component: string
}

interface Routes {
  notfound: RouteItem
  home: RouteItem
  category: RouteItem
  product: RouteItem
  brand: RouteItem
  institutional: RouteItem
  landingpage: RouteItem
  blog: RouteItem
  blogPost: RouteItem
  blogCategory: RouteItem
  search: RouteItem
}

const defaultRoutes: Routes = {
  home: {
    path: null,
    component: 'home'
  },
  category: {
    path: ':slug/c',
    component: 'category'
  },
  product: {
    path: ':slug/p',
    component: 'product'
  },
  brand: {
    path: ':slug/b',
    component: 'brand'
  },
  search: {
    path: 'busca/',
    component: 'search'
  },
  institutional: {
    path: ':slug/i',
    component: 'institutional'
  },
  landingpage: {
    path: ':slug/lp',
    component: 'landingpage'
  },
  blogPost: {
    path: 'blog/:category/:slug',
    component: 'blog-post'
  },
  blogCategory: {
    path: 'blog/:slug',
    component: 'blog'
  },
  blog: {
    path: 'blog/',
    component: 'blog'
  },
  notfound: {
    path: '*',
    component: 'not-found'
  }
}

export default defaultRoutes
