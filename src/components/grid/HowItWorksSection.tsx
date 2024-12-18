import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const steps = [
  {
    title: 'Análisis de los datos',
    description: `En esta etapa, se recolectan, limpian y analizan los datos históricos para entender patrones y tendencias que afectan el desempeño de los modelos predictivos. Esta fase es crucial porque garantiza que los datos sean de alta calidad, sin sesgos y adecuados para las pruebas posteriores. Se utilizan herramientas estadísticas avanzadas para interpretar la información.`,
    image: '/images/pexels-goumbik-669610.jpg',
  },
  {
    title: 'Identificación de diferencias',
    description: `En esta fase se aplica el Test de Friedman, un análisis estadístico que permite determinar si existen diferencias significativas en el desempeño de diferentes modelos predictivos. Esta prueba es vital para validar que los resultados obtenidos no son simplemente fruto del azar y que los modelos son realmente distintos en términos de su capacidad predictiva.`,
    image: '/images/digital-marketing-1433427.jpg',
  },
  {
    title: 'Comparaciones detalladas',
    description: `Luego de identificar las diferencias significativas, se realiza una prueba post-hoc para realizar comparaciones específicas entre pares de modelos. Esta prueba permite profundizar en las interacciones y determinar qué modelos presentan diferencias reales y no aleatorias, ayudando en la toma de decisiones sobre qué modelos adoptar en el futuro.`,
    image: '/images/pexels-fauxels-3184292.jpg',
  },
];

const HowItWorksSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duración de la animación
      once: true,      // La animación se ejecuta una sola vez
    });
  }, []);

  return (
    <div className="relative flex flex-col bg-gray-50 p-12">
      <h2 className="text-4xl font-semibold text-gray-800 text-center mb-16">¿Cómo funciona?</h2>

      {/* Steps */}
      <div className="flex flex-col w-full space-y-32">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            data-aos="fade-up"  // Animación al entrar en la vista
            data-aos-delay={`${index * 200}`}  // Añadir un pequeño retraso para los elementos
          >
            {/* Step Description */}
            <div className="flex flex-col items-center md:items-start md:w-1/2 text-center md:text-left px-6 md:px-12 mb-12 md:mb-0">
              <div className="text-2xl font-semibold text-gray-800 mb-4">{step.title}</div>
              <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start flex-col items-center md:items-start px-6 md:px-12">
              <Image
                src={step.image}
                alt={step.title}
                width={550}
                height={370}
                className="rounded-xl shadow-xl object-cover transition-all duration-300 ease-in-out hover:scale-105"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;
