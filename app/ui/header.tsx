/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Sobre', href: '/' },
  { name: 'Vitrines', href: '/' },
  { name: 'Link@', href: '/' },
  { name: 'Fluxos', href: '/' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()

  console.log(pathname)

  const myRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (
        (scrollPosition > 400 && window.innerWidth > 768) ||
        pathname !== '/'
      ) {
        myRef.current?.classList.remove('lg:w-auto')
        console.log(myRef)
        myRef.current?.children[0].classList.remove('lg:w-[48vw]')
        myRef.current?.children[0].classList.add('w-full')
        myRef.current?.children[1].classList.add('hidden')
        const a = document.getElementById('hidden')
        a?.classList.remove('md:hidden')
        myRef.current?.classList.add('shadow-md')
      }

      if (pathname === '/') {
        if (scrollPosition === 0 && window.innerWidth > 768) {
          myRef.current?.classList.add('lg:w-auto')
          myRef.current?.children[0].classList.add('lg:w-[48vw]')
          myRef.current?.children[1].classList.remove('hidden')
          const a = document.getElementById('hidden')
          a?.classList.add('md:hidden')
          myRef.current?.classList.remove('shadow-md')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <header
      ref={myRef}
      className="bg-primary flex flex-row fixed top-0 w-full lg:w-auto transition duration-500 items-center"
    >
      <nav className="flex items-center justify-between p-4 lg:w-[48vw] md:w-full px-7 w-full xl:pl-28">
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
            className="rounded-md bg-primary p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div
          data-isopen={isOpen}
          className="data-[isopen=true]:block hidden absolute top-16 left-0 z-10 w-full bg-primary px-4 py-2 md:static
          md:block md:w-auto md:px-0 md:py-0"
        >
          <ul className="space-y-2 md:flex md:space-x-10 md:space-y-0 text-center">
            {links.map((item) => (
              <li
                key={item.name}
                className="hover:underline hover:ease-in duration-300 transition-all"
              >
                <a href="#" className="text-base font-medium">
                  {item.name}
                </a>
              </li>
            ))}
            <li
              id="hidden"
              className="hover:underline hover:ease-in duration-300 transition-all md:hidden"
            >
              <a href="/contact" className="text-base font-medium	 ">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="w-[50vw] absolute left-[1200px] right-0">
        <a href="/contact" className=" bg-primary p-2 text-base font-medium	">
          Contato
        </a>
      </div>
    </header>
  )
}
