// src/components/common/Footer.tsx
import Link from 'next/link';
// Importaremos os ícones específicos da biblioteca 'react-icons'
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaVimeoV,
  FaYoutube,
  FaBehance,
} from 'react-icons/fa';

// Criar um array com os dados das redes sociais torna o código mais limpo
const socialLinks = [
  { name: 'Instagram', href: '#', icon: FaInstagram },
  { name: 'Facebook', href: '#', icon: FaFacebookF },
  { name: 'Twitter', href: '#', icon: FaTwitter },
  { name: 'Vimeo', href: '#', icon: FaVimeoV },
  { name: 'YouTube', href: '#', icon: FaYoutube },
  { name: 'Behance', href: '#', icon: FaBehance },
];

const Footer = () => {
  return (
    <footer className="bg-white"> {/* Adicionei uma borda sutil no topo */}
      <div className="w-full mx-auto py-6 px-6 md:px-12 flex items-center justify-center flex-wrap gap-4">

          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank" // Abre o link em uma nova aba
              rel="noopener noreferrer" // Boa prática de segurança para links `target="_blank"`
              aria-label={`Siga-nos no ${link.name}`}
              className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
            >
              {/* Renderiza o componente de ícone e define o tamanho */}
              <link.icon size={20} />
            </Link>
          ))}
      </div>
    </footer>
  );
};

export default Footer;