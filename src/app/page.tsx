// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import CategoryBar from '@/components/gallery/CategoryBar';
import ProductGrid from '@/components/gallery/ProductGrid';
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
  })).filter(category => category.count > 0); // Filtra categorias sem produtos

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
      
      <div className="w-full px-0 md:px-12">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}