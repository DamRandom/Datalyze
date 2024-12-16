"use client";

import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1E293B] text-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#DBEAFE]">
          ForecEdu
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/" className="hover:text-[#93C5FD]">
            Inicio
          </Link>
          <Link href="/about" className="hover:text-[#93C5FD]">
            Sobre Nosotros
          </Link>
          <Link href="/contact" className="hover:text-[#93C5FD]">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
