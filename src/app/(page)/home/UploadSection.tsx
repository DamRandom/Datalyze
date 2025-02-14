"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const UploadSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

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
      setFile(e.dataTransfer.files[0]);
      console.log("File received:", e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      console.log("File selected:", e.target.files[0]);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#e4e4e4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-x-4">
        
        {/* Left: Title, description, and upload area */}
        <div
          className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#1E293B] mb-4">
            Organize Your Professors
          </h1>
          <p className="text-base sm:text-lg text-[#475569] mb-6">
            Upload your dataset to start using AI for smart faculty management and gain better insights.
          </p>
          <div
            className={`border-2 border-dashed rounded-lg p-6 bg-[#FFFFFF] text-center transition-all duration-300 relative ${
              isDragging ? "border-[#2563EB] bg-[#DBEAFE]" : "border-[#9CA3AF]"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <p className="text-[#475569] mb-2">
              {file ? `File ready to upload: ${file.name}` : "Drag your dataset here"}
            </p>
            <p className="text-sm text-[#9CA3AF]">Accepted formats: CSV, Excel, JSON</p>
            <input
              type="file"
              onChange={handleFileInputChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="mt-4 inline-block cursor-pointer py-2 px-4 bg-[#a1acaf] text-[#FFFFFF] rounded-lg hover:bg-[#777f81]"
            >
              Select File
            </label>
            {isDragging && (
              <div className="absolute inset-0 bg-[#000000] bg-opacity-30 pointer-events-none rounded-lg"></div>
            )}
          </div>
        </div>

        {/* Right: Illustration */}
        <div
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
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
