"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ChallengesAndConsiderations() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: true,
        });
    }, []);

    return (
        <section className="bg-[#ffffff] py-16 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
                    Challenges and Considerations
                </h2>

                {/* Introductory Paragraph */}
                <p className="text-lg text-[#555] text-justify mb-8" data-aos="fade-up">
                    While autoencoders are versatile and powerful, their implementation comes with unique challenges and
                    considerations. Understanding these aspects is crucial for building robust models and deploying them
                    responsibly in real-world applications.
                </p>

                {/* Overfitting and Prevention */}
                <article className="mb-12" data-aos="fade-up">
                    <h3 className="text-3xl font-medium text-[#444] mb-4">Overfitting and Its Prevention</h3>
                    <p className="text-lg text-[#555] text-justify">
                        Overfitting occurs when the autoencoder learns to reconstruct the training data too well, including noise or
                        irrelevant details, resulting in poor generalization to new data. This issue can be mitigated by employing
                        techniques such as dropout, weight regularization (L1/L2 penalties), or early stopping during training.
                    </p>
                    <div className="bg-[#f4f4f4] p-4 mt-4 rounded-md">
                        <pre className="text-sm text-[#333] overflow-x-auto">
                            {`from tensorflow.keras import layers

# Adding dropout for regularization
encoded = layers.Dropout(0.2)(encoded)

# Compile the model with L2 regularization
autoencoder.compile(optimizer='adam', loss='mse', metrics=['mae'])`}
                        </pre>
                    </div>
                </article>

                {/* Limitations Compared to Other Models */}
                <article className="mb-12" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-3xl font-medium text-[#444] mb-4">
                        Limitations Compared to Other Generative Models
                    </h3>
                    <p className="text-lg text-[#555] text-justify">
                        Unlike more advanced generative models such as GANs or Variational Autoencoders, traditional autoencoders
                        struggle with generating realistic new samples. They are primarily reconstruction-focused and lack the
                        stochastic element necessary for creative data generation. These limitations make them less suitable for
                        tasks requiring high-quality generative outputs.
                    </p>
                </article>

                {/* Ethical Considerations */}
                <article className="mb-12" data-aos="fade-up" data-aos-delay="400">
                    <h3 className="text-3xl font-medium text-[#444] mb-4">Ethical Considerations</h3>
                    <p className="text-lg text-[#555] text-justify">
                        Autoencoders can be applied in sensitive areas, such as healthcare and surveillance, where ethical
                        implications must be carefully evaluated. Issues such as data privacy, potential biases in training data,
                        and the misuse of anomaly detection for discriminatory purposes highlight the importance of transparent and
                        responsible model deployment.
                    </p>
                </article>
            </div>
        </section>
    );
}
