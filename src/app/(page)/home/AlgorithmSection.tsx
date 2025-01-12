import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const algorithms = [
  {
    title: 'AutoARIMA',
    subtitle: '‎ ',
    description: 'Analyzes historical data to find patterns and make future predictions.',
    details: 'AutoARIMA automatically determines the best parameters for ARIMA, optimizing forecasts for academic department data.',
    link: '/algorithms/autoarima', 
  },
  {
    title: 'LSTM',
    subtitle: 'Long Short-Term Memory',
    description: 'Neural networks that retain information for long periods to predict complex sequences.',
    details: 'LSTM networks are particularly effective for sequence prediction tasks, such as time series or text generation in academic contexts.',
    link: '/algorithms/lstm', 
  },
  {
    title: 'CNN',
    subtitle: 'Convolutional Neural Network',
    description: 'Specialized in identifying patterns within data, such as images or sequences.',
    details: 'CNNs excel at feature extraction, making them suitable for analyzing structured academic datasets.',
    link: '/algorithms/cnn', 
  },
  {
    title: 'AutoEncoders',
    subtitle: '‎ ',
    description: 'Learn to compress and reconstruct data, helping to identify key patterns.',
    details: 'AutoEncoders focus on unsupervised learning, reducing dimensionality while preserving essential features in academic department datasets.',
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
          Algorithms Used
        </h2>
        <p className="text-lg text-[#475569] mb-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          Discover the algorithms applied for academic department prediction. Each has a unique approach to data analysis.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {algorithms.map((algorithm, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 200}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 pb-16 group hover:scale-105 hover:shadow-xl" // Added scale and shadow on hover
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#1E293B] mb-2">{algorithm.title}</h3>
                <p className="text-sm text-[#9CA3AF] mb-4">{algorithm.subtitle}</p>
                <p className="text-[#475569] text-justify leading-relaxed">{algorithm.description}</p>
                {/* "Read more" styled as a link, visible only on hover of the card */}
                <a
                  href={algorithm.link} // Usar el enlace correspondiente aquí
                  className="absolute bottom-6 right-6 text-[#4B5563] text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline"
                >
                  Read more...
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
