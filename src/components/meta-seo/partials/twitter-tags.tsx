import React from 'react'
import { Helmet } from 'react-helmet'
import { SeoProps } from '../types'

export default function TwitterTags({ data }: SeoProps) {
  return (
    <Helmet defer={false}>
      {data.title && <meta name="twitter:title" content={data.title} />}
      {data.description && <meta name="twitter:description" content={data.description} />}
      {data.image && <meta name="twitter:image" content={data.image.url} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
