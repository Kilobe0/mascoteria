// src/components/products/ProductGrid.tsx
import { Product } from '@/lib/data'; // Importe o tipo Product

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  // Se não houver produtos, exibe uma mensagem
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">Nenhum produto encontrado nesta categoria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        // Aqui você usaria seu componente ProductCard.tsx
        // Por enquanto, vamos usar um div simples como placeholder.
        <div key={product.id} className="border p-4 rounded-lg shadow-sm text-center">
          <div className="w-full h-48 bg-gray-200 mb-4 rounded">
            {/* Em um cenário real: <Image src={product.imageUrl} ... /> */}
          </div>
          <h2 className="font-bold">{product.name}</h2>
          <p className="text-sm text-gray-500 capitalize">{product.categorySlug}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;