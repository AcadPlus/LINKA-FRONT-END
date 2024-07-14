import React from 'react'
import Image from 'next/image'
import Badge from './ui/badge-group'
import CardShowcase from './ui/card-showcase'
import CardStage from './ui/card-stage'

import { CardProps } from './lib/definitions'
import Header from './ui/header'

const showcases: CardProps[] = [
  {
    id: 1,
    title: 'Vitrine de Startups',
    description:
      'Descubra startups inovadoras, parceiras da UFC, que estão moldando o futuro com soluções disruptivas e transformando ideias em realidade.',
    items: [
      'Acesso a ideias inovadoras e tecnologias emergentes',
      'Oportunidades de networking com empreendedores visionários',
      'Parcerias estratégicas para desenvolvimento e crescimento',
    ],
  },
  {
    id: 2,
    title: 'Vitrine de Competências',
    description:
      'Explore uma ampla gama de habilidades e talentos, desenvolvidos em parceria com a UFC, destacando competências essenciais para impulsionar carreiras e negócios.',
    items: [
      'Encontre professores com vasta experiência em TCC, teses e doutorados',
      'Conecte-se com pesquisadores que lideram projetos inovadores',
      'Aproveite o conhecimento de acadêmicos renomados da UFC',
    ],
  },
  {
    id: 3,
    title: 'Vitrine de Laboratórios',
    description:
      'Conheça laboratórios de ponta, parceiros da UFC, onde ciência e tecnologia se encontram para criar avanços revolucionários e promover a inovação.',
    items: [
      'Acesso a equipamentos e tecnologias de última geração',
      'Ambiente colaborativo para pesquisa e desenvolvimento',
      'Suporte técnico especializado de profissionais da UFC',
    ],
  },
]

export default function page() {
  return (
    <main className="">
      <div className="w-full md:flex">
        <Image
          src="/image-home.svg"
          alt="Imagem de pessoas conversando"
          width={40}
          height={40}
          priority
          className="w-full md:w-2/4 md:order-1 sm:h-2/4 md:h-auto"
        />
        <section className="bg-primary w-full flex flex-col gap-3 md:w-2/4 md:justify-center">
          <Header />
          <div className="flex flex-col p-5 space-y-2 sm:space-y-4 xl:pl-28">
            <p className="text-secondary md:text-xl">Bem vindo!</p>
            <h1 className="text-secondary max-w-64 text-left font-bold text-xl w-full sm:text-2xl md:max-w-lg lg:text-2xl text xl:text-4xl">
              Conecte-se com Empresas e Parceiros da Comunidade UFC
            </h1>
            <p className="md:max-w-96 text-secondary text-xs sm:text-sm md:text-base">
              Promovemos a conexão entre você, iniciativas da UFC e empresas
              parceiras externas!
            </p>
            <div className="flex flex-row items-center text-secondary">
              <form className="flex flex-row gap-2 items-center w-full">
                <p className="text-xs">Busco por..</p>
                <select
                  defaultValue=""
                  className="w-full max-w-60 bg-white px-1 rounded-full text-xs py-1 border-gray-200 border-2"
                >
                  <option className="text-xs" defaultValue="" selected>
                    {' '}
                    Ex: IA, Software, Saúde
                  </option>
                  <option value="US">United States</option>
                </select>
                <p className="text-xs">Em..</p>
                <select
                  defaultValue=""
                  className="w-full max-w-40 bg-white px-1 rounded-full text-xs py-1 border-gray-200 border-2"
                >
                  <option defaultValue="" selected>
                    {' '}
                    Ex: IA, Software, Saúde
                  </option>
                  <option value="US">United States</option>
                </select>
              </form>
            </div>
          </div>
        </section>
      </div>
      <section className="w-full flex items-center flex-col my-5 px-3">
        <Badge
          content="Entenda do que se trata o escritório!"
          title="O Escritório"
          className="text-secondary"
        />
        <h2 className="text-xl  max-w-80 text-center text-secondary font-semibold">
          O que é o Escritório de Projetos e Parcerias?
        </h2>
        <div className="flex flex-row mt-5 w-full max-w-80 md:max-w-4xl justify-center md:gap-10 gap-7">
          <div className="self-start justify-center items-center flex flex-col">
            <Image
              src="/logo.svg"
              alt="Logo escritório de projetos"
              width={80}
              height={80}
            />
            <p className="text-xs max-w-40 text-center">
              Escritório de projetos da UFC
            </p>
          </div>
          <div className="">
            <p className="text-xs text-left leading-5 text-slate-700">
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
        <Badge
          color="tertiary"
          title="Nossas Vitrines"
          content="Acesse por categorias!"
          className="text-blueText"
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl italic text-center  font-semibold">
          Exposição de vitrines
        </h2>
        <div className="flex flex-row gap-5 overflow-y-hidden p-6 container mx-auto">
          {showcases.map((item) => (
            <CardShowcase
              description={item.description}
              title={item.title}
              items={item.items}
              key={item.id}
            />
          ))}
        </div>
      </section>
      {/* <section>
        <Badge
          content="Faça parte da comunidade!"
          title="Link@!"
          className="text-secondary"
        />
        <h2>Quero ser parceiro!</h2>
        <p>
          Participe da comunidade de pesquisa, startups, projetos e parceiras da
          UFC através do preenchimento de um formulário de acordo com o seu
          cenário atual!
        </p>
        <form action="">
          <label htmlFor=""></label>
          <input type="radio" name="" id="" />
          <label htmlFor=""></label>
          <input type="radio" name="" id="" />
        </form>
      </section> */}
      <section className="p-3 flex flex-col gap-3 mt-14">
        <Badge
          color="tertiary"
          title="Processos Internos"
          content="Nossos processos internos"
          className="text-blueText"
        />
        <div className="flex items-center flex-col">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-center italic font-semibold mb-4">
            Fluxo de Uniformização
          </h2>
          <p className="text-xs text-center italic md:max-w-96">
            Descubra as etapas envolvidas por trás do processo de uniformização
            de setores implantando na Universidade Federal do Ceará
          </p>
          <div className="flex flex-col md:flex-row mt-6">
            <div className="mt-3 flex flex-col gap-3 px-6 md:w-[50vw]">
              <p className="text-sm">
                A Universidade reconhece a importância de uma comunicação clara
                e eficiente entre seus setores. Para isso, estamos empenhados em
                uniformizar os fluxos e processos relacionados à definição de
                temas, começando pelo processo de extensão.
              </p>
              <p className="text-sm">
                Este guia detalhado descreve os passos que serão seguidos para
                alcançar a uniformização desejada.
              </p>
              <p className="text-sm">
                Acreditamos que a uniformização dos fluxos e processos de
                definição de temas trará diversos benefícios para a
                Universidade, como:
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
            </div>
            <div className="flex flex-col gap-2 md:w-2/4 mt-5">
              <CardStage />
              <CardStage />
              <CardStage />
              <CardStage />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
