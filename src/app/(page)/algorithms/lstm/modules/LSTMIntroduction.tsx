"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LSTMSection() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      delay: 200,    
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#f4f4f4] py-16 px-4 mt-12">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
          ¿Qué son los LSTM?
        </h2>

        {/* Text Content */}
        <div className="mb-8">
          <h3 className="text-3xl font-medium text-[#444] mb-4" data-aos="fade-up">
            Entendiendo los LSTM
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
            Las redes de Memoria a Largo y Corto Plazo, o LSTM, son una forma especializada de Redes Neuronales Recurrentes (RNN) diseñadas para abordar las limitaciones de las RNN tradicionales en el manejo de dependencias a largo plazo. Introducidas por Hochreiter y Schmidhuber en 1997, los LSTM se han convertido en una piedra angular en las tareas de modelado de secuencias.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="400">
            La principal innovación de los LSTM radica en su capacidad para retener información durante períodos de tiempo prolongados. Esto se logra a través de una estructura celular única equipada con puertas que regulan el flujo de información. Estas puertas permiten a los LSTM olvidar, retener o pasar información al siguiente paso temporal de manera selectiva, lo que los hace altamente efectivos para tareas que requieren retención de contexto, como la predicción de series temporales, el modelado de lenguaje y el reconocimiento de voz.
          </p>

          <h3 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="600">
            Características Clave
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="800">
            Los LSTM están diseñados para superar el problema del gradiente que desaparece que afecta a las RNN tradicionales durante el entrenamiento. Su arquitectura distintiva incluye:
          </p>
          <ul className="list-disc pl-8 text-lg text-[#555] mb-6" data-aos="fade-up" data-aos-delay="1000">
            <li><strong>Puerta de Olvido:</strong> Decide qué información descartar del estado de la celda.</li>
            <li><strong>Puerta de Entrada:</strong> Determina qué nueva información agregar al estado de la celda.</li>
            <li><strong>Puerta de Salida:</strong> Regula qué información se debe outputear en cada paso temporal.</li>
          </ul>
        </div>

        {/* Image with Margins inside a Card */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-6">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/LSTM/LSTMcell.webp" 
              alt="Arquitectura LSTM"
              width={900}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Image Source */}
        <div className="text-sm text-center text-[#555] mb-8" data-aos="fade-up" data-aos-delay="1400">
          <span className="font-semibold text-[#333]">Fuente: </span>
          <a
            href="https://towardsdatascience.com/illustrated-guide-to-lstms-and-gru-s-a-step-by-step-explanation-44e9eb85bf21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Guía Ilustrada de los LSTM y GRU: Una explicación paso a paso
          </a>
        </div>

        {/* Bottom Text */}
        <div className="mb-8 text-justify" data-aos="fade-up" data-aos-delay="1600">
          <p className="text-lg text-[#555]">
            Los LSTM son ampliamente utilizados en dominios que requieren el procesamiento de datos secuenciales. Su capacidad para modelar dependencias temporales los convierte en herramientas invaluables para aplicaciones como la predicción de precios de acciones, la traducción de idiomas y el análisis de sentimientos en texto.
          </p>
        </div>
      </div>
    </section>
  );
}
