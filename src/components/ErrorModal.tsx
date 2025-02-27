import React from "react";

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode; // Agrega esta línea para permitir children
}

const ErrorModal: React.FC<ErrorModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
        <h2 className="text-xl font-semibold text-red-600 mb-4">
          Formato no compatible
        </h2>
        <p className="text-gray-700 text-sm mb-4">
          Aún no trabajamos con ese formato. Actualmente solo aceptamos archivos en formato CSV, Excel o JSON.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          Estamos trabajando en ampliar la compatibilidad con más formatos en el futuro.
        </p>
        <p className="text-gray-700 text-sm">
          Disculpa las molestias y prueba con uno de los formatos admitidos.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
          onClick={onClose}
        >
          Cerrar
        </button>
        {children} {/* Asegúrate de renderizar children aquí si es necesario */}
      </div>
    </div>
  );
};

export default ErrorModal;
