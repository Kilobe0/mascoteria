// src/app/[lang]/orcamentos/page.tsx
import { getDictionary } from "@/lib/dictionaries";
import Image from "next/image";
import OrderForm from "@/components/OrderForm"; // Importe o novo componente

export default async function OrderPage({
  params,
}: {
  params: Promise<{ lang: "pt-BR" | "en-US" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div
          className="hidden md:block relative"
          style={{ height: "calc(100vh - 5rem)" }}
        >
          <Image
            src="/images/mascote.png"
            alt="Mascote da Mascoteria"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="max-w-lg mx-auto md:mx-0">
            <h1 className="text-2xl lg:text-2xl font-bold text-gray-800 uppercase">
              {dict.orderPage.title}
            </h1>
            <p className="mt-3 text-gray-600">{dict.orderPage.subtitle}</p>

            {/* Renderize o Client Component, passando o dicionário do formulário como prop */}
            <OrderForm dict={dict.orderPage.form} />

            {/* Informações Adicionais */}
            <div className="mt-10 text-sm text-gray-600 space-y-2">
              <p>
                {dict.orderPage.contactPortfolio}
                <a
                  href="mailto:portfolio@mascoteria.com.br"
                  className="block text-orange-600 hover:underline font-medium"
                >
                  portfolio@mascoteria.com.br
                </a>
              </p>

              <p>
                {dict.orderPage.contactGeneral}
                <a
                  href="mailto:email@mascoteria.com.br"
                  className="block text-orange-600 hover:underline font-medium"
                >
                  email@mascoteria.com.br
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
