// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Bem-vindo à Mascoteria
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          O melhor lugar para encontrar tudo o que seu pet precisa. Explore nossa vasta seleção de produtos de alta qualidade.
        </p>
        <Link
          href="/gallery"
          className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-orange-600 transition-transform transform hover:scale-105 shadow-lg"
        >
          Ver Produtos
        </Link>
      </div>
    </main>
  );
}