import { useState } from 'react';

import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a text-gray_gradient hover:scale-105 transition-transform duration-300" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0217] shadow-lg shadow-blue-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-gray_gradient font-bold text-xl hover:scale-105 transition-transform duration-300">
            Mayank's Profile
          </a>

          <button
            onClick={toggleMenu}
            className="text-gray_gradient hover:scale-110 transition-transform duration-300 focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-7 h-7" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'} transition-all duration-500 ease-in-out bg-[#0B0217]`}>        
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
