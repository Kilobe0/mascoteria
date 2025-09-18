// src/components/common/LanguageSwitcher.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface LanguageSwitcherProps {
  lang: 'pt-BR' | 'en-US';
}

// Mapeamento de rotas. Adicione novas rotas aqui quando criá-las.
const routeTranslations: Record<string, Record<'pt-BR' | 'en-US', string>> = {
  '/': { 'pt-BR': '/', 'en-US': '/' },
  '/orcamentos': { 'pt-BR': '/orcamentos', 'en-US': '/quotes' },
  '/sobre': { 'pt-BR': '/sobre', 'en-US': '/about' },
  // O inverso também é importante para a lógica funcionar nos dois sentidos
  '/quotes': { 'pt-BR': '/orcamentos', 'en-US': '/quotes' },
  '/about': { 'pt-BR': '/sobre', 'en-US': '/about' },
};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ lang }) => {
  const pathname = usePathname();

  // Função para encontrar a URL da página no outro idioma
  const getTranslatedUrl = (targetLang: 'pt-BR' | 'en-US') => {
    // 1. Remove o prefixo de idioma atual da URL (/pt-BR/orcamentos -> /orcamentos)
    const pathWithoutLang = pathname.replace(`/${lang}`, '') || '/';
    
    // 2. Procura a tradução no nosso objeto de mapeamento
    const translatedPath = routeTranslations[pathWithoutLang]?.[targetLang];
    
    // 3. Se não encontrar uma tradução (página 404, por ex.), manda para a home
    if (!translatedPath) {
      return `/${targetLang}`;
    }

    // 4. Constrói a URL final
    return `/${targetLang}${translatedPath}`;
  };

  const ptUrl = getTranslatedUrl('pt-BR');
  const enUrl = getTranslatedUrl('en-US');

  return (
    <div className="flex items-center space-x-2">
      {/* Botão Português */}
      <Link
        href={ptUrl}
        className={`p-1 rounded-full transition-opacity duration-200 ${lang === 'pt-BR' ? 'opacity-100 ring-2 ring-orange-500' : 'opacity-50 hover:opacity-100'}`}
        aria-label="Mudar idioma para Português"
      >
        <span className="text-xl">🇧🇷</span>
      </Link>
      
      {/* Botão Inglês */}
      <Link
        href={enUrl}
        className={`p-1 rounded-full transition-opacity duration-200 ${lang === 'en-US' ? 'opacity-100 ring-2 ring-orange-500' : 'opacity-50 hover:opacity-100'}`}
        aria-label="Change language to English"
      >
        <span className="text-xl">🇺🇸</span>
      </Link>
    </div>
  );
};

export default LanguageSwitcher;