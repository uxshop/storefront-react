import React from 'react'
import { useSections } from '../../hooks/use-sections'
import { SectionLoader } from '../section-loader'

type Obj = Record<string, any>
export interface SectionsPropsType {
  components: Obj
  sections?: Obj
}

export function Sections({ sections, components }: SectionsPropsType): JSX.Element {
  const sectionsData = sections ? sections : useSections()
  const sectionsList = sectionsData && Object.entries<any>(sectionsData)

  return (
    <>
      {sectionsList &&
        sectionsList.map(([id, { schema, blocks, settings, type, disabled }]): JSX.Element => {
          const component = components[schema]

          return (
            <React.Fragment key={id}>
              {type === 'content' && (
                <SectionLoader id={id} component={component} settings={settings} blocks={blocks} disabled={disabled} />
              )}
            </React.Fragment>
          )
        })}
    </>
  )
}
