"use client";

// src/components/grid/UploadSection.tsx
import React, { useState } from 'react';
import Image from 'next/image';

const UploadSection = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState<File | null>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const droppedFile = e.dataTransfer.files[0];
            setFile(droppedFile);
            console.log('File received:', droppedFile);
        }
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            console.log('File selected:', selectedFile);
        }
    };

    return (
        <section 
            className="min-h-screen flex items-center justify-center bg-[#e4e4e4]"
        >
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                {/* Left: Title, text, and upload area */}
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-4xl font-semibold text-[#1E293B] mb-4">Organiza tu claustro</h1>
                    <p className="text-lg text-[#475569] mb-6">
                        Sube tu conjunto de datos para comenzar a aprovechar la IA en la gestión inteligente del claustro y obtener mejores análisis.
                    </p>
                    <div 
                        className={`border-2 border-dashed rounded-lg p-6 bg-[#FFFFFF] text-center transition-all duration-300 relative ${isDragging ? 'border-[#2563EB] bg-[#DBEAFE]' : 'border-[#9CA3AF]'}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <p className="text-[#475569] mb-2">{file ? `Archivo listo para subir: ${file.name}` : 'Arrastra tu conjunto de datos aquí'}</p>
                        <p className="text-sm text-[#9CA3AF]">Formatos aceptados: CSV, Excel, JSON</p>
                        <input 
                            type="file" 
                            onChange={handleFileInputChange} 
                            className="hidden"
                            id="file-upload"
                        />
                        <label htmlFor="file-upload" className="mt-4 inline-block cursor-pointer py-2 px-4 bg-[#2563EB] text-[#FFFFFF] rounded-lg hover:bg-[#1D4ED8]">
                            Seleccionar archivo
                        </label>
                        {isDragging && (
                            <div className="absolute inset-0 bg-[#000000] bg-opacity-30 pointer-events-none rounded-lg"></div>
                        )}
                    </div>
                </div>

                {/* Right: Image */}
                <div className="md:w-1/2 flex justify-center">
                    <Image
                        src="/images/analytics-3291738.jpg"
                        alt="Ilustración de organización del claustro con IA"
                        width={500}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default UploadSection;
