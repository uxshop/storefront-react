import React from 'react'
import { useLandingPages } from '../../hooks/use-landing-pages'
import { SectionLoader } from '../section-loader'
import { SectionsPropsType } from '../sections'
import landingComponents from '../landing-page-sections'

export function LandingPage({ sections, components }: SectionsPropsType): JSX.Element {
  const landingPageData = sections ?? useLandingPages({})
  const mergedComponents = components ? { ...landingComponents, ...components } : landingComponents
  return (
    <>
      {landingPageData?.data?.content?.sections &&
        landingPageData?.data?.content?.sections.map(
          ({ id, schema, blocks, settings, type, disabled }): JSX.Element => {
            const component = mergedComponents[schema]

            return (
              <React.Fragment key={id}>
                {type === 'content' && (
                  <SectionLoader
                    id={id}
                    component={component}
                    settings={settings}
                    blocks={blocks}
                    disabled={disabled}
                  />
                )}
              </React.Fragment>
            )
          }
        )}
    </>
  )
}
