// src/app/layout.tsx
import '@/components/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/common/Header'; // Seu componente Header
// Supondo que você também terá um Footer
// import Footer from '@/components/common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mascoteria Clone',
  description: 'Um clone moderno do Mascoteria.com.br',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // A tag <html> continua aqui
    <html lang="pt-BR">
      
      {/* A tag <body> agora envolve todo o conteúdo visível */}
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          
          {/* 1. Mova o Header para cá, o primeiro item dentro do body */}
          <Header />
          
          {/* 2. É uma ótima prática envolver o conteúdo da página com a tag <main> */}
          <main className="flex-grow">
            {children}
          </main>
          
          {/* 3. No futuro, seu Footer viria aqui, antes do fechamento do body */}
          {/* <Footer /> */}

        </div>
      </body>
    </html>
  );
}