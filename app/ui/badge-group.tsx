import React, { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { ArrowRight } from 'lucide-react'

const button = tv({
  base: 'flex flex-row p-1 rounded-full gap-2 items-center justify-center max-w-96 self-center mt-20 mb-10 font-semibold transition duration-500 ease-in-out hover:scale-125',
  variants: {
    color: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      tertiary: 'bg-tertiary',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export default function Badge({
  color,
  className,
  content,
  title,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={button({ color, className })}>
      <p className="text-xs border-2 px-3 py-1 bg-white rounded-full">
        {title}
      </p>
      <p className="text-xs">{content}</p>
      <ArrowRight size={15} />
    </button>
  )
}
