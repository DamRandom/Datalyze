import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const algorithms = [
  {
    title: 'AutoARIMA',
    subtitle: '‎ ',
    description: 'Analiza datos históricos para encontrar patrones y hacer predicciones futuras.',
    details: 'AutoARIMA determina automáticamente los mejores parámetros para ARIMA, optimizando pronósticos para datos del departamento académico.',
    link: '/algorithms/autoarima', 
  },
  {
    title: 'LSTM',
    subtitle: 'Memoria a Largo Plazo y Corto Plazo',
    description: 'Redes neuronales que retienen información durante largos períodos para predecir secuencias complejas.',
    details: 'Las redes LSTM son especialmente efectivas para tareas de predicción de secuencias, como series temporales o generación de texto en contextos académicos.',
    link: '/algorithms/lstm', 
  },
  {
    title: 'CNN',
    subtitle: 'Red Neuronal Convolucional',
    description: 'Especializadas en identificar patrones dentro de los datos, como imágenes o secuencias.',
    details: 'Las CNN sobresalen en la extracción de características, lo que las hace adecuadas para analizar conjuntos de datos académicos estructurados.',
    link: '/algorithms/cnn', 
  },
  {
    title: 'AutoEncoders',
    subtitle: '‎ ',
    description: 'Aprenden a comprimir y reconstruir datos, ayudando a identificar patrones clave.',
    details: 'Los AutoEncoders se enfocan en el aprendizaje no supervisado, reduciendo la dimensionalidad mientras preservan características esenciales en los conjuntos de datos del departamento académico.',
    link: '/algorithms/autoencoders',
  },
];

const AlgorithmSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="min-h-screen py-12 bg-[#e4e4e4]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#1E293B] mb-8" data-aos="fade-up" data-aos-duration="1000">
          Algoritmos Utilizados
        </h2>
        <p className="text-lg text-[#475569] mb-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          Descubre los algoritmos aplicados para la predicción del departamento académico. Cada uno tiene un enfoque único para el análisis de datos.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {algorithms.map((algorithm, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 200}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 pb-16 group hover:scale-105 hover:shadow-xl" // Agregada escala y sombra al pasar el ratón
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#1E293B] mb-2">{algorithm.title}</h3>
                <p className="text-sm text-[#9CA3AF] mb-4">{algorithm.subtitle}</p>
                <p className="text-[#475569] text-justify leading-relaxed">{algorithm.description}</p>
                {/* "Read more" styled as a link, visible only on hover of the card */}
                <a
                  href={algorithm.link} 
                  className="absolute bottom-6 right-6 text-[#4B5563] text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline"
                >
                  Leer más...
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlgorithmSection;
