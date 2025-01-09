"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Introduction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);

  return (
    <div className="relative flex flex-col bg-[#e4e4e4] py-16 px-12 mt-16"> 
      <div className="container mx-auto">
        {/* Heading */}
        <header className="text-center mb-12" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Understanding Predictions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dive into the logic behind the predictive models, the methodologies applied, and the value they bring in
            interpreting and forecasting data. This section addresses the foundational principles and practical insights
            necessary for understanding the generated predictions.
          </p>
        </header>

        {/* Organized Content */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Conceptual Explanation */}
          <div className="text-justify leading-relaxed text-gray-700" data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Role of Predictive Models</h2>
            <p className="mb-6">
              Predictive models like AutoARIMA, LSTM, CNN, and AutoEncoders analyze patterns in historical data to
              project future trends and outcomes. Each model is tailored to address specific challenges, such as
              seasonality, sequence dependencies, or latent feature extraction.
            </p>
            <p>
              These methodologies are not just statistical abstractions—they translate raw data into actionable insights,
              empowering users to make informed decisions. Understanding their strengths and limitations is key to
              leveraging their capabilities effectively.
            </p>
          </div>

          {/* Analytical Value */}
          <div className="text-justify leading-relaxed text-gray-700" data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Predictions Matter</h2>
            <p className="mb-6">
              Predictions generated by these models are benchmarks for future planning. They help identify trends,
              assess risks, and uncover opportunities, transforming uncertainty into measurable outcomes. Each model
              provides a unique lens to interpret data.
            </p>
            <p>
              By understanding the nuances of the algorithms, users can adapt them to real-world scenarios, optimizing
              decisions in domains ranging from education to finance and beyond.
            </p>
          </div>
        </section>

        {/* Visual Focus */}
        <div className="mt-16 text-center" data-aos="zoom-in" data-aos-delay="300">
          <h3 className="text-xl font-medium text-gray-700">
            &quot;Empowering insights through predictive analytics.&quot;
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
