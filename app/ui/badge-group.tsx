import React, { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { ArrowRight } from 'lucide-react'

const button = tv({
  base: 'flex flex-row p-2 rounded-full gap-3 items-center justify-center max-w-96',
  variants: {
    color: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      tertiary: 'bg-tertiary',
    },
    opacity: {
      normal: 'opacity-100',
      transparent: 'opacity-75',
    },
  },
  defaultVariants: {
    color: 'primary',
    opacity: 'normal',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export default function Badge({
  color,
  opacity,
  className,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={button({ color, opacity, className })}>
      {props.children}
      <ArrowRight size={15} />
    </button>
  )
}
