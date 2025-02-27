import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Asegúrate de instalar framer-motion

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 w-96 text-center flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/images/Pipeline maintenance-rafiki.png" // Cambia la ruta a la imagen que desees usar
          alt="Error"
          width={200} // Aumenta el tamaño de la imagen
          height={200}
          className="mb-4" // Mantiene el margen en la parte inferior
        />
        <h2 className="text-2xl font-semibold text-[#1E293B] mb-2"> {/* Aumentado el tamaño del texto */}
          Formato no compatible
        </h2>
        <p className="text-gray-700 text-base mb-4"> {/* Aumentado el tamaño del texto */}
          Aún no trabajamos con ese formato. Actualmente solo aceptamos archivos en formato CSV, Excel o JSON.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-[#1E293B] text-white rounded-lg" // Cambiado a color 1E293B
          onClick={onClose}
        >
          Cerrar
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default ErrorModal;
