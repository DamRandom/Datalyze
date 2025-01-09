"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hyperparameters = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-[#e4e4e4] py-16 px-8">
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1E293B]" data-aos="fade-up" data-aos-duration="1000">
            Key Hyperparameters of AutoARIMA
          </h2>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Explanation */}
          <div className="text-justify flex flex-col justify-center" data-aos="fade-right" data-aos-duration="1000">
            <h3 className="text-xl font-semibold text-[#1E293B] mb-4">
              Understanding Hyperparameters
            </h3>
            <p className="text-[#475569] mb-6">
              Hyperparameters are crucial settings in machine learning models
              that control the learning process and directly impact the model’s
              performance. In the context of AutoARIMA, these parameters help
              determine how the model analyzes time-series data and captures
              patterns such as seasonality and trends. By adjusting these
              hyperparameters, we can fine-tune the model to improve its
              forecasting accuracy. The hyperparameters chosen here are based on
              their ability to handle the complexity of time-series data, ensuring
              the model performs optimally.
            </p>
          </div>

          {/* Hyperparameter List */}
          <div className="text-justify" data-aos="fade-left" data-aos-duration="1000">
            <h3 className="text-xl font-semibold text-[#1E293B] mb-4">
              Selected Hyperparameters
            </h3>
            <p className="text-[#475569] mb-6">
              The following hyperparameters were selected for the AutoARIMA model
              based on their effectiveness in managing time-series data:
            </p>
            <p className="text-[#475569] mb-4">
              <strong>seasonal = True</strong>: This enables the model to detect and account for seasonal patterns in the data. By setting this to <code>True</code>, the model adjusts its forecasts according to recurring patterns over time.
            </p>
            <p className="text-[#475569] mb-4">
              <strong>m = 2</strong>: This defines the length of the seasonal cycle. In this case, a value of <code>2</code> means the model anticipates a repeating pattern every two time steps, making it suitable for data with a biannual seasonality.
            </p>
            <p className="text-[#475569] mb-4">
              <strong>max_order = 5</strong>: This limits the complexity of the model by restricting the number of autoregressive (AR) and moving average (MA) terms to a maximum of <code>5</code>, balancing between model complexity and computational efficiency.
            </p>
            <p className="text-[#475569] mb-4">
              <strong>error_action = &quot;ignore&quot;</strong>: This parameter determines how the model handles errors during the fitting process. By setting it to <code>&quot;ignore&quot;</code>, the model continues its fitting process even when certain errors occur, ensuring that the model doesn&apos;t stop prematurely.
            </p>
            <p className="text-[#475569] mb-4">
              <strong>suppress_warnings = True</strong>: This option suppresses warnings that might arise during model fitting, ensuring that users are not distracted by non-critical messages and can focus on the performance of the model.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hyperparameters;
