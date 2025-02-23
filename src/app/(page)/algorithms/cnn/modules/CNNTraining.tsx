"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CNNTraining() {
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
          Entrenamiento de CNN
        </h2>

        {/* Text Content */}
        <div className="mb-8">
          <h3 className="text-3xl font-medium text-[#444] mb-4" data-aos="fade-up">
            Visión General del Proceso de Entrenamiento
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
            Las Redes Neuronales Convolucionales (CNN) se entrenan utilizando técnicas de aprendizaje supervisado, que requieren datos etiquetados para aprender. El objetivo principal es minimizar la diferencia entre los valores predichos y los reales utilizando una función de pérdida. El proceso implica múltiples pasos para asegurar que la red aprenda representaciones precisas de los datos.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="400">
            Los elementos clave en el entrenamiento de una CNN incluyen preparar los datos, seleccionar una función de pérdida apropiada, utilizar optimizadores para ajustar los pesos y aplicar retropropagación para afinar la red. Estos elementos trabajan juntos para refinar el modelo a lo largo de múltiples iteraciones, mejorando su precisión con cada pasada.
          </p>

          <h3 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="600">
            Pasos Clave en el Entrenamiento de una CNN
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="800">
            El proceso de entrenamiento se divide en cuatro pasos principales:
          </p>
          <ul className="text-lg text-[#555] mb-6 pl-6 list-disc" data-aos="fade-up" data-aos-delay="1000">
            <li><strong>Preparación de Datos:</strong> Las imágenes se preprocesan y normalizan para asegurar uniformidad en el conjunto de datos.</li>
            <li><strong>Función de Pérdida:</strong> La función de pérdida mide el error entre las etiquetas predichas y reales. Las funciones de pérdida comunes incluyen la entropía cruzada para tareas de clasificación.</li>
            <li><strong>Optimizador:</strong> El optimizador ajusta los pesos de la red para minimizar la función de pérdida. Los optimizadores populares incluyen el Descenso de Gradiente Estocástico (SGD) y Adam.</li>
            <li><strong>Retropropagación:</strong> Esta técnica calcula los gradientes de la función de pérdida y actualiza los pesos del modelo para reducir los errores.</li>
          </ul>

          <h3 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="1200">
            Algoritmos de Optimización Comunes
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="1400">
            Durante el entrenamiento, algoritmos de optimización como el Descenso de Gradiente Estocástico (SGD) y Adam desempeñan un papel crucial en la minimización de la función de pérdida. La tasa de aprendizaje es un parámetro importante que determina el tamaño de los pasos dados durante la optimización. Una tasa de aprendizaje bien ajustada puede acelerar significativamente el entrenamiento y mejorar el rendimiento del modelo.
          </p>
        </div>

        {/* Image with Margins inside a Card */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-6" data-aos="fade-up" data-aos-delay="1600">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/491280-fig-02.svg"
              alt="Proceso de Entrenamiento de CNN"
              width={900}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Image Source */}
        <div className="text-sm text-center text-[#555] mb-8" data-aos="fade-up" data-aos-delay="1800">
          <span className="font-semibold text-[#333]">Fuente: </span>
          <a
            href="https://www.analog.com/en/resources/analog-dialogue/articles/training-convolutional-neural-networks-what-is-machine-learning-part-2.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Towards Data Science
          </a>
        </div>

        {/* Bottom Text */}
        <div className="mb-8 text-justify" data-aos="fade-up" data-aos-delay="2000">
          <p className="text-lg text-[#555]">
            El entrenamiento de una CNN es una parte crítica del proceso de aprendizaje automático, ya que permite que la red aprenda los patrones necesarios a partir de datos etiquetados. Una preparación adecuada de los datos, la selección de la función de pérdida y las técnicas de optimización son esenciales para construir un modelo robusto y eficiente.
          </p>
        </div>
      </div>
    </section>
  );
}
