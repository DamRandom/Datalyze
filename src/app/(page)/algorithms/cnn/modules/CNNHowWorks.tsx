"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CNNHowWorks() {
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
          Cómo Funcionan las CNN
        </h2>

        {/* Text Content */}
        <div className="mb-8 text-justify" data-aos="fade-up" data-aos-delay="200">
          <p className="text-lg text-[#555] mb-6">
            Las Redes Neuronales Convolucionales operan aprendiendo representaciones jerárquicas de los datos, lo que les permite capturar tanto características de bajo nivel como de alto nivel de manera estructurada. Las primeras capas de la red se centran en detectar patrones simples como bordes o texturas, mientras que las capas más profundas extraen características más complejas como formas u objetos. Este enfoque jerárquico permite que las CNN aborden de manera efectiva tareas sofisticadas como la clasificación de imágenes y la detección de objetos.
          </p>
          <p className="text-lg text-[#555] mb-6">
            El proceso comienza con una imagen de entrada que se analiza a través de múltiples capas de convolución y agrupamiento. Estas capas colaboran para detectar y refinar características esenciales a diferentes niveles de abstracción. Las capas convolucionales enfatizan la extracción de características aplicando filtros especializados, mientras que las capas de agrupamiento reducen las dimensiones espaciales, asegurando la eficiencia computacional sin descartar información crítica. Juntas, estos componentes preparan los datos para la etapa final de clasificación o predicción, donde las capas completamente conectadas aprovechan las características aprendidas para generar salidas precisas.
          </p>
          <p className="text-lg text-[#555] mb-6">
            Al combinar estos mecanismos, las CNN logran una precisión notable en la interpretación y categorización de datos visuales. Esta capacidad ha revolucionado campos como la visión por computadora, convirtiendo a las CNN en herramientas indispensables para analizar imágenes complejas.
          </p>
        </div>

        {/* Image with Margins */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-6" data-aos="fade-up" data-aos-delay="400">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/tensorflow-keras-convolutional-layer-example-1024x704.webp"
              alt="Representación visual del proceso de la CNN"
              width={900}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Image Source */}
        <div className="text-sm text-center text-[#555] mb-8" data-aos="fade-up" data-aos-delay="600">
          <span className="font-semibold text-[#333]">Fuente: </span>
          <a
            href="https:learnopencv.com/understanding-convolutional-neural-networks-cnn/"
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
