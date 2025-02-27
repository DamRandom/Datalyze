"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white py-8 w-full">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
        
        {/* Brand Information */}
        <div className="mb-6 lg:mb-0 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-[#DBEAFE]">Datalyze</h2>
          <p className="text-sm text-[#93C5FD] mt-2">
            Perspectivas predictivas para mejores decisiones académicas.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6 text-center lg:text-left">
          <Link href="/" className="hover:text-[#93C5FD] transition-colors duration-300">
            Inicio
          </Link>
          <Link href="/about" className="hover:text-[#93C5FD] transition-colors duration-300">
            Sobre Nosotros
          </Link>
          <Link href="/contact" className="hover:text-[#93C5FD] transition-colors duration-300">
            Contacto
          </Link>
          <Link href="/privacy" className="hover:text-[#93C5FD] transition-colors duration-300">
            Política de Privacidad
          </Link>
        </div>

        {/* Copyright Notice */}
        <div className="mt-6 lg:mt-0 text-sm text-[#9CA3AF] text-center lg:text-right">
          © {new Date().getFullYear()} Datalyze. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
