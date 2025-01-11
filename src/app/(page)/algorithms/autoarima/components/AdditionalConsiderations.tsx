"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AdditionalConsiderations() {
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
                    Additional Considerations
                </h2>

                {/* Limitations of the Model */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Limitations of the Model</h3>
                    <p className="text-lg text-[#555] mb-6 text-justify">
                        While ARIMA models are powerful tools for time series forecasting, they have certain limitations. They assume linear relationships within the data, which may not capture complex, nonlinear patterns present in some datasets. Additionally, ARIMA models require a substantial amount of historical data to produce reliable forecasts; with limited data, the model&apos;s performance can degrade significantly. Furthermore, ARIMA may struggle with datasets that exhibit strong seasonal patterns unless extended to Seasonal ARIMA (SARIMA).
                    </p>
                </div>

                {/* Handling Insufficient Data */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="400">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Handling Insufficient Data</h3>
                    <p className="text-lg text-[#555] mb-6 text-justify">
                        In scenarios where data is insufficient, such as columns with few observations or constant values, ARIMA models may not perform optimally. For columns with minimal data, the model might default to simplistic predictions, like using the mean of available observations, which can lead to inaccurate forecasts. Similarly, for columns with constant values, the model may fail to identify meaningful patterns, resulting in predictions that do not reflect potential underlying trends. It&apos;s crucial to assess the adequacy of your data before applying ARIMA models to ensure meaningful and reliable forecasting results.
                    </p>
                </div>
            </div>
        </section>
    );
}
