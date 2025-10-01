// src/components/product/ProductDetails.tsx
import { ProductDetail } from '@/lib/data';
import { Truck, Shield, RotateCcw } from 'lucide-react';

interface ProductDetailsProps {
  product: ProductDetail;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="space-y-5">
      {/* Header do produto */}
      <div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
            {product.category}
          </span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          {product.name}
        </h1>

        {/* Informações do projeto */}
        <div className="grid grid-cols-2 gap-3 p-3 bg-gray-50 rounded-lg mb-4">
          <div>
            <dt className="text-xs font-medium text-gray-600">Cliente</dt>
            <dd className="text-sm font-semibold text-gray-900">{product.client}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-gray-600">Projeto</dt>
            <dd className="text-sm font-semibold text-gray-900">{product.project}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-gray-600">Acabamento</dt>
            <dd className="text-sm font-semibold text-gray-900">{product.finish}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-gray-600">Ano</dt>
            <dd className="text-sm font-semibold text-gray-900">{product.year}</dd>
          </div>
        </div>
      </div>

      {/* Descrição */}
      <div>
        <h2 className="text-base font-semibold text-gray-900 mb-2">Descrição</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          {product.description}
        </p>
      </div>

      {/* Benefícios */}
      <div>
        <h2 className="text-base font-semibold text-gray-900 mb-2">Benefícios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
            <Truck className="text-green-600" size={16} />
            <span className="text-xs text-green-800">Frete grátis</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
            <Shield className="text-blue-600" size={16} />
            <span className="text-xs text-blue-800">Garantia de qualidade</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg">
            <RotateCcw className="text-purple-600" size={16} />
            <span className="text-xs text-purple-800">Devolução fácil</span>
          </div>
        </div>
      </div>


      {/* Produtos relacionados */}
      <div className="pt-4 border-t border-gray-200">
        <h2 className="text-base font-semibold text-gray-900 mb-2">
          Produtos relacionados
        </h2>
        <p className="text-xs text-gray-600">
          Em breve: Produtos da mesma categoria aparecerão aqui.
        </p>
      </div>
    </div>
  );
}