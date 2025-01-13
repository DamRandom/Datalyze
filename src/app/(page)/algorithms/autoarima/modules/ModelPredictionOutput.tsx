"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ModelPredictionOutput() {
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
                    Model Prediction Output
                </h2>

                {/* Introduction */}
                <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
                    In time series forecasting, models like ARIMA generate predictions for future data points based on historical patterns. Understanding how to interpret and visualize these predictions is crucial for effective decision-making.
                </p>

                {/* Prediction Visualization */}
                <div className="bg-white p-6 mb-8 shadow-lg" data-aos="fade-up" data-aos-delay="400">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Predictions Visualization</h3>
                    <p className="text-lg text-[#555] mb-6 text-justify">
                        Visualizing model predictions alongside actual data helps in assessing the model&apos;s performance. Below is an example of how predictions can be presented:
                    </p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="text-left text-gray-600">
                                    <th className="py-2 px-4">Time Period</th>
                                    <th className="py-2 px-4">Actual Value</th>
                                    <th className="py-2 px-4">Predicted Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example rows */}
                                <tr className="hover:bg-gray-100">
                                    <td className="py-2 px-4">T+1</td>
                                    <td className="py-2 px-4">--</td>
                                    <td className="py-2 px-4">Predicted Value 1</td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="py-2 px-4">T+2</td>
                                    <td className="py-2 px-4">--</td>
                                    <td className="py-2 px-4">Predicted Value 2</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>

                    </div>
                </div>

                {/* Interpretation of Predictions */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="600">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Interpreting Predictions</h3>
                    <p className="text-lg text-[#555] mb-6 text-justify">
                        When interpreting model predictions, consider the following:
                    </p>
                    <ul className="list-disc list-inside text-lg text-[#555] mb-6">
                        <li>
                            <strong>Trend Analysis:</strong> Identify whether the predictions indicate an upward or downward trend, which can inform strategic decisions.
                        </li>
                        <li>
                            <strong>Seasonality Effects:</strong> Determine if the model has captured any seasonal patterns present in the data.
                        </li>
                        <li>
                            <strong>Prediction Intervals:</strong> Assess the confidence intervals to understand the uncertainty associated with the predictions.
                        </li>
                    </ul>
                </div>

                {/* Best Practices */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="800">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Best Practices for Model Predictions</h3>
                    <p className="text-lg text-[#555] mb-6 text-justify">
                        To enhance the reliability of your model predictions:
                    </p>
                    <ul className="list-disc list-inside text-lg text-[#555] mb-6">
                        <li>
                            <strong>Data Preprocessing:</strong> Ensure that the data is clean and appropriately preprocessed before modeling.
                        </li>
                        <li>
                            <strong>Model Validation:</strong> Use techniques like cross-validation to assess the model&apos;s performance on unseen data.
                        </li>
                        <li>
                            <strong>Regular Updates:</strong> Periodically retrain the model with new data to maintain its accuracy over time.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
