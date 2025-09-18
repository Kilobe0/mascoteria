import { getDictionary } from '@/lib/dictionaries';

// Garanta que a assinatura esteja exatamente assim
export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: 'pt-BR' | 'en-US' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          {dict.aboutPage.title}
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          {dict.aboutPage.description}
        </p>
      </div>
    </div>
  );
}