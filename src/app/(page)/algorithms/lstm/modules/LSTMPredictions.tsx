"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function LSTMPredictions() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: true,
        });
    }, []);

    return (
        <section className="bg-[#f4f4f4] py-16 px-4 mt-12">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Column: Text */}
                <div>
                    <h2
                        className="text-4xl font-semibold text-[#333] mb-6"
                        data-aos="fade-up"
                    >
                        Prediction with LSTMs
                    </h2>
                    <p
                        className="text-lg text-[#555] mb-6 text-justify"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        LSTMs are designed to understand temporal relationships in
                        sequential data, enabling them to forecast future values by analyzing the
                        most recent window of information. This approach helps in applications
                        like predicting educational metrics, financial trends, or climate data.
                    </p>
                    <p
                        className="text-lg text-[#555] mb-6 text-justify"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        Preprocessing plays a crucial role in achieving reliable results.
                        Data is scaled to normalized ranges to enhance numerical stability
                        and ensure efficient computation. This step is essential for managing
                        diverse datasets.
                    </p>
                    <p
                        className="text-lg text-[#555] mb-6 text-justify"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        After prediction, results are rescaled to their original range and
                        adjusted as needed for actionable insights. For instance, forecasting
                        the second semester of 2024 involves using past data to predict trends
                        across various domains.
                    </p>
                </div>

                {/* Right Column: Visual Steps */}
                <div className="space-y-8" data-aos="fade-up" data-aos-delay="800">
                    {/* Step 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                        <Image
                            src="/images/icons/ic--outline-input.svg"
                            alt="Input Data Icon"
                            width={80}
                            height={80}
                        />
                        <div>
                            <h3 className="text-xl font-semibold text-[#333] mb-2">
                                Input Data
                            </h3>
                            <p className="text-sm text-[#555]">
                                The model uses the most recent data window to analyze
                                patterns and generate forecasts.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                        <Image
                            src="/images/icons/ic--baseline-linear-scale.svg"
                            alt="Preprocessing Icon"
                            width={80}
                            height={80}
                        />
                        <div>
                            <h3 className="text-xl font-semibold text-[#333] mb-2">
                                Preprocessing
                            </h3>
                            <p className="text-sm text-[#555]">
                                Input data is scaled to a normalized range for stability
                                and computation efficiency.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                        <Image
                            src="/images/icons/ic--baseline-escalator.svg"
                            alt="Post-Processing Icon"
                            width={80}
                            height={80}
                        />
                        <div>
                            <h3 className="text-xl font-semibold text-[#333] mb-2">
                                Post-Processing
                            </h3>
                            <p className="text-sm text-[#555]">
                                Predictions are rescaled and rounded for actionable
                                and interpretable results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
