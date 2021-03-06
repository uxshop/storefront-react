import { nullable } from '@uxshop/storefront-core/src/types/NullableTypes'

interface RouteItem {
    path: nullable<string>
    component: string
}

interface Routes {
    home: RouteItem
    category: RouteItem
    product: RouteItem
    brand: RouteItem
    institutional: RouteItem
    landingpage: RouteItem
    blog: RouteItem
    blogPost: RouteItem
}

const defautRoutes: Routes = {
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
    institutional: {
        path: ':slug/i',
        component: 'institutional'
    },
    landingpage: {
        path: ':slug/lp',
        component: 'landingpage'
    },
    blog: {
        path: 'blog/:slug',
        component: 'blog'
    },
    blogPost: {
        path: 'blog/:category/:slug',
        component: 'blog-post'
    }
}

export default defautRoutes
