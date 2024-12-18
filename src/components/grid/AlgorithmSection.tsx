// components/grid/AlgorithmSection.tsx
import React, { useEffect } from 'react';
import AlgorithmCard from '../ui/AlgorithmCard';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa AOS

const algorithms = [
  {
    title: 'AutoARIMA',
    subtitle: '', 
    description: 'Analiza datos históricos para encontrar patrones y hacer predicciones sobre el futuro.',
  },
  {
    title: 'LSTM',
    subtitle: 'Long Short-Term Memory',
    description: 'Redes neuronales que recuerdan información durante largo tiempo para predecir secuencias complejas.',
  },
  {
    title: 'CNN',
    subtitle: 'Convolutional Neural Network',
    description: 'Especializadas en identificar patrones dentro de los datos, como imágenes o secuencias.',
  },
  {
    title: 'AutoEncoders',
    subtitle: '', 
    description: 'Aprenden a comprimir y reconstruir datos, ayudando a identificar patrones importantes.',
  },
];

const AlgorithmSection = () => {
  // Inicializa AOS al montar el componente
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="min-h-screen py-12 bg-[#e4e4e4]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#1E293B] mb-8" data-aos="fade-up" data-aos-duration="1000">
          Algoritmos Usados
        </h2>
        <p className="text-lg text-[#475569] mb-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          Aquí encontrarás los algoritmos aplicados para la predicción del claustro docente. Cada uno tiene un enfoque único para el análisis de datos.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {algorithms.map((algorithm, index) => (
            <div
              key={index}
              data-aos="fade-up" // Animación para cada tarjeta
              data-aos-duration="1000"
              data-aos-delay={index * 200} // Añadimos retraso en función del índice
            >
              <AlgorithmCard
                title={algorithm.title}
                subtitle={algorithm.subtitle}
                description={algorithm.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlgorithmSection;
