import * as React from 'react'
import DefaultTags from './partials/default-tags'
import FacebookTags from './partials/facebook-tags'
import TwitterTags from './partials/twitter-tags'
import { SeoProps } from './types'

export function MetaSeo({ data }: SeoProps) {
  return (
    <>
      <DefaultTags data={data} />
      <FacebookTags data={data} />
      <TwitterTags data={data} />
    </>
  )
}
