interface dc_config {
  token: string
  api_url: string
  api_editor: string
  domain: string
  base_path?: string
  mock?: {
    apps?: any
    category?: any
    categoryTree?: any
    blogCategory?: any
    blogPost?: any
    brand?: any
    cart?: any
    landing_pages?: any
    menu?: any
    pages?: any
    page?: any
    scripts?: any
    sections?: any
    settings?: any
    shop?: any
    showcase?: any
    user?: any
  }
}

declare var dc_config: dc_config
