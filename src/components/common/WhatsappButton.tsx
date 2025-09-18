// src/components/common/WhatsAppButton.tsx
'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = 'Olá! Gostaria de saber mais sobre o seu trabalho!' 
}) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    // Container principal: agora é um flexbox para alinhar os itens
    <div className="fixed bottom-5 right-5 z-[100] flex items-center gap-3">
      
      {/* 
        Balão de texto:
        - Não é mais 'absolute' e não depende mais do 'group-hover'.
        - 'hidden md:flex': Fica escondido por padrão (mobile) e vira um flex item em telas médias (md) ou maiores.
      */}
      <div 
        className="
          hidden md:flex items-center
          px-3 py-2 bg-white text-black text-sm font-bold rounded-md shadow-lg
          whitespace-nowrap
        "
      >
        Posso ajudar?
      </div>
      
      {/* Botão principal do WhatsApp (código praticamente inalterado) */}
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat Button"
        className="
          relative flex items-center justify-center 
          w-[60px] h-[60px] bg-[#25D366] rounded-full
          shadow-lg hover:scale-105 transition-transform duration-200
        "
      >
        <div 
          className="absolute inset-0 rounded-full animate-shockwave -z-10"
          style={{ animationDelay: '2s' }}
        ></div>
        
        <FaWhatsapp size={36} className="text-white" />
      </Link>
    </div>
  );
};

export default WhatsAppButton;