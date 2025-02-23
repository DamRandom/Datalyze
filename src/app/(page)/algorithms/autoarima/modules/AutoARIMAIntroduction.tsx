"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AutoARIMAIntroduction() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#f4f4f4] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
          ¿Qué es AutoARIMA?
        </h2>

        {/* Text Content */}
        <div className="mb-8">
          <h3 className="text-3xl font-medium text-[#444] mb-4" data-aos="fade-up">
            Descripción General
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
            AutoARIMA es un método automatizado para construir modelos ARIMA, ampliamente utilizado para la predicción de series temporales. 
            Simplifica el tradicional proceso complejo de selección de parámetros ARIMA, haciéndolo más accesible para los profesionales.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="400">
            El modelo ARIMA (Promedio Móvil Integrado Autoregresivo) es un enfoque estadístico para comprender y predecir valores futuros en una serie temporal. 
            Combina tres componentes clave: Autoregresivo (AR), Integrado (I) y Promedio Móvil (MA), que ayudan a modelar las dependencias en los datos.
          </p>

          <h3 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="600">
            Características Clave
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="800">
            AutoARIMA identifica dinámicamente los valores óptimos para los parámetros AR, I y MA según los datos. 
            Esto elimina la necesidad de procesos manuales de prueba y error y mejora la precisión del modelo resultante. 
            Además, puede manejar patrones estacionales, lo que lo hace adecuado para diversos conjuntos de datos.
          </p>
        </div>

        {/* Image with Margins inside a Card */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-6">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/AutoARIMA/time_series 3.png"
              alt="Representación del Modelo ARIMA"
              width={900}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Image Source */}
        <div className="text-sm text-center text-[#555] mb-8" data-aos="fade-up" data-aos-delay="1200">
          <span className="font-semibold text-[#333]">Fuente: </span>
          <a
            href="https://otexts.com/fpp2/arima.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Pronóstico: Principios y Práctica
          </a>
        </div>

        {/* Bottom Text */}
        <div className="mb-8 text-justify" data-aos="fade-up" data-aos-delay="1400">
          <p className="text-lg text-[#555]">
            AutoARIMA se ha convertido en una herramienta vital en el análisis de series temporales, proporcionando un equilibrio entre rigor estadístico y automatización. 
            Su capacidad para adaptarse a diferentes conjuntos de datos mientras mantiene la interpretabilidad lo convierte en una opción preferida para muchas tareas de pronóstico.
          </p>
        </div>
      </div>
    </section>
  );
}
