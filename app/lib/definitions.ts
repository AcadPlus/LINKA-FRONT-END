import { ComponentProps } from 'react'
import { useForm } from 'react-hook-form'

export type BadgeProps = ComponentProps<'button'> & {
  tittle: string
  content: string
}

export type InputButtonProps = ComponentProps<'input'> & {
  labelName: string
  className?: string
  register: ReturnType<typeof useForm>['register']
}

export type TextAreaProps = ComponentProps<'textarea'> & {
  name: string
  register: ReturnType<typeof useForm>['register']
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
