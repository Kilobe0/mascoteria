// src/app/layout.tsx

import '@/components/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import CopyrightImage from '@/components/common/CopyrightImage';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mascoteria Clone',
  description: 'Prototipo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt-BR">
      
      {/* A tag <body> agora envolve todo o conteúdo visível */}
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <CopyrightImage />
      </body>
    </html>
  );
}