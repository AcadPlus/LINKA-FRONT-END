import React from 'react'
import { FacebookIcon, Twitter, Linkedin, GithubIcon } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <section className="mb-6">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Imagem de pessoas conversando"
            width={60}
            height={60}
            className="py-2 mb-4"
          />
          <p className="text-sm">Nos Siga nas redes sociais</p>
          <div className="flex gap-5 mt-4">
            <FacebookIcon color="gray" size={40} />
            <Twitter color="gray" size={40} />
            <GithubIcon color="gray" size={40} />
            <Linkedin color="gray" size={40} />
          </div>
          <div className="px-7">
            <ul className="flex flex-col text-2xl text-gray-400 gap-8 mb-6 mt-6">
              <li>
                <p>Social</p>
              </li>
              <li>
                <p>Twitter</p>
              </li>
            </ul>
            <p className="text-center text-xs italic text-gray-400">
              © 2024 Escritório de Projetos e Parcerias. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}
