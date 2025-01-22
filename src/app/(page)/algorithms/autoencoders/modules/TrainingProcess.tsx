"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TrainingProcess() {
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
          Training Process
        </h2>

        {/* Loss Function */}
        <article className="mb-12" data-aos="fade-up">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Loss Function</h3>
          <p className="text-lg text-[#555] text-justify">
            The training process for autoencoders is driven by the loss function, which calculates the reconstruction
            error between the input and the output. Common metrics include Mean Squared Error (MSE) or Binary
            Cross-Entropy, depending on the nature of the data. The objective is to minimize this error, ensuring the
            output closely resembles the input.
          </p>
        </article>

        {/* Optimization Techniques */}
        <article className="mb-12" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Optimization Techniques</h3>
          <p className="text-lg text-[#555] text-justify">
            Optimization plays a crucial role in achieving convergence. Autoencoders typically rely on gradient-based
            optimization methods, such as Stochastic Gradient Descent (SGD) or Adam. Techniques like learning rate
            scheduling and gradient clipping can further enhance convergence speed and stability.
          </p>
        </article>

        {/* Dataset Size and Regularization */}
        <article className="mb-12" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Dataset Size and Regularization</h3>
          <p className="text-lg text-[#555] text-justify">
            The size and quality of the dataset significantly impact training performance. A larger, diverse dataset
            often results in better generalization. Regularization methods, such as L1/L2 penalties or dropout, are
            commonly used to prevent overfitting, ensuring the model does not memorize the training data but rather
            learns robust patterns.
          </p>
        </article>
      </div>
    </section>
  );
}
