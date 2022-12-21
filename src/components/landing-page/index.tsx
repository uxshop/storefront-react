import React from 'react'
import { useLandingPages } from '../../hooks/use-landing-pages'
import { SectionLoader } from '../section-loader'
import components from '../ux'

export function LandingPage(): JSX.Element {
  const landingPageData = useLandingPages({ id: String(2802) })
  return (
    <>
      {landingPageData?.data?.content?.sections &&
        landingPageData?.data?.content?.sections.map(
          ({ id, schema, blocks, settings, type, disabled }): JSX.Element => {
            const component = components[schema]

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
