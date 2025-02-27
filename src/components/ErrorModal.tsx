import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
          src="/images/Pipeline maintenance-rafiki.png" 
          alt="Error"
          width={200} 
          height={200}
          className="mb-4"
        />
        <h2 className="text-2xl font-semibold text-[#1E293B] mb-2">
          Format not supported
        </h2>
        <p className="text-gray-700 text-base mb-4">
          We do not support that format yet. Currently, we only accept files in CSV, Excel, or JSON format.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-[#1E293B] text-white rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default ErrorModal;
