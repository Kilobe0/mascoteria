// src/app/[lang]/orcamentos/page.tsx
import { getDictionary } from "@/lib/dictionaries";
import Image from "next/image";
import OrderForm from "@/components/OrderForm"; // Importe o novo componente

export default async function OrderPage({
  params,
}: {
  params: Promise<{ lang: 'pt-BR' | 'en-US' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="hidden md:block w-full h-[600px] relative rounded-lg overflow-hidden">
          <Image
            src="/images/mascote.png"
            alt="Mascote da Mascoteria"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="max-w-lg mx-auto md:mx-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 uppercase">
              {dict.orderPage.title}
            </h1>
            <p className="mt-3 text-gray-600">{dict.orderPage.subtitle}</p>

            {/* Renderize o Client Component, passando o dicionário do formulário como prop */}
            <OrderForm dict={dict.orderPage.form} />

            {/* Informações Adicionais */}
            <div className="mt-10 text-sm text-gray-600 space-y-4">
              <p>
                Adoramos conhecer novos artistas, envie seu portfolio com
                assunto que representa sua especialidade. Ex: Portfolio –
                Modelador 3D
              </p>
              <a
                href="mailto:portfolio@mascoteria.com.br"
                className="block text-orange-600 hover:underline font-medium"
              >
                portfolio@mascoteria.com.br
              </a>
              <p>Para demais assuntos envie e-mail para:</p>
              <a
                href="mailto:email@mascoteria.com.br"
                className="block text-orange-600 hover:underline font-medium"
              >
                email@mascoteria.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
