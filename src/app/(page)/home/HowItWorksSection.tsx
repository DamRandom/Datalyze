"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: "Análisis de Datos",
    description: `Esta etapa implica recolectar, limpiar y analizar datos históricos para comprender patrones y tendencias que afectan el rendimiento de los modelos predictivos. Asegura datos de alta calidad y sin sesgo, adecuados para pruebas posteriores utilizando herramientas estadísticas avanzadas para interpretar la información.`,
    image: "/images/DataAnalysis.webp",
  },
  {
    title: "Identificación de Diferencias",
    description: `En esta fase, se aplica la Prueba de Friedman, un análisis estadístico para determinar si existen diferencias significativas en el rendimiento de varios modelos predictivos. Esta prueba es crucial para validar que los resultados no son meramente debido al azar y que los modelos son realmente distintos en sus capacidades predictivas.`,
    image: "/images/IdentifyingDifferences.webp",
  },
  {
    title: "Comparaciones Detalladas",
    description: `Después de identificar diferencias significativas, se realiza una prueba post-hoc para hacer comparaciones específicas entre pares de modelos. Esta prueba proporciona una visión más profunda de las interacciones, destacando qué modelos presentan diferencias reales y no aleatorias, ayudando en la toma de decisiones futuras.`,
    image: "/images/DetailedComparisons.webp",
  },
];

export default function HowItWorksSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#f4f4f4] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center text-[#333] mb-12" data-aos="fade-up">
          Cómo Funciona
        </h2>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              {/* Image */}
              <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>

              {/* Step Description */}
              <div className="md:w-1/2 px-6">
                <h3 className="text-2xl font-medium text-[#444444] mb-4 text-center md:text-left">
                  {step.title}
                </h3>
                <p className="text-lg text-[#555] leading-relaxed text-justify">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
