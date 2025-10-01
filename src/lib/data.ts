// src/lib/data.ts

// 1. Definindo os tipos de dados
export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  categorySlug: string; // Chave para conectar com a categoria
}

export interface Category {
  slug: string;
  name: string;
}

// 2. Interface expandida para detalhes do produto
export interface ProductDetail extends Product {
  description: string;
  client: string;
  project: string;
  finish: string;
  year: number;
  images: string[]; // Array de URLs das imagens
  category: string; // Nome da categoria (não apenas slug)
}

// 2. Mock de dados (substitua por uma chamada de API no futuro)
export const mockCategories: Category[] = [
  { slug: 'racoes', name: 'Rações' },
  { slug: 'petiscos', name: 'Petiscos' },
  { slug: 'brinquedos', name: 'Brinquedos' },
  { slug: 'higiene', name: 'Higiene e Beleza' },
  { slug: 'farmacia', name: 'Farmácia' },
];

export const mockProducts: Product[] = [
  { id: 1, name: 'Ração Golden Power Training', imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&auto=format&fit=crop', categorySlug: 'racoes' },
  { id: 2, name: 'Bolinha de Tênis para Cães', imageUrl: '/images/gallery/mock1.jpg', categorySlug: 'brinquedos' },
  { id: 3, name: 'Osso Mastigável de Couro', imageUrl: '/images/gallery/mock2.jpg', categorySlug: 'petiscos' },
  { id: 4, name: 'Shampoo Neutro Pelos Claros', imageUrl: '/images/gallery/mock3.jpg', categorySlug: 'higiene' },
  { id: 5, name: 'Ração Premier Ambientes Internos', imageUrl: '/images/gallery/mock4.jpg', categorySlug: 'racoes' },
  { id: 6, name: 'Coleira de Couro', imageUrl: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=500&auto=format&fit=crop', categorySlug: 'acessorios, racoes' },
];

// 3. Mock de dados expandidos para detalhes do produto
export const mockProductDetails: ProductDetail[] = [
  {
    id: 1,
    name: 'Ração Golden Power Training',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&auto=format&fit=crop',
    categorySlug: 'racoes',
    category: 'Rações',
    description: 'Ração premium desenvolvida especialmente para cães adultos com alta demanda energética. Fórmula balanceada com proteínas de alta qualidade, vitaminas e minerais essenciais para manter a saúde e vitalidade do seu pet.',
    client: 'Cliente Premium',
    project: 'Linha Super Premium Training',
    finish: 'Embalagem metalizada com zíper',
    year: 2024,
    images: [
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&auto=format&fit=crop',
      '/images/gallery/mock1.jpg',
      '/images/gallery/mock2.jpg',
      '/images/gallery/mock3.jpg',
      '/images/gallery/mock4.jpg'
    ]
  },
  {
    id: 2,
    name: 'Bolinha de Tênis para Cães',
    imageUrl: '/images/gallery/mock1.jpg',
    categorySlug: 'brinquedos',
    category: 'Brinquedos',
    description: 'Bolinha de tênis resistente e durável, perfeita para brincadeiras ao ar livre. Material atóxico e resistente a mordidas, ideal para cães de todos os portes.',
    client: 'Cliente Standard',
    project: 'Linha Classic Toys',
    finish: 'Borracha vulcanizada',
    year: 2023,
    images: [
      '/images/gallery/mock1.jpg',
      '/images/gallery/mock2.jpg',
      '/images/gallery/mock3.jpg',
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&auto=format&fit=crop'
    ]
  },
  {
    id: 3,
    name: 'Osso Mastigável de Couro',
    imageUrl: '/images/gallery/mock2.jpg',
    categorySlug: 'petiscos',
    category: 'Petiscos',
    description: 'Osso natural de couro bovino, ideal para limpeza dental e entretenimento. Ajuda a remover tártaro e massagear as gengivas durante a mastigação.',
    client: 'Cliente Premium',
    project: 'Linha Natural Health',
    finish: 'Couro 100% natural',
    year: 2024,
    images: [
      '/images/gallery/mock2.jpg',
      '/images/gallery/mock3.jpg',
      '/images/gallery/mock4.jpg',
      '/images/gallery/mock1.jpg'
    ]
  },
  {
    id: 4,
    name: 'Shampoo Neutro Pelos Claros',
    imageUrl: '/images/gallery/mock3.jpg',
    categorySlug: 'higiene',
    category: 'Higiene e Beleza',
    description: 'Shampoo neutro especialmente formulado para cães e gatos de pelos claros. Limpa suavemente sem agredir a pele, mantendo o brilho natural dos pelos.',
    client: 'Cliente Premium',
    project: 'Linha Beauty Care',
    finish: 'Frasco PET reciclável',
    year: 2023,
    images: [
      '/images/gallery/mock3.jpg',
      '/images/gallery/mock4.jpg',
      '/images/gallery/mock1.jpg',
      '/images/gallery/mock2.jpg'
    ]
  },
  {
    id: 5,
    name: 'Ração Premier Ambientes Internos',
    imageUrl: '/images/gallery/mock4.jpg',
    categorySlug: 'racoes',
    category: 'Rações',
    description: 'Ração específica para gatos que vivem em ambientes internos. Controle de peso e bolas de pelo, com fórmula que reduz o odor das fezes.',
    client: 'Cliente Premium',
    project: 'Linha Indoor Premium',
    finish: 'Embalagem com fechamento hermético',
    year: 2024,
    images: [
      '/images/gallery/mock4.jpg',
      '/images/gallery/mock1.jpg',
      '/images/gallery/mock2.jpg',
      '/images/gallery/mock3.jpg'
    ]
  },
  {
    id: 6,
    name: 'Coleira de Couro',
    imageUrl: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=500&auto=format&fit=crop',
    categorySlug: 'acessorios',
    category: 'Acessórios',
    description: 'Coleira de couro legítimo com acabamento premium. Costura reforçada e fivela de metal resistente, disponível em diversos tamanhos.',
    client: 'Cliente Standard',
    project: 'Linha Classic Accessories',
    finish: 'Couro natural tratado',
    year: 2023,
    images: [
      'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=500&auto=format&fit=crop',
      '/images/gallery/mock1.jpg',
      '/images/gallery/mock2.jpg'
    ]
  }
];

// 3. Função para contar produtos por categoria
export const getProductCounts = (products: Product[]): Record<string, number> => {
  return products.reduce((acc, product) => {
    const slug = product.categorySlug;
    // Se a categoria ainda não existe no acumulador, inicializa com 0
    if (!acc[slug]) {
      acc[slug] = 0;
    }
    // Incrementa a contagem para a categoria do produto atual
    acc[slug]++;
    return acc;
  }, {} as Record<string, number>);
};

// 4. Funções para produtos detalhados
export const getProductById = (id: number): ProductDetail | null => {
  return mockProductDetails.find(product => product.id === id) || null;
};

export const getAllProductIds = (): number[] => {
  return mockProductDetails.map(product => product.id);
};

export const getProductsByCategory = (categorySlug: string): ProductDetail[] => {
  return mockProductDetails.filter(product => product.categorySlug === categorySlug);
};

export const getRelatedProducts = (productId: number, limit = 4): ProductDetail[] => {
  const currentProduct = getProductById(productId);
  if (!currentProduct) return [];

  return mockProductDetails
    .filter(product =>
      product.id !== productId &&
      product.categorySlug === currentProduct.categorySlug
    )
    .slice(0, limit);
};

export const searchProducts = (query: string): ProductDetail[] => {
  const lowerQuery = query.toLowerCase();
  return mockProductDetails.filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery)
  );
};