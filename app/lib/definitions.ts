import { ComponentProps } from 'react'

export type BadgeProps = ComponentProps<'button'> & {
  tittle: string
  content: string
}
