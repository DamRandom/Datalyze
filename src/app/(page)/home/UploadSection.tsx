"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import FriedmanModal from "../../../components/common/FriedmanModal"; 

const UploadSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const processingMessages = [
    "Limpiando datos...",
    "Analizando datos...",
    "Calculando resultados...",
    "Generando visualización...",
    "Listo para mostrar resultados!"
  ];

  useEffect(() => {
    AOS.init(); // Inicializa AOS para animaciones
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      console.log("Archivo recibido:", e.dataTransfer.files[0]);
    }
  };

  const handleProcess = () => {
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
          setIsModalOpen(true);
        }, 500); // Mostrar modal después de 500ms
      }
    }, 1000); // Cambia el mensaje cada segundo
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#e4e4e4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-x-4">
        
        {/* Izquierda: Título, descripción y área de carga */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0" data-aos="fade-right" data-aos-duration="1000">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#1E293B] mb-4">
            Organize Your Professors
          </h1>
          <p className="text-base sm:text-lg text-[#475569] mb-6">
            Upload your dataset to start using AI for smart faculty management and gain better insights.
          </p>
          <div
            className="border-2 border-dashed rounded-lg p-6 bg-[#FFFFFF] text-center"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <p className="text-[#475569] mb-2">
              {file ? `File ready to upload: ${file.name}` : "Drag your dataset here"}
            </p>
            <p className="text-sm text-[#9CA3AF]">Accepted formats: CSV, Excel, JSON</p>

            {/* Botón de Procesar */}
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

        {/* Derecha: Ilustración */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0" data-aos="fade-left" data-aos-duration="1000">
          <Image
            src="/images/analytics-3291738.jpg"
            alt="AI-driven faculty management illustration"
            width={500}
            height={400}
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>

      {/* Pantalla opaca y borrosa con spinner */}
      {isProcessing && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <div className="loader mb-4"></div> {/* Aquí puedes añadir un spinner CSS con margen inferior */}
            <p className="text-white">{currentMessage}</p>
          </div>
        </div>
      )}

      {/* Modal */}
      <FriedmanModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default UploadSection;
