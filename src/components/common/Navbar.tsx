// src/components/common/Navbar.tsx
import Link from 'next/link';

// Definimos os tipos para as props que o Navbar vai receber
interface NavTexts {
  products: string;
  about: string;
  contact: string;
}

interface NavbarProps {
  language: 'pt' | 'en';
  navTexts: {
    pt: NavTexts;
    en: NavTexts;
  };
}

const Navbar: React.FC<NavbarProps> = ({ language, navTexts }) => {
  return (
    // Escondemos a navbar em telas menores (md:block)
    <nav className="hidden md:block">
      <ul className="flex items-center space-x-8">
        <li>
          <Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium">
            {/* Usamos as props para obter o texto correto */}
            {navTexts[language].products}
          </Link>
        </li>
        <li>
          <Link href="/sobre" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium">
            {navTexts[language].about}
          </Link>
        </li>
        <li>
          <Link href="/contato" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium">
            {navTexts[language].contact}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;