// src/components/common/Navbar.tsx
import Link from 'next/link';
import { Dictionary } from '@/lib/dictionaries';

// 1. Nova interface de props, muito mais simples
interface NavLinks {
  home: string;
  budgets: string;
  about: string;
}

interface NavbarProps {
  dict: Dictionary['navbar']; // Recebe apenas a parte do dicionário que lhe interessa
  links: NavLinks;            // Recebe os links já construídos
}

const Navbar: React.FC<NavbarProps> = ({ dict, links }) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center space-x-8">
        <li>
          <Link href={links.home} className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium">
            {dict.home}
          </Link>
        </li>
        <li>
          <Link href={links.about} className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium">
            {dict.about}
          </Link>
        </li>
        <li>
          <Link href={links.budgets} className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium">
            {dict.budgets}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;