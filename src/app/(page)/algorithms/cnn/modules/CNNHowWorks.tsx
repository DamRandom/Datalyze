"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CNNHowWorks() {
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
          How CNNs Work
        </h2>

        {/* Text Content */}
        <div className="mb-8 text-justify" data-aos="fade-up" data-aos-delay="200">
          <p className="text-lg text-[#555] mb-6">
            Convolutional Neural Networks operate by learning hierarchical representations of data, allowing them to capture both low-level and high-level features in a structured manner. Early layers in the network focus on detecting simple patterns such as edges or textures, while deeper layers extract more complex features like shapes or objects. This hierarchical approach enables CNNs to effectively tackle sophisticated tasks like image classification and object detection.
          </p>
          <p className="text-lg text-[#555] mb-6">
            The process begins with an input image that is analyzed through multiple convolutional and pooling layers. These layers collaborate to detect and refine essential features at varying levels of abstraction. The convolutional layers emphasize feature extraction by applying specialized filters, while pooling layers reduce the spatial dimensions, ensuring computational efficiency without discarding critical information. Together, these components prepare the data for the final classification or prediction stage, where fully connected layers leverage the learned features to generate accurate outputs.
          </p>
          <p className="text-lg text-[#555] mb-6">
            By combining these mechanisms, CNNs achieve remarkable precision in interpreting and categorizing visual data. This capability has revolutionized fields such as computer vision, making CNNs indispensable tools for analyzing complex imagery.
          </p>
        </div>

        {/* Image with Margins */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-6" data-aos="fade-up" data-aos-delay="400">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/tensorflow-keras-convolutional-layer-example-1024x704.webp"
              alt="Visual representation of the CNN process"
              width={900}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Image Source */}
        <div className="text-sm text-center text-[#555] mb-8" data-aos="fade-up" data-aos-delay="600">
          <span className="font-semibold text-[#333]">Source: </span>
          <a
            href="https:learnopencv.com/understanding-convolutional-neural-networks-cnn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Towards Data Science
          </a>
        </div>
      </div>
    </section>
  );
}
