// src/app/[lang]/layout.tsx

import '@/components/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getDictionary } from '@/lib/dictionaries';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import CopyrightImage from '@/components/common/CopyrightImage';
import WhatsAppButton from '@/components/common/WhatsappButton';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return [{ lang: 'pt-BR' }, { lang: 'en-US' }];
}

export const metadata: Metadata = {
  title: 'Mascoteria Clone',
  description: 'Prototipo',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'pt-BR' | 'en-US');

  return (
    <html lang={lang}>
      
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header lang={lang as 'pt-BR' | 'en-US'} dict={dict} />
          <main className="flex flex-col flex-grow">
            {children}
          </main>
          <Footer />
        </div>

        <CopyrightImage />
        
        <WhatsAppButton phoneNumber="5511999999999" />
      </body>
    </html>
  );
}