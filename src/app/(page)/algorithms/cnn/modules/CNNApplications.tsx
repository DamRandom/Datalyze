"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CNNApplications = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#f4f4f4] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-4xl font-semibold text-center text-[#333] mb-10"
          data-aos="fade-up"
        >
          Aplicaciones de las Redes Neuronales Convolucionales
        </h1>

        <div className="mb-16">
          <h2
            className="text-3xl font-semibold text-[#333] mb-6"
            data-aos="fade-up"
          >
            Casos de Uso Versátiles de las CNN
          </h2>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up">
            Las Redes Neuronales Convolucionales (CNN) han revolucionado la visión por computadora al permitir que las máquinas interpreten y procesen datos visuales con una precisión inigualable. Su estructura jerárquica permite la extracción automática de características, lo que las hace indispensables en numerosos campos:
          </p>

          {/* Applications List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Clasificación de Imágenes", description: "Asignar imágenes a categorías predefinidas, como identificar especies de animales o tipos de vehículos." },
              { title: "Detección de Objetos", description: "Localizar y categorizar múltiples objetos dentro de una imagen, esencial para la conducción autónoma y sistemas de vigilancia." },
              { title: "Segmentación de Imágenes", description: "Dividir una imagen en segmentos para identificar límites y objetos, crucial en imágenes médicas para la detección de tumores." },
              { title: "Reconocimiento Facial", description: "Identificar o verificar individuos analizando características faciales, ampliamente utilizado en sistemas de seguridad y autenticación." },
              { title: "Análisis de Imágenes Médicas", description: "Asistir en el diagnóstico de enfermedades analizando imágenes médicas, como detectar retinopatía diabética." },
              { title: "Conducción Autónoma", description: "Permitir que los vehículos comprendan su entorno reconociendo señales de tráfico, peatones y obstáculos." },
              { title: "Análisis de Video", description: "Interpretar datos de video para reconocimiento de acciones, detección de eventos y resumido." },
            ].map((app, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
              >
                <h2 className="text-xl font-semibold text-[#333] mb-2">{app.title}</h2>
                <p className="text-lg text-[#555] text-justify">{app.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2
            className="text-3xl font-semibold text-[#333] mb-6"
            data-aos="fade-up"
          >
            Estudio de Caso: Detección de Retinopatía Diabética
          </h2>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up">
            La Retinopatía Diabética (RD) es una de las principales causas de ceguera, resultante de la diabetes prolongada que afecta la retina. La detección temprana es vital para un tratamiento efectivo y la preservación de la visión. Las CNN se han vuelto fundamentales en la automatización de la detección y clasificación de la RD a partir de imágenes retinianas.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up">
            Al entrenar en grandes conjuntos de datos de imágenes de fondo retiniano, las CNN pueden identificar características indicativas de la RD, como microaneurismas, hemorragias y exudados. Los estudios han demostrado que los modelos basados en CNN logran alta sensibilidad y especificidad en la detección de RD, a menudo superando a expertos humanos en consistencia y velocidad.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up">
            Por ejemplo, un estudio que utilizó combinaciones avanzadas de redes neuronales evaluó su rendimiento en la clasificación de etapas de RD a partir de imágenes retinianas. El modelo propuesto mostró un potencial significativo para mejorar las capacidades de diagnóstico en la detección de RD.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up">
            Los beneficios de la implementación de CNN en la detección de RD incluyen:
          </p>
          <ul
            className="list-disc list-inside text-lg text-[#555] mb-6"
            data-aos="fade-up"
          >
            {[
              "Escalabilidad: El análisis automatizado puede manejar grandes volúmenes de imágenes, lo que permite programas de cribado a gran escala.",
              "Consistencia: Las CNN proporcionan evaluaciones uniformes, reduciendo la variabilidad asociada con el juicio humano.",
              "Accesibilidad: Desplegar herramientas basadas en CNN en entornos de atención primaria mejora el acceso a servicios de diagnóstico temprano, particularmente en áreas desatendidas.",
            ].map((benefit, index) => (
              <li key={index}>
                <strong>{benefit.split(":")[0]}:</strong> {benefit.split(":")[1]}
              </li>
            ))}
          </ul>
          <p className="text-lg text-[#555] text-justify" data-aos="fade-up">
            A pesar de estas ventajas, persisten desafíos, incluyendo la necesidad de conjuntos de datos etiquetados extensos, mejorar la detección de características sutiles y abordar preocupaciones sobre la interpretabilidad del modelo. Los investigadores están explorando métodos para mejorar la augmentación de datos, visualización de características y desarrollar marcos de IA explicables para abordar estos problemas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CNNApplications;
