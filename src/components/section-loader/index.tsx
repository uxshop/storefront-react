import React from 'react'
import { Suspense } from 'react'
import { SectionLoaderProps } from './types'

export function SectionLoader(props: SectionLoaderProps) {
    const DynamicComponent = props.component

    return (
        <>
            {!props.disabled && DynamicComponent && (
                <Suspense>
                    <section data-section-id={props.id}>
                        <DynamicComponent
                            settings={props.settings}
                            blocks={props.blocks}
                            id={props.id}
                        />
                    </section>
                </Suspense>
            )}
        </>
    )
}
