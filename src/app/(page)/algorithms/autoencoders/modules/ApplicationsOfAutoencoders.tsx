"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ApplicationsOfAutoencoders() {
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
          Applications of Autoencoders
        </h2>

        {/* Dimensionality Reduction */}
        <article className="mb-12" data-aos="fade-up">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Dimensionality Reduction</h3>
          <p className="text-lg text-[#555] text-justify">
            Autoencoders are widely used for dimensionality reduction, compressing high-dimensional data into a smaller
            latent representation while retaining essential features. This application is particularly useful in
            preprocessing data for visualization or further analysis.
          </p>
        </article>

        {/* Anomaly Detection */}
        <article className="mb-12" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Anomaly Detection</h3>
          <p className="text-lg text-[#555] text-justify">
            By learning the normal patterns in data, autoencoders can identify anomalies as inputs that produce high
            reconstruction errors. This makes them a powerful tool in industries such as fraud detection, network
            security, and predictive maintenance.
          </p>
        </article>

        {/* Noise Removal */}
        <article className="mb-12" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-3xl font-medium text-[#444] mb-4">Noise Removal</h3>
          <p className="text-lg text-[#555] text-justify">
            Denoising autoencoders are specifically designed to remove noise from input data, enhancing the quality of
            the reconstructed output. This technique is commonly applied in image processing and audio signal
            enhancement.
          </p>
        </article>
      </div>
    </section>
  );
}
