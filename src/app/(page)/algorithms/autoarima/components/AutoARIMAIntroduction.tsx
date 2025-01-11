"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AutoARIMAIntroduction() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      delay: 200,    
      once: true, 
    });
  }, []);

  return (
    <section className="bg-[#f4f4f4] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
          What is AutoARIMA?
        </h2>

        {/* Text Content */}
        <div className="mb-8">
          <h3 className="text-3xl font-medium text-[#444] mb-4" data-aos="fade-up">
            Overview
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
            AutoARIMA is an automated method for building ARIMA models, widely used for time series forecasting. It simplifies the traditionally complex process of selecting ARIMA parameters, making it more accessible for practitioners.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="400">
            The ARIMA model (AutoRegressive Integrated Moving Average) is a statistical approach to understanding and predicting future values in a time series. It combines three key components: AutoRegressive (AR), Integrated (I), and Moving Average (MA), which help to model the dependencies in the data.
          </p>

          <h3 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="600">
            Key Features
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="800">
            AutoARIMA dynamically identifies the optimal values for the AR, I, and MA parameters based on the data. This eliminates the need for manual trial-and-error processes and enhances the accuracy of the resulting model. Additionally, it can handle seasonal patterns, making it suitable for diverse datasets.
          </p>
        </div>

        {/* Image with Margins inside a Card */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-6" data-aos="fade-up" data-aos-delay="1000">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/arima_model.png"
              alt="ARIMA Model Representation"
              width={900}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Image Source */}
        <div className="text-sm text-center text-[#555] mb-8" data-aos="fade-up" data-aos-delay="1200">
          <span className="font-semibold text-[#333]">Source: </span>
          <a
            href="https://otexts.com/fpp2/arima.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Forecasting: Principles and Practice
          </a>
        </div>

        {/* Bottom Text */}
        <div className="mb-8 text-justify" data-aos="fade-up" data-aos-delay="1400">
          <p className="text-lg text-[#555]">
            AutoARIMA has become a vital tool in time series analysis, providing a balance between statistical rigor and automation. Its ability to adapt to different datasets while maintaining interpretability makes it a preferred choice for many forecasting tasks.
          </p>
        </div>
      </div>
    </section>
  );
}
