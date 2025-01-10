"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CNNTraining() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duración de la animación
      delay: 200,    // Retraso inicial
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#f4f4f4] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
          Training CNNs
        </h2>

        {/* Text Content */}
        <div className="mb-8">
          <h3 className="text-3xl font-medium text-[#444] mb-4" data-aos="fade-up">
            Overview of the Training Process
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
            Convolutional Neural Networks (CNNs) are trained using supervised learning techniques, requiring labeled data to learn from. The main goal is to minimize the difference between predicted and actual values using a loss function. The process involves multiple steps to ensure that the network learns accurate representations from the data.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="400">
            Key elements in training a CNN include preparing the data, selecting an appropriate loss function, using optimizers to adjust weights, and applying backpropagation to fine-tune the network. These elements work together to refine the model over multiple iterations, improving its accuracy with each pass.
          </p>

          <h3 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="600">
            Key Steps in Training a CNN
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="800">
            The training process is divided into four main steps:
          </p>
          <ul className="text-lg text-[#555] mb-6 pl-6 list-disc" data-aos="fade-up" data-aos-delay="1000">
            <li><strong>Data Preparation:</strong> Images are preprocessed and normalized to ensure uniformity across the dataset.</li>
            <li><strong>Loss Function:</strong> The loss function measures the error between predicted and actual labels. Common loss functions include cross-entropy for classification tasks.</li>
            <li><strong>Optimizer:</strong> The optimizer adjusts the weights of the network to minimize the loss function. Popular optimizers include Stochastic Gradient Descent (SGD) and Adam.</li>
            <li><strong>Backpropagation:</strong> This technique calculates gradients of the loss function and updates the model weights to reduce errors.</li>
          </ul>

          <h3 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="1200">
            Common Optimization Algorithms
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="1400">
            During training, optimization algorithms like Stochastic Gradient Descent (SGD) and Adam play a crucial role in minimizing the loss function. The learning rate is an important parameter that determines the size of the steps taken during optimization. A well-tuned learning rate can significantly speed up training and improve model performance.
          </p>
        </div>

        {/* Image with Margins inside a Card */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-6" data-aos="fade-up" data-aos-delay="1600">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/491280-fig-02.svg"
              alt="CNN Training Process"
              width={900}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Image Source */}
        <div className="text-sm text-center text-[#555] mb-8" data-aos="fade-up" data-aos-delay="1800">
          <span className="font-semibold text-[#333]">Source: </span>
          <a
            href="https://www.analog.com/en/resources/analog-dialogue/articles/training-convolutional-neural-networks-what-is-machine-learning-part-2.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Towards Data Science
          </a>
        </div>

        {/* Bottom Text */}
        <div className="mb-8 text-justify" data-aos="fade-up" data-aos-delay="2000">
          <p className="text-lg text-[#555]">
            Training a CNN is a critical part of the machine learning process, as it allows the network to learn the necessary patterns from labeled data. Proper data preparation, loss function selection, and optimization techniques are essential for building a robust and efficient model.
          </p>
        </div>
      </div>
    </section>
  );
}
