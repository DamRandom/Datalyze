"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LSTMTrainingProcess() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: true,
        });
    }, []);

    return (
        <section className="bg-[#f4f4f4] py-16 px-4 mt-12">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
                    LSTM Training Process
                </h2>

                {/* Text Content */}
                <div className="mb-8">
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
                        Training an LSTM model involves an iterative process where the data is passed through multiple epochs and divided into smaller batches. Each epoch represents a full pass through the dataset, while batches allow the model to update its weights incrementally. This approach enables the network to generalize better and adapt its parameters effectively over time.
                    </p>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="400">
                        At the core of this process, LSTM layers excel in identifying temporal patterns within sequential data. By processing inputs one time step at a time, they capture dependencies across long sequences, making them ideal for tasks that require understanding the order of events or time-series relationships.
                    </p>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="600">
                        Ensuring reproducibility is a critical aspect of training. Setting random seeds helps maintain consistency in weight initialization and data shuffling, enabling fair comparisons across different experiments or runs. This practice is particularly important in research and collaborative environments.
                    </p>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="800">
                        Despite their strengths, LSTM models can encounter challenges during training. Overfitting is a common issue, especially with limited data, where the model learns the noise rather than the underlying patterns. Techniques like dropout, regularization, and early stopping are effective in mitigating this problem. Convergence difficulties can also arise, particularly in deep networks or with poorly chosen hyperparameters. Monitoring the training process and fine-tuning parameters can significantly improve performance.
                    </p>
                </div>
            </div>
        </section>
    );
}
