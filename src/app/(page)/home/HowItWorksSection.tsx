"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: "Data Analysis",
    description: `This stage involves collecting, cleaning, and analyzing historical data to understand patterns and trends that affect the performance of predictive models. It ensures high-quality, unbiased data suitable for subsequent tests using advanced statistical tools to interpret information.`,
    image: "/images/DataAnalysis.webp",
  },
  {
    title: "Identifying Differences",
    description: `In this phase, the Friedman Test is applied, a statistical analysis to determine if significant differences exist in the performance of various predictive models. This test is crucial to validate that results are not merely due to chance and that the models are genuinely distinct in their predictive capabilities.`,
    image: "/images/IdentifyingDifferences.webp",
  },
  {
    title: "Detailed Comparisons",
    description: `After identifying significant differences, a post-hoc test is conducted to make specific comparisons between pairs of models. This test provides deeper insights into interactions, highlighting which models exhibit real, non-random differences, aiding in future decision-making.`,
    image: "/images/DetailedComparisons.webp",
  },
];

export default function HowItWorksSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#f4f4f4] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center text-[#333] mb-12" data-aos="fade-up">
          How It Works
        </h2>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              {/* Image */}
              <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>

              {/* Step Description */}
              <div className="md:w-1/2 px-6">
                <h3 className="text-2xl font-medium text-[#444] mb-4 text-center md:text-left">
                  {step.title}
                </h3>
                <p className="text-lg text-[#555] leading-relaxed text-justify">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
