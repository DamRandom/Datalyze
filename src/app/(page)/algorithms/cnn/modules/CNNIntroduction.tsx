"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CNNSection() {
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
          ¿Qué son las CNN?
        </h2>

        {/* Text Content */}
        <div className="mb-8">
          <h3 className="text-3xl font-medium text-[#444] mb-4" data-aos="fade-up">
            Comprendiendo las CNN
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
            Las Redes Neuronales Convolucionales, o CNN, son una clase de algoritmos de aprendizaje profundo que se utilizan principalmente para procesar y reconocer datos visuales. Su diseño está inspirado en la forma en que el cerebro humano procesa la información visual. Las CNN pueden detectar patrones y dependencias espaciales en las imágenes a través de su estructura jerárquica, lo que las hace muy efectivas en tareas como la clasificación de imágenes, la detección de objetos y el reconocimiento facial.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="400">
            La fortaleza de las CNN radica en su capacidad para aprender automáticamente características de imágenes de entrada sin procesar, eliminando la necesidad de extracción manual de características. Esto se logra a través de múltiples capas: capas de convolución que aplican filtros para capturar características, capas de agrupamiento que reducen la carga computacional y capas completamente conectadas que realizan la clasificación final después de aprender las características.
          </p>

          <h3 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="600">
            Componentes Clave
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="800">
            Las CNN se construyen sobre una serie de componentes que trabajan juntos para procesar imágenes de una manera que imita la percepción visual humana. Las <strong>capas de convolución</strong> aplican filtros para detectar varias características como <strong>bordes</strong> y <strong>texturas</strong>. Las <strong>capas de agrupamiento</strong> luego reducen las dimensiones espaciales, haciendo que el proceso sea más eficiente computacionalmente sin perder información crucial. Las <strong>funciones de activación</strong> añaden no linealidad, permitiendo que las CNN aprendan patrones más complejos. Finalmente, las <strong>capas completamente conectadas</strong> son responsables de clasificar las características aprendidas en categorías específicas.
          </p>
        </div>

        {/* Image with Margins inside a Card */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-6" data-aos="fade-up" data-aos-delay="1000">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/1_vkQ0hXDaQv57sALXAJquxA.webp"
              alt="Arquitectura de la CNN"
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
            href="https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Towards Data Science
          </a>
        </div>

        {/* Bottom Text */}
        <div className="mb-8 text-justify" data-aos="fade-up" data-aos-delay="1400">
          <p className="text-lg text-[#555]">
            Las CNN se han convertido en una herramienta fundamental en el campo de la visión por computadora, permitiendo a las máquinas analizar y comprender datos visuales. Su capacidad para aprender y extraer características automáticamente, sin necesidad de una extensa intervención humana, las ha hecho indispensables en muchas aplicaciones del mundo real.
          </p>
        </div>
      </div>
    </section>
  );
}
