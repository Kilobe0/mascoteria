// src/components/products/ProductGrid.tsx
import { Product } from '@/lib/data';
import ProductCard from './ProductCard'; // Importe o novo card!

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">Nenhum produto encontrado nesta categoria.</p>
      </div>
    );
  }

  return (
    <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;