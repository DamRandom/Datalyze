"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CNNEvaluation() {
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
          Evaluating CNN Performance
        </h2>

        {/* Text Content */}
        <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
          <p className="text-lg text-[#555] mb-6 text-justify">
            After training a Convolutional Neural Network (CNN), evaluating its performance is crucial to ensure its effectiveness. Performance evaluation is typically conducted on a separate test dataset to verify how well the model generalizes to unseen data. This step helps identify potential overfitting and provides insights into the model’s strengths and weaknesses.
          </p>
        </div>

        {/* Image and Text Side by Side */}
        <div className="flex flex-col lg:flex-row items-center gap-6 mb-8">
          <div className="flex-1" data-aos="fade-up" data-aos-delay="400">
            <Image
              src="/images/confusion_matrix_diabetic_retinopathy.png"
              alt="Confusion Matrix for Diabetic Retinopathy Detection"
              width={900}
              height={450}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1" data-aos="fade-up" data-aos-delay="600">
            <p className="text-lg text-[#555] text-justify">
              A confusion matrix is a powerful visualization tool for evaluating CNN performance. It breaks down correct and incorrect predictions across classes, offering a detailed perspective on the model&apos;s behavior. For example, in detecting Diabetic Retinopathy from medical images, the matrix can highlight specific areas where the model excels or struggles, guiding further refinements.
            </p>
          </div>
        </div>

        {/* Final Paragraph */}
        <div className="mb-8" data-aos="fade-up" data-aos-delay="800">
          <p className="text-lg text-[#555] text-justify">
            Understanding the nuances of CNN performance through visualizations is critical for refining models and ensuring their reliability in real-world applications. Tools like confusion matrices transform raw metrics into actionable insights, driving continuous improvement and fostering trust in AI systems.
          </p>
        </div>

        {/* Image Source */}
        <div className="text-sm text-center text-[#555] mb-8" data-aos="fade-up" data-aos-delay="1000">
          <span className="font-semibold text-[#333]">Source: </span>
          <a
            href="https://towardsdatascience.com/evaluating-model-performance"
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
