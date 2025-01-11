"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ARIMAFormulaSection() {
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
                    The ARIMA model is represented by the following formula:
                </p>
                <div className="bg-white p-4 mb-8 max-w-[80%] mx-auto shadow-lg" data-aos="fade-up">
                    <div className="overflow-x-auto">
                        <p className="text-lg font-mono text-center">
                            Y<sub>t</sub> = - (Δ<sup>d</sup>Y<sub>t</sub> - Y<sub>t</sub>) + ϕ<sub>0</sub> + Σ<sub>i=1</sub><sup>p</sup>ϕ<sub>i</sub>Δ<sup>d</sup>Y<sub>t-i</sub> - Σ<sub>i=1</sub><sup>q</sup>θ<sub>i</sub>ϵ<sub>t-i</sub> + ϵ<sub>t</sub>
                        </p>
                    </div>
                </div>


                {/* Explanation of Parameters */}
                <div className="mb-8">
                    <h3 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up">
                        Explanation of Parameters
                    </h3>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
                        The ARIMA model combines three key components:
                    </p>
                    <ul className="text-lg text-[#555] mb-6 pl-4 list-disc" data-aos="fade-up" data-aos-delay="400">
                        <li>
                            <strong>AR (AutoRegressive):</strong> Determines the influence of past values on the current value, controlled by parameter <em>p</em>.
                        </li>
                        <li>
                            <strong>I (Integrated):</strong> Represents the number of times the data needs to be differenced to achieve stationarity, controlled by parameter <em>d</em>.
                        </li>
                        <li>
                            <strong>MA (Moving Average):</strong> Captures the dependency between an observation and residual errors from past forecasts, controlled by parameter <em>q</em>.
                        </li>
                    </ul>
                    <p className="text-lg text-[#555] text-justify" data-aos="fade-up" data-aos-delay="600">
                        These parameters are adjusted based on the characteristics of the dataset. For example, a high <em>p</em> value is used when there is strong autocorrelation, while a high <em>d</em> value helps stabilize a non-stationary series. Selecting appropriate values for these parameters is crucial, as they directly influence the complexity and predictive power of the model.
                    </p>
                </div>

                {/* Key Takeaways */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="800">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Key Insights</h3>
                    <p className="text-lg text-[#555] text-justify">
                        The ARIMA model is a versatile tool for time series analysis. By carefully tuning the parameters <em>p</em>, <em>d</em>, and <em>q</em>, it can effectively model a wide range of patterns, including trends and seasonality. Understanding the roles of these parameters allows data analysts to optimize forecasts for various real-world scenarios.
                    </p>
                </div>
            </div>
        </section>
    );
}
