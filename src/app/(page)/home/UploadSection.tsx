"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import FriedmanModal from "../../../components/FriedmanModal";
import ErrorModal from "../../../components/ErrorModal"; // Nuevo modal de error

const UploadSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isFriedmanModalOpen, setIsFriedmanModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const processingMessages = [
    "Limpiando datos...",
    "Analizando datos...",
    "Calculando resultados...",
    "Generando visualización...",
    "¡Listo para mostrar resultados!"
  ];

  useEffect(() => {
    AOS.init(); 
  }, []);

  const validExtensions = ["csv", "xls", "xlsx", "json"];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const uploadedFile = e.dataTransfer.files[0];
      const fileExtension = uploadedFile.name.split(".").pop()?.toLowerCase();

      if (fileExtension && validExtensions.includes(fileExtension)) {
        setFile(uploadedFile);
      } else {
        setIsErrorModalOpen(true);
      }
    }
  };

  const handleProcess = () => {
    if (!file) return;
    
    setIsProcessing(true);
    let index = 0;

    const interval = setInterval(() => {
      if (index < processingMessages.length) {
        setCurrentMessage(processingMessages[index]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsProcessing(false);
          setIsFriedmanModalOpen(true);
        }, 500);
      }
    }, 1000); 
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#e4e4e4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-x-4">
        
        {/* Left: Title, description, and upload area */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0" data-aos="fade-right" data-aos-duration="1000">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#1E293B] mb-4">
            Organiza a Tus Profesores
          </h1>
          <p className="text-base sm:text-lg text-[#475569] mb-6">
            Sube tu conjunto de datos para comenzar a utilizar la IA en la gestión inteligente del profesorado y obtener mejores insights.
          </p>
          <div
            className="border-2 border-dashed rounded-lg p-6 bg-[#FFFFFF] text-center"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <p className="text-[#475569] mb-2">
              {file ? `Archivo listo para subir: ${file.name}` : "Arrastra tu conjunto de datos aquí"}
            </p>
            <p className="text-sm text-[#9CA3AF]">Formatos aceptados: CSV, Excel, JSON</p>

            {/* Process button */}
            <button
              className="mt-4 py-2 px-4 text-white rounded-lg"
              disabled={!file}
              style={{
                backgroundColor: file ? "#1E293B" : "#a1acaf",
                cursor: file ? "pointer" : "not-allowed",
              }}
              onClick={handleProcess}
            >
              Procesar
            </button>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0" data-aos="fade-left" data-aos-duration="1000">
          <Image
            src="/images/analytics-3291738.jpg"
            alt="Ilustración de gestión de facultad impulsada por IA"
            width={500}
            height={400}
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>

      {/* Overlay screen with spinner */}
      {isProcessing && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <div className="loader mb-4"></div> {/* CSS spinner here */}
            <p className="text-white">{currentMessage}</p>
          </div>
        </div>
      )}

      {/* Modal de procesamiento */}
      <FriedmanModal isOpen={isFriedmanModalOpen} onClose={() => setIsFriedmanModalOpen(false)} />

      {/* Modal de error */}
      <ErrorModal isOpen={isErrorModalOpen} onClose={() => setIsErrorModalOpen(false)}>
      </ErrorModal>
    </section>
  );
};

export default UploadSection;
