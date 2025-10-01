// src/app/[lang]/produto/[id]/not-found.tsx
import Link from 'next/link';

export default async function NotFound() {

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Produto não encontrado
        </h2>
        <p className="text-gray-600 mb-8">
          O produto que você está procurando não existe ou foi removido.
        </p>
        <Link
          href="/pt-BR/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}