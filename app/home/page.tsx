import React from 'react'
import Header from '../ui/header'
import Image from 'next/image'
import Badge from '../ui/badge-group'
import CardShowcase from '../ui/card-showcase'
import CardStage from '../ui/card-stage'
import { FacebookIcon, Twitter, Linkedin, GithubIcon } from 'lucide-react'

export default function page() {
  return (
    <main className="">
      <Header />
      <div className="w-full">
        <Image
          src="/image-home.svg"
          alt="Iamgem de pessoas conversando"
          width={40}
          height={40}
          className="w-full"
        />
      </div>
      <section className="bg-primary w-full py-3 px-5 flex flex-col gap-5 ">
        <p className="text-secondary">Bem vindo!</p>
        <h1 className="text-secondary max-w-64 text-left font-bold text-2xl w-full">
          Conecte-se com Empresas e Parceiros da Comunidade UFC
        </h1>
        <p>
          Promovemos a conexão entre você, iniciativas da UFC e empresas
          parceiras externas!
        </p>
        <div className="flex flex-row items-center justify-between gap-3">
          <form className="flex flex-row gap-3 items-center">
            <p className="text-xs">Busco por..</p>
            <select
              disabled
              id="countries_disabled"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-6"
            >
              <option selected> Ex: IA, Software, Saúde</option>
              <option value="US">United States</option>
            </select>
            <p className="text-xs">Em..</p>

            <select
              disabled
              id="countries_disabled"
              className="bg-gray-50 border border-gray-300 text-gray-900 
              text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-6"
            >
              <option selected> Ex: IA, Software, Saúde</option>
              <option value="US">United States</option>
            </select>
          </form>
        </div>
      </section>
      <section className="w-full flex justify-center flex-col my-9">
        <Badge>
          <p className="text-xs text-secondary border-2 px-3 py-1 rounded-full">
            O escritório
          </p>
          <p className="text-xs  text-secondary">
            Entenda do que se trata o escritório!
          </p>
        </Badge>
        <h2 className="text-xl text-center text-secondary font-semibold mt-2">
          O que é o Escritório de Projetos e Parcerias?
        </h2>
        <div className="flex flex-row gap-2 mt-5">
          <div className="flex flex-row items-center gap-4 self-start">
            <Image
              src="/logo.svg"
              alt="Imagem de pessoas conversando"
              width={60}
              height={60}
              className="py-2"
            />
            <p className="text-xs max-w-40">Escritório de projetos da UFC</p>
          </div>
          <div className="w-[80%]">
            <p className="text-[12px] text-left leading-5 text-slate-700">
              O Escritório de Projetos e Parcerias da Universidade Federal do
              Ceará (UFC) é uma entidade dedicada a fornecer suporte e
              assistência em todas as etapas do processo de desenvolvimento de
              projetos de Pesquisa, Desenvolvimento e Inovação (PD&I). Sua
              missão é facilitar a formatação, negociação e implementação de
              parcerias institucionais, garantindo a conformidade com as
              diretrizes da UFC e promovendo a valorização das atividades
              institucionais.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full mt-2 p-1 flex flex-col justify-center">
        <h2 className="text-xl text-center  font-semibold">
          Exposição de vitrines
        </h2>
        <div className="flex flex-row gap-5 justify-center overflow-y-hidden p-6">
          <CardShowcase />
          <CardShowcase />
          <CardShowcase />
        </div>
      </section>
      <section className="p-3 flex flex-col gap-3 mt-14">
        <Badge color="tertiary">
          <p className="text-xs border-2 px-3 py-1 rounded-full">
            Nossas vitrines
          </p>
          <p className="text-xs ">Acesse por categorias!</p>
        </Badge>
        <h2 className="text-4xl text-center italic font-semibold max-w-52 self-center my-5">
          Fluxo de Uniformização
        </h2>
        <p className="text-xs text-center italic">
          Descubra as etapas envolvidas por trás do processo de uniformização de
          setores implantando na Universidade Federal do Ceará
        </p>
        <div className="mt-3 flex flex-col gap-3 px-6">
          <p className="text-sm">
            A Universidade reconhece a importância de uma comunicação clara e
            eficiente entre seus setores. Para isso, estamos empenhados em
            uniformizar os fluxos e processos relacionados à definição de temas,
            começando pelo processo de extensão.
          </p>
          <p className="text-sm">
            Este guia detalhado descreve os passos que serão seguidos para
            alcançar a uniformização desejada.
          </p>
          <p className="text-sm">
            Acreditamos que a uniformização dos fluxos e processos de definição
            de temas trará diversos benefícios para a Universidade, como:
          </p>
          <ul className="list-disc ml-6">
            <li>
              <p className="text-sm">
                Maior clareza e eficiência na comunicação entre os setores.
              </p>
            </li>
            <li>
              <p className="text-sm">Redução de tempo e burocracia.</p>
            </li>
            <li>
              <p className="text-sm">
                Melhor aproveitamento dos recursos humanos e materiais.
              </p>
            </li>
            <li>
              <p className="text-sm">
                Maior qualidade dos projetos de extensão.
              </p>
            </li>
            <li>
              <p className="text-sm">
                Maior clareza e eficiência na comunicação entre os setores.
              </p>
            </li>
          </ul>
          <p className="text-sm">
            Agradecemos a participação de todos os setores neste processo.
          </p>
          <div className="flex flex-col gap-2">
            <CardStage />
            <CardStage />
            <CardStage />
            <CardStage />
          </div>
        </div>
      </section>
      <section className="mb-6">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Imagem de pessoas conversando"
            width={60}
            height={60}
            className="py-2"
          />
          <p>A gente se liga na globo, hoje tem flamengo</p>
          <div className="flex gap-5">
            <FacebookIcon size={40} />
            <Twitter size={40} />
            <GithubIcon size={40} />
            <Linkedin size={40} />
          </div>
        </div>
      </section>
    </main>
  )
}
