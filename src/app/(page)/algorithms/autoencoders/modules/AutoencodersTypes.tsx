"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AutoencodersTypes() {
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
          Types of Autoencoders
        </h2>

        {/* Deep Autoencoders */}
        <article className="mb-12" data-aos="fade-up">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Deep Autoencoders</h3>
          <p className="text-lg text-[#555] text-justify">
            Deep autoencoders use multiple layers in both the encoder and decoder components to capture more complex
            data representations. This approach allows them to extract hierarchical features, making them suitable for
            tasks involving intricate datasets, such as images or text.
          </p>
        </article>

        {/* Regular Autoencoders */}
        <article className="mb-12" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Regular Autoencoders</h3>
          <p className="text-lg text-[#555] text-justify">
            Regular autoencoders are further categorized based on their specific purposes and constraints:
          </p>
          <ul className="list-disc list-inside text-lg text-[#555] mt-4">
            <li>
              <strong>Sparse Autoencoders:</strong> Promote sparse activations in the latent layer, focusing on only a few
              active neurons, which helps in feature selection and interpretation.
            </li>
            <li>
              <strong>Denoising Autoencoders:</strong> Train on corrupted inputs to reconstruct the original, clean
              data. These are particularly useful for removing noise and enhancing data quality.
            </li>
            <li>
              <strong>Contractive Autoencoders:</strong> Add a regularization penalty to make the latent representation
              more robust against small variations in input data.
            </li>
          </ul>
        </article>

        {/* Variational Autoencoders */}
        <article className="mb-12" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Variational Autoencoders (VAEs)</h3>
          <p className="text-lg text-[#555] text-justify">
            Variational Autoencoders (VAEs) introduce a probabilistic approach to autoencoding. They aim to generate new
            data points similar to the input by learning a distribution over the latent space. VAEs are widely used in
            generative tasks, such as image synthesis and anomaly detection.
          </p>
        </article>
      </div>
    </section>
  );
}
