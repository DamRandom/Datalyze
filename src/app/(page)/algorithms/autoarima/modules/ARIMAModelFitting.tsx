"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ARIMAModelFittingSection() {
    useEffect(() => {
        AOS.init({
            duration: 800, 
            delay: 200,    
            once: true,
        });
    }, []);

    return (
        <section className="bg-[#f4f4f4] py-16 px-4 relative">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
                    ARIMA Model Fitting and Forecasting
                </h2>

                {/* Explanation Section */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Model Fitting Process</h3>
                    <p className="text-lg text-[#555] mb-6 text-justify">
                        Fitting an ARIMA (AutoRegressive Integrated Moving Average) model involves estimating its parameters 
                        to best represent the underlying patterns in the time series data. The process typically includes 
                        identifying the optimal values for three key components: AR (AutoRegressive), I (Integrated), and MA (Moving Average).
                    </p>

                    <p className="text-lg text-[#555] mb-6 text-justify">
                        If the standard ARIMA fitting process does not converge or produces suboptimal results, a simpler ARIMA model 
                        with predefined parameters can be used as a fallback. A commonly used fallback model is ARIMA(1, 1, 0), where the AR 
                        and MA components are fixed, providing a basic yet reliable forecast.
                    </p>

                    <p className="text-lg text-[#555] mb-6 text-justify">
                        Once the model is fitted, the forecasted values are often rounded to the nearest integer. This rounding process 
                        ensures that the predictions are more interpretable and easier to apply, especially in real-world decision-making scenarios.
                    </p>

                    <h3 className="text-2xl font-medium text-[#444] mb-4">Forecasting Process</h3>
                    <p className="text-lg text-[#555] mb-6 text-justify">
                        After fitting the ARIMA model, the next step is to generate forecasts for future time periods. These predictions 
                        are typically based on the historical data and the fitted parameters. In cases where multiple variables or 
                        time series are involved, the forecast may be the sum of the predictions from individual series, or a more complex 
                        aggregation method could be used to produce a final overall forecast.
                    </p>
                </div>
            </div>
        </section>
    );
}
