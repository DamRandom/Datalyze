"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ModelPerformanceMetrics() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: true,
        });
    }, []);

    return (
        <section className="bg-[#f4f4f4] py-16 px-4 mt-12">
            <div className="max-w-6xl mx-auto">
                <h2
                    className="text-4xl font-semibold text-[#333] mb-8"
                    data-aos="fade-up"
                >
                    Understanding Model Performance Metrics
                </h2>
                <p
                    className="text-lg text-[#555] mb-8 text-justify"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Evaluating a predictive model&apost;s performance is crucial to ensure its reliability and accuracy in real-world scenarios. Different metrics provide unique perspectives on how well the model&apost;s predictions align with actual outcomes. Below, we explore key performance metrics, their significance, and an example to contextualize these concepts.
                </p>

                <div className="space-y-12">
                    {/* Metric 1: MSE */}
                    <div
                        className="bg-white p-6 rounded-lg shadow-md"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <h3 className="text-2xl font-semibold text-[#333] mb-4">
                            Mean Squared Error (MSE)
                        </h3>
                        <p className="text-[#555] text-justify mb-4">
                            MSE measures the average squared difference between predicted and actual values. It heavily penalizes larger errors, making it particularly sensitive to outliers. This metric is useful for tasks where minimizing large deviations is crucial, as it emphasizes significant discrepancies in predictions.
                        </p>
                        <p className="text-[#555] text-justify mb-4">
                            <strong>Example:</strong> If the model predicts a series of student performance scores, and the actual scores differ significantly for some students, the MSE will highlight those errors more prominently than other metrics.
                        </p>
                        <div className="text-center text-[#333]">
                            <strong>Example Result:</strong> MSE = 23302.59
                        </div>
                    </div>

                    {/* Metric 2: MAE */}
                    <div
                        className="bg-white p-6 rounded-lg shadow-md"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <h3 className="text-2xl font-semibold text-[#333] mb-4">
                            Mean Absolute Error (MAE)
                        </h3>
                        <p className="text-[#555] text-justify mb-4">
                            MAE calculates the average of the absolute differences between predicted and actual values. Unlike MSE, it treats all errors equally, regardless of magnitude, providing a more balanced view of overall prediction accuracy.
                        </p>
                        <p className="text-[#555] text-justify mb-4">
                            <strong>Example:</strong> In forecasting enrollment numbers, if the model consistently overestimates or underestimates by a small margin, the MAE reflects these consistent deviations without exaggerating their impact.
                        </p>
                        <div className="text-center text-[#333]">
                            <strong>Example Result:</strong> MAE = 110.67
                        </div>
                    </div>

                    {/* Metric 3: MAPE */}
                    <div
                        className="bg-white p-6 rounded-lg shadow-md"
                        data-aos="fade-up"
                        data-aos-delay="800"
                    >
                        <h3 className="text-2xl font-semibold text-[#333] mb-4">
                            Mean Absolute Percentage Error (MAPE)
                        </h3>
                        <p className="text-[#555] text-justify mb-4">
                            MAPE evaluates prediction accuracy in percentage terms, making it intuitive for interpreting results in a relative context. However, it can be sensitive to very small actual values, potentially inflating error percentages disproportionately.
                        </p>
                        <p className="text-[#555] text-justify mb-4">
                            <strong>Example:</strong> When predicting attendance rates, MAPE helps express the error as a percentage, which is often more meaningful for stakeholders than absolute error values.
                        </p>
                        <div className="text-center text-[#333]">
                            <strong>Example Result:</strong> MAPE = 95.88%
                        </div>
                    </div>
                </div>

                {/* Summary */}
                <div
                    className="mt-12 p-6 bg-[#e4e4e4] rounded-lg"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                >
                    <h3 className="text-2xl font-semibold text-[#333] mb-4">
                        Why These Metrics Matter
                    </h3>
                    <p className="text-[#555] text-justify">
                        Each metric offers distinct insights into model performance. MSE emphasizes large errors, MAE balances overall deviations, and MAPE provides percentage-based accuracy. Together, they form a comprehensive evaluation framework, enabling data-driven decisions and continuous model improvement.
                    </p>
                </div>
            </div>
        </section>
    );
}
