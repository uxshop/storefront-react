import React from 'react'
import { Helmet } from 'react-helmet'
import { SeoProps } from '../types'

export default function FacebookTags({ data }: SeoProps) {
  return (
    <Helmet defer={false}>
      <meta property="og:locale" content="pt_BR" />
      {data.title && <meta property="og:title" content={data.title} />}
      {data.url && <meta property="og:url" content={data.url} />}
      {data.description && <meta property="og:description" content={data.description} />}
      {data.type && <meta property="og:type" content={data.type} />}
      {data?.image.url && <meta property="og:image" content={data.image.url} />}
      {data?.image.url && <meta property="og:image:secure_url" content={data.image.url} />}
      {data?.image.width && <meta property="og:image:width" content={data.image.width} />}
      {data?.image.height && <meta property="og:image:height" content={data.image.height} />}
    </Helmet>
  )
}
