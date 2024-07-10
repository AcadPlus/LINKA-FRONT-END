import React from 'react'

import {
  ButtonProps,
  InputButtonProps,
  TextAreaProps,
} from '../lib/definitions'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export function Input({ name, className, ...rest }: InputButtonProps) {
  return (
    <div className={twMerge('flex flex-col space-y-2 w-full', className)}>
      <label className="text-sm" htmlFor="">
        {name}
      </label>
      <input {...rest} className="border-2 rounded-md text-black p-2 h-10" />
    </div>
  )
}

export function TextArea({ name, ...rest }: TextAreaProps) {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <label className="text-sm" htmlFor="">
        {name}
      </label>
      <textarea
        className="border-2 rounded-md text-black p-2 h-16"
        {...rest}
      ></textarea>
    </div>
  )
}

export function Button({ name }: ButtonProps) {
  return (
    <Link
      className=" bg-blueText w-56 py-2 font-bold text-center rounded-lg text-white mt-4"
      href="/"
    >
      {name}
    </Link>
  )
}
