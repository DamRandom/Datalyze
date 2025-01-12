"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LSTMFeaturesSection() {
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
          Core Features of LSTMs
        </h2>

        {/* Forget Gate */}
        <div className="mb-8">
          <h3 className="text-3xl font-medium text-[#444] mb-4" data-aos="fade-up">
            Forget Gate
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
            The forget gate determines which information from the previous hidden state and the current input should be retained or discarded. Inputs are processed through a sigmoid function, producing values between 0 and 1, where 0 indicates forgetting, and 1 indicates retention.
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src="/images/LSTM/ForgetGate.gif"
              alt="Forget Gate Operations"
              width={700}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Input Gate */}
        <div className="mb-8">
          <h3 className="text-3xl font-medium text-[#444] mb-4" data-aos="fade-up">
            Input Gate
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
            The input gate decides which new information should update the cell state. It combines a sigmoid function, identifying important values, and a tanh function, regulating value ranges. These outputs are multiplied to finalize the cell state update.
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src="/images/LSTM/InputGate.gif"
              alt="Input Gate Operations"
              width={700}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Cell State */}
        <div className="mb-8">
          <h3 className="text-3xl font-medium text-[#444] mb-4" data-aos="fade-up">
            Cell State
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
            The cell state is updated by combining outputs from the forget gate and the input gate. The existing cell state is multiplied element-wise by the forget gate&apos;s output, removing irrelevant information. Then, relevant information from the input gate is added to create the updated cell state.
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src="/images/LSTM/CellState.gif"
              alt="Cell State Calculation"
              width={700}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Output Gate */}
        <div className="mb-8">
          <h3 className="text-3xl font-medium text-[#444] mb-4" data-aos="fade-up">
            Output Gate
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
            The output gate defines the next hidden state, deciding what information to retain for predictions. It uses a sigmoid function on the input and the previous hidden state and a tanh function on the updated cell state. These outputs are multiplied to generate the final hidden state.
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src="/images/LSTM/OutputGate.gif"
              alt="Output Gate Operations"
              width={700}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
