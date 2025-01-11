"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ARIMAMetrics() {
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
                    Performance Metrics of AutoARIMA
                </h2>

                {/* MSE Section */}
                <div className="mb-8" data-aos="fade-up">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Mean Squared Error (MSE)</h3>
                    <p className="text-lg text-[#555] text-justify">
                        The MSE quantifies the average squared difference between the predicted values and actual observations. 
                        It is calculated by summing the squared differences and dividing by the total number of observations. 
                        This metric is sensitive to larger errors, making it particularly useful for detecting outliers. A lower 
                        MSE indicates better model performance.
                    </p>
                </div>

                {/* MAE Section */}
                <div className="mb-8" data-aos="fade-up">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Mean Absolute Error (MAE)</h3>
                    <p className="text-lg text-[#555] text-justify">
                        The MAE measures the average magnitude of the absolute differences between the predicted and actual values. 
                        Unlike MSE, it treats all errors equally without emphasizing larger errors. The MAE provides a clear and 
                        straightforward measure of model accuracy, where lower values signify improved predictions.
                    </p>
                </div>

                {/* MAPE Section */}
                <div className="mb-8" data-aos="fade-up">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Mean Absolute Percentage Error (MAPE)</h3>
                    <p className="text-lg text-[#555] text-justify">
                        The MAPE calculates the average percentage error between the predicted and actual values. It is computed by 
                        dividing the absolute error by the actual values, averaging the results, and multiplying by 100 to express 
                        it as a percentage. This metric is particularly intuitive for understanding error relative to the scale of 
                        the data, although caution is needed when actual values approach zero.
                    </p>
                </div>

                {/* General Considerations */}
                <div className="mb-8" data-aos="fade-up">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">General Considerations</h3>
                    <p className="text-lg text-[#555] text-justify">
                        These metrics are essential for evaluating the accuracy of time series models like AutoARIMA. Each metric 
                        provides unique insights: MSE highlights the impact of large errors, MAE offers a direct measurement of 
                        average accuracy, and MAPE allows for relative error interpretation. Selecting the appropriate metric 
                        depends on the dataset&apos;s characteristics and the goals of the analysis.
                    </p>
                </div>
            </div>
        </section>
    );
}
