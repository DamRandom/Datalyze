"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LSTMDataPreprocessing() {
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration
            delay: 200,    // Initial delay
            once: true,
        });
    }, []);

    return (
        <section className="bg-[#f4f4f4] py-16 px-4 mt-12">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
                    Data Preprocessing Workflow for LSTM Models
                </h2>

                {/* Text Content */}
                <div className="mb-8">
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
                        Preparing your data is a crucial step in training any machine learning model, especially LSTM networks. Proper preprocessing ensures that the data is in a suitable format, improving the model&apost;s accuracy and efficiency. Below are the key steps in the preprocessing pipeline for LSTM models:
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="400">
                        Step 1: Feature and Label Separation
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="600">
                        The first step involves separating the dataset into features and labels. Features represent the input data, while labels are the target output. This step is essential as it allows the LSTM model to learn from the relevant patterns in the input features and predict the future values in the labels.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="800">
                        Step 2: Scaling Input and Output Data
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="1000">
                        To improve the model’s performance, it is necessary to scale the input and output data to a range that the model can efficiently process. The MinMaxScaler scales all the values to a range between 0 and 1, which helps the model converge faster and avoids issues with differing feature magnitudes.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="1200">
                        Step 3: Creating Sliding Windows for Sequential Data
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="1400">
                        LSTM models are designed to work with sequential data, so creating sliding windows ensures that the model receives input sequences for training. This step involves generating sequences from the data, typically with a predefined window size that represents the number of previous time steps used to predict the next value.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="1600">
                        Step 4: 3D Formatting for LSTM Input
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="1800">
                        LSTM models expect input data in a specific 3D format: `[samples, timesteps, features]`. This step reshapes the data into this format, where `samples` are the number of sequences, `timesteps` are the number of time steps per sequence, and `features` are the number of features in each time step.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="2000">
                        Why Preprocessing is Crucial
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="2200">
                        Proper preprocessing is essential for training an accurate and efficient LSTM model. Without adequate preprocessing, the model may struggle with noisy data, improper scaling, or irrelevant features, leading to poor performance. By following the steps outlined above, you ensure that the data is well-suited for learning complex patterns and making accurate predictions.
                    </p>
                </div>
            </div>
        </section>
    );
}
