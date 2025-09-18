// src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    // As classes chave para o alinhamento:
    // - flex-grow: Faz esta seção crescer para ocupar todo o espaço vertical disponível no <main>.
    // - flex flex-col: Define um container flexível com orientação de coluna.
    // - justify-center: Centraliza o conteúdo verticalmente (no eixo principal da coluna).
    // - items-center: Centraliza o conteúdo horizontalmente (no eixo cruzado).
    <section className="flex flex-grow flex-col justify-center items-center text-center p-6">
      <div className="max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          A página não pode ser encontrada.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Parece que nada foi encontrado neste local.
        </p>
        <Link
          href="/"
          className="
            inline-block rounded-md bg-orange-500 px-5 py-3 
            text-base font-semibold text-white shadow-sm 
            hover:bg-orange-600 
            focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-orange-600 transition-colors
          "
        >
          Voltar para a Home
        </Link>
      </div>
    </section>
  );
}