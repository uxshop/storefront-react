export interface blocksProps<T = {}> {
  schema: string
  settings: T
}

export interface SectionProps<S, B = {}> {
  settings: S
  blocks?: blocksProps<B>[]
}
