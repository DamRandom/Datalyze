"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LSTMTraining: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  // Initialize AOS only on the client side
  useEffect(() => {
    setIsClient(true);
    AOS.init();
  }, []);

  // Render only on the client side to prevent SSR mismatch
  if (!isClient) {
    return null; // Avoid rendering the component during SSR
  }

  return (
    <section className="bg-[#e4e4e4] py-16 px-8">
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#1E293B]" data-aos="fade-up" data-aos-duration="1000">
            LSTM Model Training and Prediction Process
          </h2>
          <p className="text-lg text-[#475569] mt-4 text-justify" data-aos="fade-up" data-aos-duration="1200">
            The training process of the LSTM model involves several critical steps to ensure the model learns temporal dependencies from the data. The process begins with preparing the data using sliding windows, followed by the division of the data into training and testing sets. The model is then trained iteratively, adjusting its weights over multiple epochs. Once trained, the model can generate predictions by analyzing the patterns in the input data. Below is an overview of the key steps involved:
          </p>
        </header>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Step 1: Data Preparation */}
          <div className="relative flex items-center bg-white p-6 rounded-xl shadow-lg mb-8 md:mb-0" data-aos="fade-up" data-aos-duration="1000">
            <div className="absolute inset-y-0 left-0 w-20 h-20 bg-[#1E293B] rounded-r-full flex justify-center items-center">
              <span className="text-3xl font-semibold text-white">1</span>
            </div>
            <div className="ml-20 my-auto">
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Data Preparation (Sliding Windows)</h3>
              <p className="text-[#475569] text-justify">
                Sequential data is transformed into input-output pairs using sliding windows. This technique ensures that the model learns from overlapping data segments, capturing short-term dependencies and making better predictions for time-series data.
              </p>
            </div>
          </div>

          {/* Step 2: LSTM Architecture */}
          <div className="relative flex items-center bg-white p-6 rounded-xl shadow-lg mb-8 md:mb-0" data-aos="fade-up" data-aos-duration="1200">
            <div className="absolute inset-y-0 left-0 w-20 h-20 bg-[#1E293B] rounded-r-full flex justify-center items-center">
              <span className="text-3xl font-semibold text-white">2</span>
            </div>
            <div className="ml-20 my-auto">
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">LSTM Architecture Configuration</h3>
              <p className="text-[#475569] text-justify">
                The LSTM model architecture is configured with the appropriate layers, units, and activation functions. This setup allows the model to learn both long-term and short-term dependencies from time-series data, ensuring its robustness in forecasting.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Step 3: Model Training */}
          <div className="relative flex items-center bg-white p-6 rounded-xl shadow-lg mb-8 md:mb-0" data-aos="fade-up" data-aos-duration="1400">
            <div className="absolute inset-y-0 left-0 w-20 h-20 bg-[#1E293B] rounded-r-full flex justify-center items-center">
              <span className="text-3xl font-semibold text-white">3</span>
            </div>
            <div className="ml-20 my-auto">
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Model Training</h3>
              <p className="text-[#475569] text-justify">
                The model is trained using the Adam optimizer and the MSE loss function. Over several epochs, the model adjusts its weights based on the data, progressively minimizing the loss and improving its predictive accuracy. This iterative process ensures the model learns the underlying patterns.
              </p>
            </div>
          </div>

          {/* Step 4: Prediction Generation */}
          <div className="relative flex items-center bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-duration="1600">
            <div className="absolute inset-y-0 left-0 w-20 h-20 bg-[#1E293B] rounded-r-full flex justify-center items-center">
              <span className="text-3xl font-semibold text-white">4</span>
            </div>
            <div className="ml-20 my-auto">
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Prediction Generation</h3>
              <p className="text-[#475569] text-justify">
                After training, the LSTM model generates predictions based on the last observed data points. These predictions are then reconstructed into target values, providing the model’s forecast. This step completes the cycle of time-series forecasting using the LSTM model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LSTMTraining;
