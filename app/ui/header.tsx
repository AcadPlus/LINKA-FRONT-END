import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="flex justify-between w-full px-7 py-4 items-center bg-primary">
      <div className="flex flex-row items-center gap-2">
        <Image
          src="/logo.svg"
          alt="logo do projeto linka"
          width={50}
          height={50}
        />
        <p className="text-[10px] max-w-12 text-left font-semibold hidden md:block">
          Escritório de projetos da UFC
        </p>
      </div>
      <nav className="gap-4 hidden md:flex">
        <Link href="/">Home</Link>
        <Link href="/">Sobre</Link>
        <Link href="/">Vitrines</Link>
        <Link href="/">LINK@</Link>
        <Link href="/">Fluxos</Link>
      </nav>
      <button className="md:hidden">
        <Image
          src="/menu.svg"
          alt="logo do projeto linka"
          width={25}
          height={25}
          className=""
        />
      </button>
    </header>
  )
}
