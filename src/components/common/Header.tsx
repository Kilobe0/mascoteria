// src/components/common/Header.tsx
'use client';

import { Dictionary } from '@/lib/dictionaries';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  lang: 'pt-BR' | 'en-US';
  dict: Dictionary;
}

const Header: React.FC<HeaderProps> = ({ lang, dict }) => {

  const navLinks = {

     home : `/${lang}`,
     about : lang === 'pt-BR' ? `/${lang}/sobre` : `/${lang}/about`,
     budgets : lang === 'pt-BR' ? `/${lang}/orcamentos` : `/${lang}/quotes`,
  }

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="w-full px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Lado Esquerdo: Logo (permanece igual) */}
          <div className="flex-shrink-0">
            <Link href={navLinks.home} className="flex items-center space-x-2">
                <Image
                    src="/images/logo.svg" // O caminho absoluto para /public/images/logo.svg
                    alt="Mascoteria Logo"
                    width={150} // Defina uma largura de base para o SVG
                    height={40} // Defina uma altura de base para o SVG
                    className="h-10 w-auto" // Tailwind pode sobrescrever a altura, mantendo a largura automática
                />
            </Link>
          </div>

          {/* Lado Direito: Navbar e Seletor de Idioma */}
          <div className="flex items-center space-x-6">
            
            {/* 2. Use o componente Navbar e passe os dados necessários via props */}
            <Navbar dict={dict.navbar} links={navLinks} />            

            <LanguageSwitcher lang={lang}/>

            {/* Menu Hamburguer para Mobile (permanece igual) */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-orange-500">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-4 6h4" />
                </svg>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;