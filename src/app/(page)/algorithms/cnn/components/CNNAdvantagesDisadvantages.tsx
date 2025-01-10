"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure to import the CSS file

export default function CNNAdvantagesDisadvantages() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize AOS with the new configuration
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animation only once
      offset: 100, // Adjust the offset for triggering
      debounceDelay: 50, // Faster trigger when scrolling
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
          Advantages and Disadvantages of Convolutional Neural Networks
        </h1>

        <p
          className="text-lg text-gray-700 mb-8 text-justify"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Convolutional Neural Networks (CNNs) are powerful tools in the field of machine learning, excelling in image recognition and computer vision tasks. However, like any technology, they present both strengths and limitations. Understanding these aspects is crucial for determining their suitability for specific applications.
        </p>

        <div className="flex flex-col lg:flex-row lg:space-x-8 max-w-3xl mx-auto">
          {/* Advantages */}
          <div className="flex-1 mb-8 lg:mb-0" data-aos="fade-right" data-aos-delay="500">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Advantages
            </h2>
            <ul className="space-y-4">
              {[{
                title: "State-of-the-Art Results",
                description: "CNNs excel in image recognition tasks, delivering state-of-the-art performance in domains like healthcare, autonomous driving, and security.",
              },
              {
                title: "Automatic Feature Learning",
                description: "They automatically learn hierarchical features from raw data, eliminating the need for manual feature extraction and engineering.",
              },
              {
                title: "Computational Efficiency",
                description: "When optimized for GPUs, CNNs process large datasets efficiently, making them suitable for high-performance applications.",
              },
              {
                title: "Robustness",
                description: "CNNs demonstrate robustness to noise and variations in data, ensuring reliable performance across diverse scenarios.",
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
              Disadvantages
            </h2>
            <ul className="space-y-4">
              {[{
                title: "High Computational Resources",
                description: "Training CNNs on large datasets requires substantial computational power, often necessitating specialized hardware like GPUs or TPUs.",
              },
              {
                title: "Lack of Interpretability",
                description: "CNNs operate as black-box models, making it challenging to interpret their decision-making processes.",
              },
              {
                title: "Large Data Requirements",
                description: "Effective training demands large amounts of labeled data, which can be a limitation in domains with small datasets.",
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
          While CNNs offer unparalleled performance in various applications, their computational and data demands highlight the importance of evaluating trade-offs when choosing machine learning models. By balancing these factors, CNNs can be effectively leveraged to solve complex problems.
        </p>
      </div>
    </section>
  );
}
