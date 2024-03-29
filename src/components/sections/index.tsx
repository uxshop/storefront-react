import React from 'react'
import { useSections } from '../../hooks/use-sections'
import { SectionLoader } from '../section-loader'

type Obj = Record<string, any>
export interface SectionsPropsType {
  components?: Obj
  sections?: any
  page?: string
}

export function Sections({ sections, components, page }: SectionsPropsType): JSX.Element {
  const sectionsData = sections ? sections : useSections({ page })

  return (
    <>
      {sectionsData?.data?.content &&
        sectionsData?.data?.content.map(
          ({ id, schema, blocks, settings, type, disabled }): JSX.Element => {
            const component = components[schema]
            return (
              <React.Fragment key={id}>
                {type === page || type === 'content' ? (
                  <SectionLoader
                    id={id}
                    component={component}
                    settings={settings}
                    blocks={blocks}
                    disabled={disabled}
                  />
                ) : null}
              </React.Fragment>
            )
          }
        )}
    </>
  )
}
