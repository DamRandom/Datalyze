"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CNNEvaluation() {
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
          Evaluación del Rendimiento de la CNN
        </h2>

        {/* Text Content */}
        <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
          <p className="text-lg text-[#555] mb-6 text-justify">
            Después de entrenar una Red Neuronal Convolucional (CNN), evaluar su rendimiento es crucial para asegurar su efectividad. La evaluación del rendimiento se lleva a cabo típicamente en un conjunto de datos de prueba separado para verificar qué tan bien el modelo se generaliza a datos no vistos. Este paso ayuda a identificar el sobreajuste potencial y proporciona información sobre las fortalezas y debilidades del modelo.
          </p>
        </div>

        {/* Image and Text Side by Side */}
        <div className="flex flex-col lg:flex-row items-center gap-6 mb-8">
          <div className="flex-1" data-aos="fade-up" data-aos-delay="400">
            <Image
              src="/images/confusion_matrix_diabetic_retinopathy.png"
              alt="Matriz de Confusión para la Detección de Retinopatía Diabética"
              width={900}
              height={450}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1" data-aos="fade-up" data-aos-delay="600">
            <p className="text-lg text-[#555] text-justify">
              Una matriz de confusión es una herramienta de visualización poderosa para evaluar el rendimiento de la CNN. Descompone las predicciones correctas e incorrectas a través de las clases, ofreciendo una perspectiva detallada sobre el comportamiento del modelo. Por ejemplo, al detectar Retinopatía Diabética a partir de imágenes médicas, la matriz puede resaltar áreas específicas donde el modelo sobresale o tiene dificultades, guiando refinamientos adicionales.
            </p>
          </div>
        </div>

        {/* Final Paragraph */}
        <div className="mb-8" data-aos="fade-up" data-aos-delay="800">
          <p className="text-lg text-[#555] text-justify">
            Comprender los matices del rendimiento de la CNN a través de visualizaciones es fundamental para refinar modelos y asegurar su fiabilidad en aplicaciones del mundo real. Herramientas como las matrices de confusión transforman métricas en bruto en información útil, impulsando la mejora continua y fomentando la confianza en los sistemas de IA.
          </p>
        </div>

        {/* Image Source */}
        <div className="text-sm text-center text-[#555] mb-8" data-aos="fade-up" data-aos-delay="1000">
          <span className="font-semibold text-[#333]">Fuente: </span>
          <a
            href="https://towardsdatascience.com/evaluating-model-performance"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Towards Data Science
          </a>
        </div>
      </div>
    </section>
  );
}
