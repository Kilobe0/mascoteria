// src/app/gallery/page.tsx
'use client';

import { useState, useEffect } from 'react';
import CategoryBar from '@/components/sections/CategoryBar';
import ProductGrid from '@/components/sections/ProductGrid';
import { mockCategories, mockProducts, getProductCounts } from '@/lib/data';

export default function GalleryPage() {
  // Pega os dados brutos
  const products = mockProducts;
  const categories = mockCategories;

  // Calcula a contagem de produtos para cada categoria
  const productCounts = getProductCounts(products);

  // Adiciona a contagem ao objeto de cada categoria
  const categoriesWithCounts = categories.map(category => ({
    ...category,
    count: productCounts[category.slug] || 0, // Garante que a contagem seja 0 se não houver produtos
  }));

  // Estado para a categoria ativa e para os produtos filtrados
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Lógica para filtrar os produtos quando a categoria ativa muda
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product => product.categorySlug === activeCategory)
      );
    }
  }, [activeCategory, products]); // Adicione `products` como dependência

  return (
    <div>
      <CategoryBar
        categories={categoriesWithCounts}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Nossos Produtos</h1>
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}