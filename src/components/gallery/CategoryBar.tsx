// src/components/gallery/CategoryBar.tsx
"use client";

// Tipo para definir a estrutura de um objeto de categoria
export interface Category {
  slug: string; // ID único para a categoria, ex: "racoes", "brinquedos"
  name: string; // Nome exibido, ex: "Rações", "Brinquedos"
  count?: number; // Contagem opcional de produtos na categoria
}

// Props que o componente vai receber
interface CategoryBarProps {
  categories: Category[];
  activeCategory: string | null; // O slug da categoria ativa
  onSelectCategory: (slug: string) => void; // Função para ser chamada quando uma categoria é clicada
}

const CategoryBar: React.FC<CategoryBarProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 justify-center flex">
        {/* Usamos flex e overflow-x-auto para permitir rolagem horizontal em telas pequenas */}
        <div className="flex items-center space-x-2 sm:space-x-4 py-4 overflow-x-auto whitespace-nowrap">
          {/* Botão "Todas" para limpar o filtro */}
          <button
            onClick={() => onSelectCategory("all")}
            className={`
              px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200
              ${
                activeCategory === "all" || activeCategory === null
                  ? "bg-orange-500 text-white shadow" // Estilo ativo
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300" // Estilo inativo
              }
            `}
          >
            TODOS
          </button>

          {/* Mapeia as categorias para criar um botão para cada uma */}
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => onSelectCategory(category.slug)}
              className={`
                px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200
                ${
                  activeCategory === category.slug
                    ? "bg-orange-500 text-white shadow" // Estilo ativo
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300" // Estilo inativo
                }
              `}
            >
              <span>{category.name} </span>
              {/* Adicionado aqui: Exibe a contagem se ela existir e for maior que zero */}
              {category.count && category.count > 0 && (
                <span className={`text-xs px-2 py-0.5 rounded-full ${activeCategory === category.slug ? 'bg-orange-400' : 'bg-gray-200'}`}>
                  {category.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
