"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LSTMSection() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      delay: 200,    // Initial delay
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#f4f4f4] py-16 px-4 mt-12">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
          What Are LSTMs?
        </h2>

        {/* Text Content */}
        <div className="mb-8">
          <h3 className="text-3xl font-medium text-[#444] mb-4" data-aos="fade-up">
            Understanding LSTMs
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
            Long Short-Term Memory networks, or LSTMs, are a specialized form of Recurrent Neural Networks (RNNs) designed to address the limitations of traditional RNNs in handling long-term dependencies. Introduced by Hochreiter and Schmidhuber in 1997, LSTMs have become a cornerstone in sequence modeling tasks.
          </p>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="400">
            The primary innovation of LSTMs lies in their ability to retain information over extended time periods. This is achieved through a unique cell structure equipped with gates that regulate the flow of information. These gates allow LSTMs to selectively forget, retain, or pass information to the next time step, making them highly effective for tasks requiring context retention, such as time series forecasting, language modeling, and speech recognition.
          </p>

          <h3 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="600">
            Key Features
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="800">
            LSTMs are built to overcome the vanishing gradient problem that hampers traditional RNNs during training. Their distinctive architecture includes:
          </p>
          <ul className="list-disc pl-8 text-lg text-[#555] mb-6" data-aos="fade-up" data-aos-delay="1000">
            <li><strong>Forget Gate:</strong> Decides which information to discard from the cell state.</li>
            <li><strong>Input Gate:</strong> Determines what new information to add to the cell state.</li>
            <li><strong>Output Gate:</strong> Regulates what information to output at each time step.</li>
          </ul>
        </div>

        {/* Image with Margins inside a Card */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-6">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/LSTM/LSTMcell.webp" // Replace with the actual image path
              alt="LSTM Architecture"
              width={900}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Image Source */}
        <div className="text-sm text-center text-[#555] mb-8" data-aos="fade-up" data-aos-delay="1400">
          <span className="font-semibold text-[#333]">Source: </span>
          <a
            href="https://towardsdatascience.com/illustrated-guide-to-lstms-and-gru-s-a-step-by-step-explanation-44e9eb85bf21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Illustrated Guide to LSTM&apost;s and GRU&apost;s: A step by step explanation
          </a>
        </div>

        {/* Bottom Text */}
        <div className="mb-8 text-justify" data-aos="fade-up" data-aos-delay="1600">
          <p className="text-lg text-[#555]">
            LSTMs are widely used in domains that require the processing of sequential data. Their ability to model temporal dependencies makes them invaluable for applications such as predicting stock prices, translating languages, and analyzing sentiment in text.
          </p>
        </div>
      </div>
    </section>
  );
}
