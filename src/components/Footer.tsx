"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white py-6">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Logo a la izquierda con enlace */}
        <div className="mb-4 lg:mb-0">
          <Link href="/">
            <Image 
              src="/images/logo/logo.png" 
              alt="Datalyze Logo" 
              width={160} 
              height={60} 
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Derechos en el centro */}
        <p className="text-sm text-[#9CA3AF] text-center">
          © {new Date().getFullYear()} Datalyze. Todos los derechos reservados.
        </p>

        {/* Iconos a la derecha */}
        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a href="https://t.me/tu_usuario" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-[#93C5FD] transition-colors duration-300">
            <FaTelegramPlane />
          </a>
          <a href="mailto:tu_correo@gmail.com" className="text-white text-2xl hover:text-[#93C5FD] transition-colors duration-300">
            <FaEnvelope />
          </a>
          <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-[#93C5FD] transition-colors duration-300">
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
