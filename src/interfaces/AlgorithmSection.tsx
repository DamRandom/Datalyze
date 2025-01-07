import React, { useEffect } from 'react';
import AlgorithmCard from '../components/ui/AlgorithmCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const algorithms = [
  {
    title: 'AutoARIMA',
    subtitle: '', 
    description: 'Analyzes historical data to find patterns and make future predictions.',
  },
  {
    title: 'LSTM',
    subtitle: 'Long Short-Term Memory',
    description: 'Neural networks that retain information for long periods to predict complex sequences.',
  },
  {
    title: 'CNN',
    subtitle: 'Convolutional Neural Network',
    description: 'Specialized in identifying patterns within data, such as images or sequences.',
  },
  {
    title: 'AutoEncoders',
    subtitle: '', 
    description: 'Learn to compress and reconstruct data, helping to identify key patterns.',
  },
];

const AlgorithmSection = () => {
  // Initialize AOS on component mount
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
          Discover the algorithms applied for faculty prediction. Each has a unique approach to data analysis.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {algorithms.map((algorithm, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 200}
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
