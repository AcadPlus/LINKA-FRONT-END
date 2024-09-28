'use client'

import React from 'react'
import { Button, Input, TextArea } from '../ui/input'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'

export default function Page() {
  const contactSchema = z.object({
    firstName: z.string().nonempty('Campo obrigatório'),
    lastName: z.string().nonempty('Campo obrigatório'),
    email: z
      .string()
      .email('Insira um email válido')
      .nonempty('Campo obrigatório'),
    numberPhone: z
      .string()
      .regex(/^(\(\d{2}\)\s)?(\d{4,5}-\d{4})$/)
      .nonempty('Campo obrigatório'),
    message: z.string().nonempty('Campo obrigatório'),
    agreePrivacyPolitic: z.boolean(),
  })

  type contactData = z.infer<typeof contactSchema>

  const onSubmit = (data: contactData) => {
    console.log(data)
  }

  const contactForm = useForm<contactData>()

  const {
    handleSubmit,
    formState: { errors },
  } = contactForm

  return (
    <div className="flex flex-col justify-center md:max-w-screen-lg mx-auto w-full md:mb-10 mt-8">
      <div className="mt-5 flex flex-col  md:flex-row md:items-center md:gap-32">
        <FormProvider {...contactForm}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex px-3 gap-2 flex-col items-center md:w-full"
          >
            <div className="md:self-start">
              <h1 className="font-bold text-2xl text-center md:text-left">
                Entre em contato
              </h1>
              <p className="text-sm md:text-center my-5">
                Nossa equipe adoraria conversar com você!
              </p>
            </div>
            <div className="w-full md:flex md:gap-3 space-y-2 md:space-y-0">
              <Input
                className="md:w-2/4"
                name="firstName"
                labelName="Nome"
                placeholder="Primeiro nome"
              />
              <Input
                className="md:w-2/4"
                labelName="Sobrenome"
                placeholder="Sobrenome"
                name="lastName"
              />
            </div>
            <Input
              labelName="Seu email"
              placeholder="seuemail@alu.ufc.br"
              name="email"
            />
            <Input
              name="numberPhone"
              labelName="Telefone"
              type="number"
              placeholder="+55 (85) 00000-0000"
            />
            <TextArea name="Mensagem" />
            <div className="flex flex-row items-center justify-center gap-3 mt-3">
              <input
                type="checkbox"
                {...contactForm.register('agreePrivacyPolitic')}
              />
              <label className="text-sm" htmlFor="">
                Você concorda com nossa{' '}
                <span className="underline">política de privacidade</span>.
              </label>
            </div>
            <Button name="Enviar mensagem" />
          </form>
        </FormProvider>
        <div className="w-full p-7 my-14">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7962.607471935136!2d-38.58177999241675!3d-3.74386398168883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74bdc77884127%3A0xbdd638b525926bfa!2sUniversidade%20Federal%20do%20Cear%C3%A1%20-%20UFC!5e0!3m2!1spt-BR!2sbr!4v1720570318517!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            className="border-0 w-full rounded-3xl"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
