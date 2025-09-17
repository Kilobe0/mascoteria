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
  { id: 1, name: 'Ração Golden Power Training', imageUrl: '/images/racao1.jpg', categorySlug: 'racoes' },
  { id: 2, name: 'Bolinha de Tênis para Cães', imageUrl: '/images/brinquedo1.jpg', categorySlug: 'brinquedos' },
  { id: 3, name: 'Osso Mastigável de Couro', imageUrl: '/images/petisco1.jpg', categorySlug: 'petiscos' },
  { id: 4, name: 'Shampoo Neutro Pelos Claros', imageUrl: '/images/higiene1.jpg', categorySlug: 'higiene' },
  { id: 5, name: 'Ração Premier Ambientes Internos', imageUrl: '/images/racao2.jpg', categorySlug: 'racoes' },
  { id: 6, name: 'Antipulgas e Carrapatos', imageUrl: '/images/farmacia1.jpg', categorySlug: 'farmacia' },
  { id: 7, name: 'Corda de Puxar Resistente', imageUrl: '/images/brinquedo2.jpg', categorySlug: 'brinquedos' },
  { id: 8, name: 'Bifinho Sabor Carne', imageUrl: '/images/petisco2.jpg', categorySlug: 'petiscos' },
  { id: 9, name: 'Ração Seca para Gatos', imageUrl: '/images/racao3.jpg', categorySlug: 'racoes' },
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