"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const UploadSection = () => {
  const [file, setFile] = useState<File | null>(null);

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

            {/* Botón de Procesar en la misma ubicación que el anterior */}
            <button
              className="mt-4 py-2 px-4 text-white rounded-lg"
              disabled={!file}
              style={{
                backgroundColor: file ? "#1E293B" : "#a1acaf",
                cursor: file ? "pointer" : "not-allowed",
              }}
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
    </section>
  );
};

export default UploadSection;
