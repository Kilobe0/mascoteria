// middleware.ts

import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['pt-BR', 'en-US'];
export const defaultLocale = 'pt-BR';

function getLocale(request: NextRequest): string {
  const headers = { 'accept-language': request.headers.get('accept-language') || '' };
  const languages = new Negotiator({ headers }).languages();
  
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verifica se o pathname já contém um local (ex: /pt/orcamentos)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redireciona se não houver local
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

// ===== A MUDANÇA ESTÁ AQUI =====
export const config = {
  matcher: [
    // Pula os caminhos que começam com:
    // - api (rotas de API)
    // - _next/static (arquivos estáticos)
    // - _next/image (imagens otimizadas)
    // - favicon.ico (o ícone do favicon)
    // Isso garante que o middleware SÓ rode em rotas de página.
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)'
  ],
};