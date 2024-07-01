import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className="flex justify-between w-full px-7 py-4 items-center">
      <div>
        <Image
          src="/logo.svg"
          alt="logo do projeto linka"
          width={55}
          height={55}
        />
      </div>
      <div>
        <Image src="/menu.svg" alt="Menu" width={30} height={30} />
      </div>
    </header>
  )
}
