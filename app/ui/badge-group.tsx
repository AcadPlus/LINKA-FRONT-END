import React, { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { ArrowRight } from 'lucide-react'

const button = tv({
  base: 'flex flex-row p-1 rounded-full gap-2 items-center justify-center max-w-110 self-center mt-10 mb-5 md:mt-20 md:mb-10 font-semibold transition duration-500 ease-in-out hover:scale-125',
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
    <button
      {...props}
      className={`${button({ color, className })}`}
      style={{ width: 'auto', whiteSpace: 'nowrap' }} // Previne quebra de linha e ajusta a largura automaticamente
    >
      <p className=" inline-flex items-center space-x-2 bg-white text-xs md:text-base border-2 px-3 py-1 rounded-full">
        {title}
      </p>
      <p className="text-xs md:text-base">{content}</p>
      <ArrowRight size={15} />
    </button>
  )
}
