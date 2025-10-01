// src/app/[lang]/produto/[id]/ProductDetailClient.tsx
'use client';

import { ProductDetail } from '@/lib/data';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import ProductDetails from '@/components/product/ProductDetails';

interface ProductDetailClientProps {
  product: ProductDetail;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Coluna esquerda - Galeria de imagens (rolável) */}
        <div className="order-2 lg:order-1">
          <ProductImageGallery images={product.images} productName={product.name} />
        </div>

        {/* Coluna direita - Detalhes do produto (fixa) */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-6 lg:h-fit">
          <ProductDetails product={product} />
        </div>
      </div>
    </div>
  );
}