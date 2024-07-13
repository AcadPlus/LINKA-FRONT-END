/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="bg-primary flex flex-row fixed top-0 items-center w-full md:w-auto">
      <nav className="container mx-auto flex items-center justify-between p-4 md:w-[48vw] px-7">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.svg"
            alt="Logo"
            className="h-12 w-12"
            width={48}
            height={48}
          />
          <div>
            <h1 className="text-sm max-w-20 text-left hidden">
              Escritório de projetos da UFC
            </h1>
          </div>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="rounded-md bg-primary p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <XIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div
          data-isOpen={isOpen}
          className="data-[isOpen=true]:block hidden absolute top-16 left-0 z-10 w-full bg-primary px-4 py-2 md:static md:block md:w-auto md:px-0 md:py-0"
        >
          <ul className="space-y-2 md:flex md:space-x-4 md:space-y-0">
            <li>
              <a href="#" className="text-sm font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-medium">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-medium">
                Vitrines
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-medium">
                LINK@
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-medium">
                Fluxos
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="w-full absolute left-[1300px]">
        <a href="#" className=" bg-primary p-2">
          Contato
        </a>
      </div>
    </header>
  )
}

function MenuIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function XIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
