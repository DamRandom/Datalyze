"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AutoARIMAHyperparameters() {
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
                    AutoARIMA Hyperparameters
                </h2>

                {/* General Description of Hyperparameters */}
                <div className="mb-4">
                    <p className="text-lg text-[#555] text-justify">
                        Hyperparameters in the AutoARIMA model are crucial for controlling the model’s complexity and behavior. By adjusting these settings, the model can be fine-tuned to effectively handle different time series patterns, such as seasonality, trend, and noise. The configuration of these parameters directly affects the model’s performance, accuracy, and stability. Properly tuning them according to the dataset’s characteristics is essential for improving the model’s ability to detect underlying patterns and make accurate predictions.
                    </p>
                </div>
            </div>
        </section>
    );
}
