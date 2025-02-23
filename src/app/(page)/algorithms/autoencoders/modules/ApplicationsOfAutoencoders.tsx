"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ApplicationsOfAutoencoders() {
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
          Aplicaciones de Autoencoders
        </h2>

        {/* Dimensionality Reduction */}
        <article className="mb-12" data-aos="fade-up">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Reducción de Dimensionalidad</h3>
          <p className="text-lg text-[#555] text-justify">
            Los autoencoders se utilizan ampliamente para la reducción de dimensionalidad, comprimiendo datos de alta
            dimensión en una representación latente más pequeña mientras retienen características esenciales. Esta
            aplicación es particularmente útil en el preprocesamiento de datos para visualización o análisis adicional.
          </p>
        </article>

        {/* Anomaly Detection */}
        <article className="mb-12" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Detección de Anomalías</h3>
          <p className="text-lg text-[#555] text-justify">
            Al aprender los patrones normales en los datos, los autoencoders pueden identificar anomalías como entradas
            que producen altos errores de reconstrucción. Esto los convierte en una herramienta poderosa en industrias
            como la detección de fraudes, la seguridad de redes y el mantenimiento predictivo.
          </p>
        </article>

        {/* Noise Removal */}
        <article className="mb-12" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Eliminación de Ruido</h3>
          <p className="text-lg text-[#555] text-justify">
            Los autoencoders de eliminación de ruido están diseñados específicamente para eliminar el ruido de los
            datos de entrada, mejorando la calidad de la salida reconstruida. Esta técnica se aplica comúnmente en el
            procesamiento de imágenes y la mejora de señales de audio.
          </p>
        </article>
      </div>
    </section>
  );
}
