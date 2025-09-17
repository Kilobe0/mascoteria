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
  { id: 2, name: 'Bolinha de Tênis para Cães', imageUrl: 'https://images.unsplash.com/photo-1599481313361-b66970a04c8f?w=500&auto=format&fit=crop', categorySlug: 'brinquedos' },
  { id: 3, name: 'Osso Mastigável de Couro', imageUrl: 'https://images.unsplash.com/photo-1601758176539-76077ad7512d?w=500&auto=format&fit=crop', categorySlug: 'petiscos' },
  { id: 4, name: 'Shampoo Neutro Pelos Claros', imageUrl: 'https://images.unsplash.com/photo-1556856543-0857112f4b8a?w=500&auto=format&fit=crop', categorySlug: 'higiene' },
  { id: 5, name: 'Ração Premier Ambientes Internos', imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&auto=format&fit=crop', categorySlug: 'racoes' },
  { id: 6, name: 'Antipulgas e Carrapatos', imageUrl: 'https://images.unsplash.com/photo-1596791692842-5321f55a151b?w=500&auto=format&fit=crop', categorySlug: 'farmacia' },
  { id: 7, name: 'Corda de Puxar Resistente', imageUrl: 'https://images.unsplash.com/photo-1565780302839-a91a9b2f6b30?w=500&auto=format&fit=crop', categorySlug: 'brinquedos' },
  { id: 8, name: 'Bifinho Sabor Carne', imageUrl: 'https://images.unsplash.com/photo-1615838209823-35b85a3c6130?w=500&auto=format&fit=crop', categorySlug: 'petiscos' },
  { id: 9, name: 'Ração Seca para Gatos', imageUrl: 'https://images.unsplash.com/photo-1592194993183-4a00f87a3899?w=500&auto=format&fit=crop', categorySlug: 'racoes' },
  { id: 10, name: 'Coleira de Couro', imageUrl: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=500&auto=format&fit=crop', categorySlug: 'acessorios' }, // Adicionei um para exemplo
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