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
  { id: 6, name: 'Coleira de Couro', imageUrl: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=500&auto=format&fit=crop', categorySlug: 'acessorios' }, 
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