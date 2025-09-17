// src/components/common/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from './Navbar'; // 1. Importe o novo componente

const Header = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  // O estado e os textos permanecem no Header, pois ele é o "pai"
  // que controla tanto a Navbar quanto o seletor de idioma.
  const navTexts = {
    pt: {
      products: 'PORTIFÓLIO',
      about: 'SOBRE NÓS',
      contact: 'ORÇAMENTOS',
    },
    en: {
      products: 'PORTFOLIO',
      about: 'ABOUT US',
      contact: 'QUOTES',
    },
  };

  const handleLanguageChange = (lang: 'pt' | 'en') => {
    setLanguage(lang);
    console.log(`Idioma alterado para: ${lang.toUpperCase()}`);
  };

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="w-full px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Lado Esquerdo: Logo (permanece igual) */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
                <img
                    src="/images/logo.svg"
                    alt="Mascoteria Logo"
                    className="h-10 w-auto"
                />
            </Link>
          </div>

          {/* Lado Direito: Navbar e Seletor de Idioma */}
          <div className="flex items-center space-x-6">
            
            {/* 2. Use o componente Navbar e passe os dados necessários via props */}
            <Navbar language={language} navTexts={navTexts} />

            {/* Divisor Visual */}
            <div className="hidden md:block h-6 w-px bg-gray-200"></div>
            
            {/* Seletor de Idioma */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleLanguageChange('pt')}
                className={`p-1 rounded-full transition-opacity duration-200 ${language === 'pt' ? 'opacity-100 ring-2 ring-orange-500' : 'opacity-50 hover:opacity-100'}`}
                aria-label="Mudar idioma para Português"
              >
                <span className="text-xl">🇧🇷</span>
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`p-1 rounded-full transition-opacity duration-200 ${language === 'en' ? 'opacity-100 ring-2 ring-orange-500' : 'opacity-50 hover:opacity-100'}`}
                aria-label="Change language to English"
              >
                <span className="text-xl">🇺🇸</span>
              </button>
            </div>

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