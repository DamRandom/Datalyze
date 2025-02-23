"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AutoencodersPage = () => {
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
        <h2
          className="text-4xl font-semibold text-center text-[#333] mb-10"
          data-aos="fade-up"
        >
          Introducción a los Autoencoders
        </h2>

        {/* Definition and Purpose */}
        <div className="mb-8">
          <h3
            className="text-3xl font-medium text-[#444] mb-4"
            data-aos="fade-up"
          >
            Definición y Propósito
          </h3>
          <p
            className="text-lg text-[#555] mb-6 text-justify"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Los autoencoders son un tipo de red neuronal artificial diseñada para el aprendizaje no supervisado. Su objetivo es aprender representaciones eficientes de los datos al codificar la entrada en un formato comprimido y luego decodificarla para reconstruir la entrada original. Este proceso minimiza la diferencia entre la entrada y su reconstrucción, lo que convierte a los autoencoders en herramientas poderosas para la reducción de dimensionalidad, detección de anomalías y más.
          </p>
        </div>

        {/* History and Evolution */}
        <div className="mb-8">
          <h3
            className="text-3xl font-medium text-[#444] mb-4"
            data-aos="fade-up"
          >
            Breve Historia y Evolución
          </h3>
          <p
            className="text-lg text-[#555] mb-6 text-justify"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Los orígenes de los autoencoders se remontan a la década de 1980, con trabajos iniciales que los vinculaban al Análisis de Componentes Principales (PCA). Con el tiempo, los avances en el aprendizaje profundo, particularmente durante mediados de la década de 2000, permitieron el desarrollo de arquitecturas de autoencoders profundos. Estos avances resaltaron su capacidad para capturar patrones de datos complejos y no lineales, allanando el camino para aplicaciones en diversos dominios.
          </p>
        </div>

        {/* Comparison with PCA */}
        <div className="mb-8">
          <h3
            className="text-3xl font-medium text-[#444] mb-4"
            data-aos="fade-up"
          >
            Comparación con PCA
          </h3>
          <p
            className="text-lg text-[#555] mb-6 text-justify"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Mientras que el PCA es una técnica lineal que reduce dimensiones maximizando la varianza a lo largo de ejes ortogonales, los autoencoders aprovechan redes neuronales para modelar relaciones no lineales. Esta capacidad hace que los autoencoders sean más versátiles en la captura de patrones de datos intrincados. Sin embargo, el PCA sigue siendo computacionalmente eficiente, mientras que los autoencoders requieren más recursos debido a su proceso de entrenamiento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutoencodersPage;
