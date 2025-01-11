"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ARIMAFormula() {
    useEffect(() => {
        AOS.init({
            duration: 800, // Tiempo de duración de la animación
            delay: 200,    // Retraso inicial
            once: true,
        });
    }, []);

    return (
        <section className="bg-[#f4f4f4] py-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
                    ARIMA Model Formula and Parameters
                </h2>

                {/* Formula Section */}
                <h3 className="text-2xl font-medium text-[#444] mb-4">Model Formula</h3>
                <p className="text-lg text-[#555] mb-6 text-justify">
                    The ARIMA model is represented by a mathematical formula that combines autoregressive, integrated, and moving average components. 
                    The general structure of the formula involves forecasting future values based on past observations, differenced data to achieve stationarity, 
                    and past errors. This formula helps in creating predictions by accounting for both trends and the randomness in the data.
                </p>
                
                {/* Explanation of Parameters */}
                <div className="mb-8">
                    <h3 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up">
                        Explanation of Parameters
                    </h3>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
                        The ARIMA model consists of three main components:
                    </p>
                    <ul className="text-lg text-[#555] mb-6 pl-4 list-disc" data-aos="fade-up" data-aos-delay="400">
                        <li>
                            <strong>AR (AutoRegressive):</strong> Reflects the impact of previous values in the time series on the current value. This is controlled by the <em>p</em> parameter.
                        </li>
                        <li>
                            <strong>I (Integrated):</strong> Represents the number of differencing operations applied to the data to make it stationary, controlled by the <em>d</em> parameter.
                        </li>
                        <li>
                            <strong>MA (Moving Average):</strong> Accounts for the relationship between past forecast errors and current values, controlled by the <em>q</em> parameter.
                        </li>
                    </ul>
                    <p className="text-lg text-[#555] text-justify" data-aos="fade-up" data-aos-delay="600">
                        These parameters are adjusted according to the data&apos;s behavior. The <em>p</em> parameter is often adjusted based on the autocorrelation present, 
                        while the <em>d</em> parameter is used to achieve stationarity in the data, and the <em>q</em> parameter is set based on the forecast errors observed.
                    </p>
                </div>

                {/* Key Takeaways */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="800">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Key Insights</h3>
                    <p className="text-lg text-[#555] text-justify">
                        The ARIMA model is a powerful tool for time series forecasting, as it can capture various patterns such as trends and seasonality. 
                        By carefully selecting appropriate values for the parameters <em>p</em>, <em>d</em>, and <em>q</em>, the model can be fine-tuned to effectively 
                        predict future values and adapt to different types of time series data.
                    </p>
                </div>
            </div>
        </section>
    );
}
