// src/components/common/CopyrightImage.tsx
import Image from 'next/image';

const CopyrightImage = () => {
  return (
    // O contêiner usa 'fixed' para ficar parado na tela.
    <div
      className="
        hidden xl:block   /* 1. VISIBILIDADE: Escondido por padrão, aparece em telas extra-grandes (xl) */
        fixed              /* 2. POSIÇÃO: Fixa em relação à janela */
        top-[250px]        /* 3. POSICIONAMENTO VERTICAL: 250px do topo (usando valor arbitrário do Tailwind) */
        left-2.5             /* 4. POSICIONAMENTO HORIZONTAL: 16px da borda esquerda */
        z-40               /* 5. Z-INDEX: Garante que fique acima de alguns elementos, mas abaixo de modais, etc. */
      "
    >
      <Image
        src="/images/copyright.png" // Seu caminho na pasta /public
        alt="Copyright Mascoteria"
        // Use as dimensões exatas da sua imagem para evitar distorções
        width={30}
        height={115}
        // className para garantir que a imagem não seja estilizada de forma estranha
        className="h-auto" 
      />
    </div>
  );
};

export default CopyrightImage;