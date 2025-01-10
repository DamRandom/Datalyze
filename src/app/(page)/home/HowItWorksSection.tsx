import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const steps = [
  {
    title: 'Data Analysis',
    description: `This stage involves collecting, cleaning, and analyzing historical data to understand patterns and trends that affect the performance of predictive models. It ensures high-quality, unbiased data suitable for subsequent tests using advanced statistical tools to interpret information.`,
    image: '/images/DataAnalysis.webp',
  },
  {
    title: 'Identifying Differences',
    description: `In this phase, the Friedman Test is applied, a statistical analysis to determine if significant differences exist in the performance of various predictive models. This test is crucial to validate that results are not merely due to chance and that the models are genuinely distinct in their predictive capabilities.`,
    image: '/images/IdentifyingDifferences.webp',
  },
  {
    title: 'Detailed Comparisons',
    description: `After identifying significant differences, a post-hoc test is conducted to make specific comparisons between pairs of models. This test provides deeper insights into interactions, highlighting which models exhibit real, non-random differences, aiding in future decision-making.`,
    image: '/images/DetailedComparisons.webp',
  },
];

const HowItWorksSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,      
    });
  }, []);

  return (
    <div className="relative flex flex-col bg-[#f9fafb] p-12">
      <h2 className="text-4xl font-semibold text-[#2d3748] text-center mb-16">How It Works</h2> 

      {/* Steps */}
      <div className="flex flex-col w-full space-y-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} space-y-8 md:space-y-0`}
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            {/* Step Description */}
            <div className="flex flex-col md:w-1/2 text-justify px-6 md:px-8">
              <div className="text-2xl font-semibold text-[#2d3748] mb-4 text-center md:text-left">{step.title}</div>
              <p className="text-lg text-[#718096] leading-relaxed">{step.description}</p>
            </div>

            {/* Image */}
            <div className="flex justify-center md:w-1/2 px-6 md:px-8">
              <Image
                src={step.image}
                alt={step.title}
                width={400}
                height={250}
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
