"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AutoencodersTypes() {
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
          Tipos de Autoencoders
        </h2>

        {/* Deep Autoencoders */}
        <article className="mb-12" data-aos="fade-up">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Autoencoders Profundos</h3>
          <p className="text-lg text-[#555] text-justify">
            Los autoencoders profundos utilizan múltiples capas en los componentes del encoder y decoder para capturar
            representaciones de datos más complejas. Este enfoque les permite extraer características jerárquicas, lo
            que los hace adecuados para tareas que implican conjuntos de datos intrincados, como imágenes o texto.
          </p>
        </article>

        {/* Regular Autoencoders */}
        <article className="mb-12" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Autoencoders Regulares</h3>
          <p className="text-lg text-[#555] text-justify">
            Los autoencoders regulares se categorizan aún más según sus propósitos y restricciones específicas:
          </p>
          <ul className="list-disc list-inside text-lg text-[#555] mt-4">
            <li>
              <strong>Autoencoders Espacios:</strong> Promueven activaciones escasas en la capa latente, centrándose en
              solo unos pocos neuronas activas, lo que ayuda en la selección e interpretación de características.
            </li>
            <li>
              <strong>Autoencoders de Denoising:</strong> Se entrenan con entradas corruptas para reconstruir los datos
              originales y limpios. Estos son particularmente útiles para eliminar el ruido y mejorar la calidad de los
              datos.
            </li>
            <li>
              <strong>Autoencoders Contractivos:</strong> Agregan una penalización de regularización para hacer que la
              representación latente sea más robusta contra pequeñas variaciones en los datos de entrada.
            </li>
          </ul>
        </article>

        {/* Variational Autoencoders */}
        <article className="mb-12" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Autoencoders Variacionales (VAEs)</h3>
          <p className="text-lg text-[#555] text-justify">
            Los Autoencoders Variacionales (VAEs) introducen un enfoque probabilístico al autoencoding. Su objetivo es
            generar nuevos puntos de datos similares a la entrada al aprender una distribución sobre el espacio latente.
            Los VAEs se utilizan ampliamente en tareas generativas, como la síntesis de imágenes y la detección de
            anomalías.
          </p>
        </article>
      </div>
    </section>
  );
}
