"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LSTMIntro: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  // Initialize AOS only on the client side
  useEffect(() => {
    setIsClient(true);
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Smooth animation effect
      once: true, // Trigger animation only once
    });
  }, []);

  // Render only on the client side to prevent SSR mismatch
  if (!isClient) {
    return null; // Avoid rendering the component during SSR
  }

  return (
    <div className="relative flex flex-col bg-[#e4e4e4] py-16 px-12 mt-16">
      <div className="container mx-auto">
        {/* Heading */}
        <header className="text-center mb-12" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Overview of LSTM</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the architecture and functionality of Long Short-Term Memory (LSTM), a recurrent neural network 
            designed to analyze sequential data and uncover long-term dependencies within complex datasets.
          </p>
        </header>

        {/* Organized Content */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Conceptual Explanation */}
          <div className="text-justify leading-relaxed text-gray-700" data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">LSTM: A Deep Dive</h2>
            <p className="mb-6">
              LSTM models excel at analyzing time series data by learning patterns over extended sequences. Their gated 
              architecture allows selective retention and discarding of information, making them effective for tasks 
              involving long-term dependencies.
            </p>
            <p>
              This model has applications ranging from speech recognition to financial forecasting. In ForecEdu, it is 
              leveraged to decipher trends within educational datasets, delivering precise and actionable insights.
            </p>
          </div>

          {/* Analytical Value */}
          <div className="text-justify leading-relaxed text-gray-700" data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why LSTM?</h2>
            <p className="mb-6">
              Unlike traditional models, LSTMs adapt to the intricacies of sequential data, recognizing patterns across 
              varying timescales. Their ability to model non-linear relationships enhances their utility in diverse domains.
            </p>
            <p>
              Within ForecEdu, LSTM models identify hidden patterns in academic records, enabling stakeholders to make 
              data-driven decisions with confidence. This capability transforms raw data into valuable forecasts.
            </p>
          </div>
        </section>

        {/* Visual Focus */}
        <div className="mt-16 text-center" data-aos="zoom-in" data-aos-delay="300">
          <h3 className="text-xl font-medium text-gray-700">
            &quot;Unveiling the future through sequential analysis.&quot;
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LSTMIntro;
