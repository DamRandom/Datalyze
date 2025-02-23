"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure to import the CSS file

export default function CNNAdvantagesDisadvantages() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize AOS with the new configuration
    AOS.init({
      duration: 1000, 
      once: true, 
      offset: 100, 
      debounceDelay: 50,
    });

    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const delayStyles = (index: number) => ({
    transitionDelay: `${index * 200}ms`,
  });

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-4xl font-semibold text-center text-gray-800 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Ventajas y Desventajas de las Redes Neuronales Convolucionales
        </h1>

        <p
          className="text-lg text-gray-700 mb-8 text-justify"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Las Redes Neuronales Convolucionales (CNN) son herramientas poderosas en el campo del aprendizaje automático, sobresaliendo en tareas de reconocimiento de imágenes y visión por computadora. Sin embargo, como cualquier tecnología, presentan tanto fortalezas como limitaciones. Comprender estos aspectos es crucial para determinar su idoneidad para aplicaciones específicas.
        </p>

        <div className="flex flex-col lg:flex-row lg:space-x-8 max-w-3xl mx-auto">
          {/* Advantages */}
          <div className="flex-1 mb-8 lg:mb-0" data-aos="fade-right" data-aos-delay="500">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Ventajas
            </h2>
            <ul className="space-y-4">
              {[{
                title: "Resultados de Última Generación",
                description: "Las CNN sobresalen en tareas de reconocimiento de imágenes, ofreciendo un rendimiento de última generación en dominios como la salud, la conducción autónoma y la seguridad.",
              },
              {
                title: "Aprendizaje Automático de Características",
                description: "Aprenden automáticamente características jerárquicas a partir de datos en bruto, eliminando la necesidad de extracción y ingeniería de características manual.",
              },
              {
                title: "Eficiencia Computacional",
                description: "Cuando se optimizan para GPUs, las CNN procesan grandes conjuntos de datos de manera eficiente, lo que las hace adecuadas para aplicaciones de alto rendimiento.",
              },
              {
                title: "Robustez",
                description: "Las CNN demuestran robustez frente al ruido y variaciones en los datos, asegurando un rendimiento confiable en diversos escenarios.",
              }].map((advantage, index) => (
                <li
                  key={index}
                  className={`flex items-start transform transition-all duration-500 opacity-0 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10"}`}
                  style={delayStyles(index)}
                  data-aos="fade-up"
                  data-aos-delay={`${index < 2 ? (index + 5) * 200 : (index + 1) * 200}`}
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {advantage.title}
                    </h3>
                    <p className="text-lg text-gray-700 text-justify">
                      {advantage.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Disadvantages */}
          <div className="flex-1" data-aos="fade-left" data-aos-delay="500">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Desventajas
            </h2>
            <ul className="space-y-4">
              {[{
                title: "Altos Recursos Computacionales",
                description: "Entrenar CNN en grandes conjuntos de datos requiere un poder computacional sustancial, a menudo necesitando hardware especializado como GPUs o TPUs.",
              },
              {
                title: "Falta de Interpretabilidad",
                description: "Las CNN operan como modelos de caja negra, lo que dificulta interpretar sus procesos de toma de decisiones.",
              },
              {
                title: "Grandes Requisitos de Datos",
                description: "El entrenamiento efectivo requiere grandes cantidades de datos etiquetados, lo que puede ser una limitación en dominios con conjuntos de datos pequeños.",
              }].map((disadvantage, index) => (
                <li
                  key={index}
                  className={`flex items-start transform transition-all duration-500 opacity-0 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10"}`}
                  style={delayStyles(index + 4)}
                  data-aos="fade-up"
                  data-aos-delay={`${index < 2 ? (index + 5) * 200 : (index + 1) * 200}`}
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {disadvantage.title}
                    </h3>
                    <p className="text-lg text-gray-700 text-justify">
                      {disadvantage.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          className="text-lg text-gray-700 mt-12 text-justify"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          Si bien las CNN ofrecen un rendimiento inigualable en diversas aplicaciones, sus demandas computacionales y de datos destacan la importancia de evaluar los compromisos al elegir modelos de aprendizaje automático. Al equilibrar estos factores, las CNN pueden aprovecharse eficazmente para resolver problemas complejos.
        </p>
      </div>
    </section>
  );
}
