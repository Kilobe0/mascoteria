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
    // Aqui está o grid responsivo
    // - Mobile: 1 coluna (padrão)
    // - Telas Médias (md): 2 colunas
    // - Telas Grandes (lg): 4 colunas
    // - gap-6 define o espaçamento entre os cards
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;