"use client";

import { useState } from "react";

interface NavBarProps {
  sections: { id: string; label: string }[]; 
}

const NavBar: React.FC<NavBarProps> = ({ sections }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1E293B] text-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-[#DBEAFE]">
          Datalyze
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute top-[64px] left-0 w-full bg-[#1E293B] md:bg-transparent md:static md:flex md:space-x-6 md:top-0 md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="relative block px-6 py-4 md:inline-block md:p-0 text-white hover:text-[#93C5FD] transition-colors duration-300 
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#93C5FD] 
                after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
