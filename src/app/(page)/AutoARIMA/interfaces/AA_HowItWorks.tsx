"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-[#f9fafa] py-16 px-8">
      <div className="container mx-auto">
        {/* Header */}
        <header
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl font-bold text-[#1E293B]">
            AutoARIMA: Predictive Modeling Simplified
          </h2>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Explanation */}
          <div
            className="text-justify"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3 className="text-xl font-semibold text-[#1E293B] mb-4">
              Understanding AutoARIMA
            </h3>
            <p className="text-[#475569] mb-6">
              AutoARIMA, or AutoRegressive Integrated Moving Average, is a
              statistical model designed for analyzing and forecasting
              time-series data. It autonomously determines the best parameters
              for the ARIMA model, making it versatile and efficient.
            </p>
            <p className="text-[#475569] mb-6">
              It predicts future values based on past data, focusing on patterns
              within the series itself rather than external variables. The model
              is particularly effective in identifying trends, seasonality, and
              noise.
            </p>
            <p className="text-[#475569]">
              Its three components—AutoRegressive (AR), Integrated (I), and
              Moving Average (MA)—work together to make data stationary,
              incorporate lagged terms, and handle residual errors.
            </p>
          </div>

          {/* Formula Explanation */}
          <div
            className="text-justify"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h3 className="text-xl font-semibold text-[#1E293B] mb-4">
              The ARIMA (p, d, q) Formula
            </h3>
            <pre className="bg-[#e8f4ff] text-[#1E293B] p-4 rounded-lg overflow-x-auto mb-4">
              Y<sub>t</sub> = -(&Delta;<sup>d</sup>Y<sub>t</sub> - Y<sub>t</sub>)
              + &phi;<sub>0</sub> + &sum;<sub>i=1</sub><sup>p</sup>(
              &phi;<sub>i</sub>&Delta;<sup>d</sup>Y<sub>t-i</sub>) -
              &sum;<sub>i=1</sub><sup>q</sup>(
              &theta;<sub>i</sub>&epsilon;<sub>t-i</sub>) +
              &epsilon;<sub>t</sub>
            </pre>
            <ul className="list-disc list-inside text-[#475569] space-y-2">
              <li>
                <b>p:</b> Number of lagged terms in the autoregressive component.
              </li>
              <li>
                <b>d:</b> Differencing order to make the series stationary.
              </li>
              <li>
                <b>q:</b> Number of lagged forecast errors in the moving average
                component.
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div
          className="mt-16 text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h4 className="text-lg font-medium text-[#1E293B]">
            AutoARIMA streamlines time-series forecasting with minimal manual
            tuning.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
