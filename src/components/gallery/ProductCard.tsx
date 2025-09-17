// src/components/products/ProductCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Product, mockCategories } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Encontra o nome da categoria a partir do slug
  const categoryName =
    mockCategories.find((c) => c.slug === product.categorySlug)?.name ||
    product.categorySlug;

  return (
    // O 'group' é a mágica que permite o hover em todo o card afetar elementos filhos
    <Link
      href={`/produtos/${product.id}`}
      className="group relative block overflow-hidden break-inside-avoid mb-6"
    >
      {/* Container da Imagem com Aspect Ratio */}
      <div className="relative w-full bg-gray-200">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500} // Valor de base para a proporção
          height={750} // Valor de base para a proporção
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="
            object-cover w-full h-auto
            transition-transform duration-500 ease-in-out
            group-hover:scale-105
          "
        />
      </div>

      {/* Overlay de Hover */}
      <div
        className="
          absolute inset-0 flex flex-col items-center justify-center text-center p-4
          bg-white
          opacity-0 group-hover:opacity-75
          transition-opacity duration-300 ease-in-out
        "
      >
        <h3 className="text-xl lg:text-4xl font-bold text-black leading-tight">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-black">{categoryName}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
