'use client'

import React, { useState } from 'react'
import { Book } from 'lucide-react'

import {
  ButtonProps,
  InputButtonProps,
  TextAreaProps,
  RadioButtonProps,
} from '../lib/definitions'
import { twMerge } from 'tailwind-merge'

export function Input({
  labelName,
  className,
  register,
  ...rest
}: InputButtonProps) {
  return (
    <div className={twMerge('flex flex-col space-y-2 w-full', className)}>
      <label className="text-xs" htmlFor="">
        {labelName}
      </label>
      <input
        {...rest}
        {...register}
        className="border-2 rounded-md text-black p-2 h-10 text-xs"
      />
    </div>
  )
}

export function TextArea({ name, register, ...rest }: TextAreaProps) {
  return (
    <div className="flex flex-col space-y-2 w-full ">
      <label className="text-sm" htmlFor="">
        {name}
      </label>
      <textarea
        {...register}
        className="border-2 rounded-md text-black p-2 h-16 text-xs"
        {...rest}
      ></textarea>
    </div>
  )
}

export function Button({ name, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className=" bg-blueText w-56 p-2 font-bold text-center rounded-lg text-white mt-4 md:w-full"
    >
      {name}
    </button>
  )
}
export function RadioButton({ title, content, ...rest }: RadioButtonProps) {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="rounded-md border-2 border-primary text-secondary flex items-center space-x-2 p-3 max-w-96 transition duration-500 ease-in-out hover:scale-110 hover:bg-primary hover:text-black">
      <input type="radio" checked={isChecked} onChange={handleChange} />
      <Book className="rounded-full bg-secondary p-1" size={30} color="white" />
      <div {...rest}>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs">{content}</p>
      </div>
    </div>
  )
}
