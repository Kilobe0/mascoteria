import 'server-only';

// Tipagem para garantir que ambos os dicionários tenham a mesma estrutura
export type Dictionary = {
  navbar: {
    home: string;
    budgets: string;
    about: string;
  };
  orderPage: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      emailHelper: string;
      company: string;
      button: string;
    };
  };
  aboutPage: {
    title: string;
    description: string;
  };
};

const dictionaries = {
  'pt-BR': () => import('@/app/[lang]/dictionaries/pt.json').then((module) => module.default as Dictionary),
  'en-US': () => import('@/app/[lang]/dictionaries/en.json').then((module) => module.default as Dictionary),
};

export const getDictionary = async (locale: 'pt-BR' | 'en-US') => {
  return dictionaries[locale]();
};