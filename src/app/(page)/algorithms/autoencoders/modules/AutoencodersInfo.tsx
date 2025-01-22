"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AutoencodersPage = () => {
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
        <h2
          className="text-4xl font-semibold text-center text-[#333] mb-10"
          data-aos="fade-up"
        >
          Introduction to Autoencoders
        </h2>

        {/* Definition and Purpose */}
        <div className="mb-8">
          <h3
            className="text-3xl font-medium text-[#444] mb-4"
            data-aos="fade-up"
          >
            Definition and Purpose
          </h3>
          <p
            className="text-lg text-[#555] mb-6 text-justify"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Autoencoders are a type of artificial neural network designed for
            unsupervised learning. They aim to learn efficient representations
            of data by encoding the input into a compressed format and then
            decoding it back to reconstruct the original input. This process
            minimizes the difference between the input and its reconstruction,
            making autoencoders powerful tools for dimensionality reduction,
            anomaly detection, and more.
          </p>
        </div>

        {/* History and Evolution */}
        <div className="mb-8">
          <h3
            className="text-3xl font-medium text-[#444] mb-4"
            data-aos="fade-up"
          >
            Brief History and Evolution
          </h3>
          <p
            className="text-lg text-[#555] mb-6 text-justify"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            The origins of autoencoders can be traced back to the 1980s, with
            early work linking them to Principal Component Analysis (PCA). Over
            time, advancements in deep learning, particularly during the
            mid-2000s, enabled the development of deep autoencoder
            architectures. These breakthroughs highlighted their ability to
            capture complex, non-linear data patterns, paving the way for
            applications across diverse domains.
          </p>
        </div>

        {/* Comparison with PCA */}
        <div className="mb-8">
          <h3
            className="text-3xl font-medium text-[#444] mb-4"
            data-aos="fade-up"
          >
            Comparison with PCA
          </h3>
          <p
            className="text-lg text-[#555] mb-6 text-justify"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            While PCA is a linear technique that reduces dimensions by
            maximizing variance along orthogonal axes, autoencoders leverage
            neural networks to model non-linear relationships. This capability
            makes autoencoders more versatile in capturing intricate data
            patterns. However, PCA remains computationally efficient, whereas
            autoencoders require more resources due to their training process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutoencodersPage;
