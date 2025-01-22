"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CNNSection() {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      delay: 100, 
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#f4f4f4] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
          CNN Architectures
        </h2>

        {/* LeNet-5 */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="0">
          <h3 className="text-2xl font-semibold text-[#333] mb-4">LeNet-5 (1998)</h3>
          <p className="text-lg text-[#555] mb-6 text-justify">
            LeNet-5 is a pioneering convolutional network that was designed to classify handwritten digits. It was applied for automatic digit recognition in cheques using 32x32 pixel grayscale images.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify">
            Although LeNet-5 demonstrated strong performance, its ability to process higher-resolution images is limited by computational resources.
          </p>
        </div>

        {/* AlexNet */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-2xl font-semibold text-[#333] mb-4">AlexNet (2012)</h3>
          <p className="text-lg text-[#555] mb-6 text-justify">
            AlexNet, introduced in 2012, was a breakthrough in deep learning for image classification, using five layers to learn patterns from large datasets. It made a significant impact on the field of computer vision.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify">
            In domains like legal document analysis, AlexNet could be used to classify images of contracts or court documents, improving workflow efficiency.
          </p>
        </div>

        {/* ResNet */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-semibold text-[#333] mb-4">ResNet (2015)</h3>
          <p className="text-lg text-[#555] mb-6 text-justify">
            ResNet addresses the vanishing gradient problem with residual connections that allow for deeper networks. This enables it to learn more effectively even with many layers.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify">
            In tourism, ResNet could classify images of destinations, helping travel companies target their marketing efforts and recommend locations to travelers.
          </p>
        </div>

        {/* GoogLeNet */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-2xl font-semibold text-[#333] mb-4">GoogLeNet (2014)</h3>
          <p className="text-lg text-[#555] mb-6 text-justify">
            GoogLeNet, introduced in 2014, uses Inception modules for efficiency, allowing the network to process information at multiple levels while reducing computational load.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify">
            In retail, GoogLeNet could analyze product images for categorization and inventory management, streamlining operations and improving product search accuracy.
          </p>
        </div>

        {/* MobileNet */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-2xl font-semibold text-[#333] mb-4">MobileNet (2017)</h3>
          <p className="text-lg text-[#555] mb-6 text-justify">
            MobileNet is optimized for mobile devices, utilizing depth-wise separable convolutions to reduce parameters while maintaining accuracy.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify">
            In HR, MobileNet could be used to classify resumes or analyze job applicants&apos; profiles, making it easier for HR teams to evaluate qualifications.
          </p>
        </div>

        {/* VGG-16 */}
        <div data-aos="fade-up" data-aos-delay="500">
          <h3 className="text-2xl font-semibold text-[#333] mb-4">VGG-16 (2014)</h3>
          <p className="text-lg text-[#555] mb-6 text-justify">
            VGG-16 is a deep CNN with 16 layers, designed to achieve high accuracy in image classification and object detection tasks. It has been widely adopted in research and practical applications.
          </p>
        </div>
      </div>
    </section>
  );
}
