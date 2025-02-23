"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CNNSection() {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      delay: 100, 
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#f4f4f4] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
          Arquitecturas de CNN
        </h2>

        {/* LeNet-5 */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="0">
          <h3 className="text-2xl font-semibold text-[#333] mb-4">LeNet-5 (1998)</h3>
          <p className="text-lg text-[#555] mb-6 text-justify">
            LeNet-5 es una red convolucional pionera diseñada para clasificar dígitos escritos a mano. Se aplicó para el reconocimiento automático de dígitos en cheques utilizando imágenes en escala de grises de 32x32 píxeles.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify">
            Aunque LeNet-5 demostró un rendimiento sólido, su capacidad para procesar imágenes de mayor resolución está limitada por los recursos computacionales.
          </p>
        </div>

        {/* AlexNet */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-2xl font-semibold text-[#333] mb-4">AlexNet (2012)</h3>
          <p className="text-lg text-[#555] mb-6 text-justify">
            AlexNet, introducido en 2012, fue un avance en el aprendizaje profundo para la clasificación de imágenes, utilizando cinco capas para aprender patrones de grandes conjuntos de datos. Tuvo un impacto significativo en el campo de la visión por computadora.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify">
            En dominios como el análisis de documentos legales, AlexNet podría utilizarse para clasificar imágenes de contratos o documentos judiciales, mejorando la eficiencia del flujo de trabajo.
          </p>
        </div>

        {/* ResNet */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-semibold text-[#333] mb-4">ResNet (2015)</h3>
          <p className="text-lg text-[#555] mb-6 text-justify">
            ResNet aborda el problema del desvanecimiento del gradiente con conexiones residuales que permiten redes más profundas. Esto le permite aprender de manera más efectiva incluso con muchas capas.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify">
            En turismo, ResNet podría clasificar imágenes de destinos, ayudando a las empresas de viajes a dirigir sus esfuerzos de marketing y recomendar lugares a los viajeros.
          </p>
        </div>

        {/* GoogLeNet */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-2xl font-semibold text-[#333] mb-4">GoogLeNet (2014)</h3>
          <p className="text-lg text-[#555] mb-6 text-justify">
            GoogLeNet, introducido en 2014, utiliza módulos Inception para mejorar la eficiencia, permitiendo que la red procese información en múltiples niveles mientras reduce la carga computacional.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify">
            En el comercio minorista, GoogLeNet podría analizar imágenes de productos para la categorización y la gestión de inventarios, optimizando las operaciones y mejorando la precisión de la búsqueda de productos.
          </p>
        </div>

        {/* MobileNet */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-2xl font-semibold text-[#333] mb-4">MobileNet (2017)</h3>
          <p className="text-lg text-[#555] mb-6 text-justify">
            MobileNet está optimizado para dispositivos móviles, utilizando convoluciones separables en profundidad para reducir parámetros mientras mantiene la precisión.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify">
            En recursos humanos, MobileNet podría utilizarse para clasificar currículos o analizar perfiles de solicitantes de empleo, facilitando la evaluación de las calificaciones por parte de los equipos de RRHH.
          </p>
        </div>

        {/* VGG-16 */}
        <div data-aos="fade-up" data-aos-delay="500">
          <h3 className="text-2xl font-semibold text-[#333] mb-4">VGG-16 (2014)</h3>
          <p className="text-lg text-[#555] mb-6 text-justify">
            VGG-16 es una CNN profunda con 16 capas, diseñada para lograr alta precisión en tareas de clasificación de imágenes y detección de objetos. Ha sido ampliamente adoptada en investigaciones y aplicaciones prácticas.
          </p>
        </div>
      </div>
    </section>
  );
}
