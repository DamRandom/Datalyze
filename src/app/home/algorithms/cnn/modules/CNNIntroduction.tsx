"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CNNSection() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Tiempo de duración de la animación
      delay: 200,    // Retraso inicial
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#f4f4f4] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
          What Are CNNs?
        </h2>

        {/* Text Content */}
        <div className="mb-8">
          <h3 className="text-3xl font-medium text-[#444] mb-4" data-aos="fade-up">
            Understanding CNNs
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
            Convolutional Neural Networks, or CNNs, are a class of deep learning algorithms primarily used for processing and recognizing visual data. Their design is inspired by the way the human brain processes visual information. CNNs are able to detect patterns and spatial dependencies in images through their hierarchical structure, making them highly effective at tasks such as image classification, object detection, and facial recognition.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="400">
            The strength of CNNs lies in their ability to automatically learn features from raw input images, eliminating the need for manual feature extraction. This is accomplished through multiple layers: convolutional layers that apply filters to capture features, pooling layers that reduce computational load, and fully connected layers that perform the final classification after learning the features.
          </p>

          <h3 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="600">
            Key Components
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="800">
            CNNs are built on a series of components that work together to process images in a way that mimics human visual perception. The <strong>convolutional layers</strong> apply filters to detect various features like <strong>edges</strong> and <strong>textures</strong>. <strong>Pooling layers</strong> then reduce the spatial dimensions, making the process more computationally efficient without losing crucial information. The <strong>activation functions</strong> add non-linearity, allowing CNNs to learn more complex patterns. Finally, <strong>fully connected layers</strong> are responsible for classifying the learned features into specific categories.
          </p>
        </div>

        {/* Image with Margins inside a Card */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-6" data-aos="fade-up" data-aos-delay="1000">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/1_vkQ0hXDaQv57sALXAJquxA.webp"
              alt="CNN Architecture"
              width={900}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Image Source */}
        <div className="text-sm text-center text-[#555] mb-8" data-aos="fade-up" data-aos-delay="1200">
          <span className="font-semibold text-[#333]">Source: </span>
          <a
            href="https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Towards Data Science
          </a>
        </div>

        {/* Bottom Text */}
        <div className="mb-8 text-justify" data-aos="fade-up" data-aos-delay="1400">
          <p className="text-lg text-[#555]">
            CNNs have become a fundamental tool in the field of computer vision, enabling machines to analyze and understand visual data. Their ability to learn and extract features automatically, without the need for extensive human intervention, has made them indispensable in many real-world applications.
          </p>
        </div>
      </div>
    </section>
  );
}
