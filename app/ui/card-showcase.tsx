import React from 'react'
import { Mail, CircleCheck } from 'lucide-react'

export default function CardShowcase() {
  return (
    <div className="min-w-60 min-h-80 bg-[#f2ffff] rounded-3xl flex flex-col gap-3 justify-center px-6 py-2 shadow-md">
      <Mail className="flex self-start" size={20} />
      <h3 className="font-semibold text-lg">Vitrine de startups</h3>
      <p className="text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <ul className="flex flex-col self-start gap-3">
        <li className="text-xs flex items-center gap-2">
          <CircleCheck size={20} />
          <p>Característica </p>
        </li>
        <li className="text-xs flex items-center gap-2">
          <CircleCheck size={20} />
          <p>Característica </p>
        </li>
        <li className="text-xs flex items-center gap-2">
          <CircleCheck size={20} />
          <p>Característica </p>
        </li>
      </ul>
    </div>
  )
}
