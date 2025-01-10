"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white py-8 w-full">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
        {/* Información de la marca */}
        <div className="mb-6 lg:mb-0 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-[#DBEAFE]">Datalyze</h2>
          <p className="text-sm text-[#93C5FD] mt-2">
            Predictive insights for better academic decisions.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex space-x-6 text-center lg:text-left">
          <Link href="/" className="hover:text-[#93C5FD] transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#93C5FD] transition-colors duration-300">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-[#93C5FD] transition-colors duration-300">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-[#93C5FD] transition-colors duration-300">
            Privacy Policy
          </Link>
        </div>

        {/* Aviso de copyright */}
        <div className="mt-6 lg:mt-0 text-sm text-[#9CA3AF] text-center lg:text-right">
          © {new Date().getFullYear()} Datalyze. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
