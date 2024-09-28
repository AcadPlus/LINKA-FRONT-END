import { ComponentProps } from 'react'

export type BadgeProps = ComponentProps<'button'> & {
  tittle: string
  content: string
}

export type InputButtonProps = ComponentProps<'input'> & {
  labelName: string
  className?: string
  name: string
}

export type TextAreaProps = ComponentProps<'textarea'> & {
  name: string
}

export type ButtonProps = ComponentProps<'button'> & {
  name: string
}

export type CardProps = {
  id?: number
  title: string
  description: string
  items: string[]
}

export type RadioButtonProps = ComponentProps<'input'> & {
  tittle: string
  content: string
}
