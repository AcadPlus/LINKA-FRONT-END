import React from 'react'
import { Mail, CircleCheck } from 'lucide-react'
import { CardProps } from '../lib/definitions'

export default function CardShowcase({ description, title, items }: CardProps) {
  return (
    <div className="min-w-80 bg-[#f2ffff] rounded-3xl flex flex-col gap-3 justify-center px-6 py-2 shadow-md">
      <Mail className="flex self-start" size={20} />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-xs h-16">{description}</p>
      <ul className="flex flex-col self-start gap-3">
        {items.map((item) => (
          <li key={item} className="text-xs flex items-center gap-2">
            <CircleCheck size={20} />
            <p>{item} </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
