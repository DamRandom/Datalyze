"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TrainingProcess() {
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
          Proceso de Entrenamiento
        </h2>

        {/* Loss Function */}
        <article className="mb-12" data-aos="fade-up">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Función de Pérdida</h3>
          <p className="text-lg text-[#555] text-justify">
            El proceso de entrenamiento para autoencoders está impulsado por la función de pérdida, que calcula el error de
            reconstrucción entre la entrada y la salida. Las métricas comunes incluyen el Error Cuadrático Medio (MSE) o
            la Entropía Cruzada Binaria, dependiendo de la naturaleza de los datos. El objetivo es minimizar este error,
            asegurando que la salida se asemeje estrechamente a la entrada.
          </p>
        </article>

        {/* Optimization Techniques */}
        <article className="mb-12" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Técnicas de Optimización</h3>
          <p className="text-lg text-[#555] text-justify">
            La optimización juega un papel crucial en la consecución de la convergencia. Los autoencoders suelen depender de
            métodos de optimización basados en gradientes, como el Descenso de Gradiente Estocástico (SGD) o Adam. Técnicas
            como la programación de la tasa de aprendizaje y el recorte de gradientes pueden mejorar aún más la velocidad y
            estabilidad de la convergencia.
          </p>
        </article>

        {/* Dataset Size and Regularization */}
        <article className="mb-12" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Tamaño del Conjunto de Datos y Regularización</h3>
          <p className="text-lg text-[#555] text-justify">
            El tamaño y la calidad del conjunto de datos impactan significativamente en el rendimiento del entrenamiento. Un
            conjunto de datos más grande y diverso a menudo resulta en una mejor generalización. Los métodos de
            regularización, como las penalizaciones L1/L2 o el dropout, se utilizan comúnmente para prevenir el sobreajuste,
            asegurando que el modelo no memorice los datos de entrenamiento, sino que aprenda patrones robustos.
          </p>
        </article>
      </div>
    </section>
  );
}
