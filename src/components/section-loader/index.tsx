import React from 'react'
import { Suspense } from 'react'
import { SectionLoaderProps } from './types'

export function SectionLoader(props: SectionLoaderProps) {
  const fallBack = () => 'Section not found.'
  const DynamicComponent = props.component || fallBack

  return (
    <>
      {!props.disabled && (
        <Suspense fallback={<div>Loading...</div>}>
          <section data-section-id={props.id}>
            <DynamicComponent settings={props.settings} blocks={props.blocks} id={props.id} />
          </section>
        </Suspense>
      )}
    </>
  )
}
