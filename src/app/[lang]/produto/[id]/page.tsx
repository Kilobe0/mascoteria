// src/app/[lang]/produto/[id]/page.tsx
import { notFound } from 'next/navigation';
import { getProductById, getAllProductIds } from '@/lib/data';
import ProductDetailClient from './ProductDetailClient';

interface ProductDetailPageProps {
  params: Promise<{
    lang: string;
    id: string;
  }>;
}

// Generate static params para todos os IDs de produtos
export async function generateStaticParams() {
  const productIds = getAllProductIds();

  return [
    // Para ambos os idiomas suportados
    { lang: 'pt-BR' },
    { lang: 'en-US' }
  ].flatMap(({ lang }) =>
    productIds.map((id) => ({
      lang,
      id: id.toString(),
    }))
  );
}

// Metadata generation
export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = getProductById(parseInt(id));

  if (!product) {
    return {
      title: 'Produto não encontrado',
    };
  }

  return {
    title: `${product.name} | Mascoteria`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const productId = parseInt(id);

  // Verificar se o ID é válido
  if (isNaN(productId)) {
    notFound();
  }

  const product = getProductById(productId);

  // Produto não encontrado
  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}