"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CNNApplications = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#f4f4f4] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-4xl font-semibold text-center text-[#333] mb-10"
          data-aos="fade-up"
        >
          Applications of Convolutional Neural Networks
        </h1>

        <div className="mb-16">
          <h2
            className="text-3xl font-semibold text-[#333] mb-6"
            data-aos="fade-up"
          >
            Versatile Use Cases of CNNs
          </h2>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up">
            Convolutional Neural Networks (CNNs) have revolutionized computer vision by enabling machines to interpret and process visual data with unmatched precision. Their hierarchical structure allows automatic feature extraction, making them indispensable in numerous fields:
          </p>

          {/* Applications List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Image Classification", description: "Assigning images to predefined categories, such as identifying animal species or vehicle types." },
              { title: "Object Detection", description: "Locating and categorizing multiple objects within an image, essential for autonomous driving and surveillance systems." },
              { title: "Image Segmentation", description: "Dividing an image into segments to identify boundaries and objects, crucial in medical imaging for tumor detection." },
              { title: "Facial Recognition", description: "Identifying or verifying individuals by analyzing facial features, widely used in security and authentication systems." },
              { title: "Medical Image Analysis", description: "Assisting in disease diagnosis by analyzing medical images, such as detecting diabetic retinopathy." },
              { title: "Autonomous Driving", description: "Enabling vehicles to understand their surroundings by recognizing traffic signs, pedestrians, and obstacles." },
              { title: "Video Analysis", description: "Interpreting video data for action recognition, event detection, and summarization." },
            ].map((app, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
              >
                <h2 className="text-xl font-semibold text-[#333] mb-2">{app.title}</h2>
                <p className="text-lg text-[#555] text-justify">{app.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2
            className="text-3xl font-semibold text-[#333] mb-6"
            data-aos="fade-up"
          >
            Case Study: Diabetic Retinopathy Detection
          </h2>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up">
            Diabetic Retinopathy (DR) is a leading cause of blindness, resulting from prolonged diabetes affecting the retina. Early detection is vital for effective treatment and vision preservation. CNNs have become fundamental in automating DR detection and classification from retinal images.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up">
            By training on large datasets of retinal fundus images, CNNs can identify features indicative of DR, such as microaneurysms, hemorrhages, and exudates. Studies have demonstrated that CNN-based models achieve high sensitivity and specificity in DR detection, often surpassing human experts in consistency and speed.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up">
            For example, a study utilizing advanced neural network combinations evaluated their performance in classifying DR stages from retinal images. The proposed model showcased significant potential in enhancing diagnostic capabilities for DR detection.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up">
            Benefits of CNN implementation in DR detection include:
          </p>
          <ul
            className="list-disc list-inside text-lg text-[#555] mb-6"
            data-aos="fade-up"
          >
            {[
              "Scalability: Automated analysis can handle large image volumes, enabling large-scale screening programs.",
              "Consistency: CNNs provide uniform evaluations, reducing variability associated with human judgment.",
              "Accessibility: Deploying CNN-based tools in primary care settings enhances access to early diagnostic services, particularly in underserved areas.",
            ].map((benefit, index) => (
              <li key={index}>
                <strong>{benefit.split(":")[0]}:</strong> {benefit.split(":")[1]}
              </li>
            ))}
          </ul>
          <p className="text-lg text-[#555] text-justify" data-aos="fade-up">
            Despite these advantages, challenges remain, including the need for extensive labeled datasets, improving the detection of subtle features, and addressing concerns regarding model interpretability. Researchers are exploring methods to enhance data augmentation, feature visualization, and develop explainable AI frameworks to address these issues.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CNNApplications;
