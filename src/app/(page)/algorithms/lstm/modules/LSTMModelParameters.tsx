"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LSTMModelParameters() {
    useEffect(() => {
        AOS.init({
            duration: 800, 
            delay: 200,   
            once: true,
        });
    }, []);

    return (
        <section className="bg-[#f4f4f4] py-16 px-4 mt-12">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
                    Key Model Parameters (Hyperparameters)
                </h2>

                {/* Text Content */}
                <div className="mb-8">
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
                        Hyperparameters are essential configurations that significantly impact the performance of an LSTM network. Below are the main ones explained:
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="400">
                        Window Size
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="600">
                        Defines the number of time steps used as the input sequence. An appropriate window size enables the model to capture relevant patterns in sequential data. A window that is too small may miss important information, while a window that is too large may introduce noise and increase computational complexity.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="800">
                        Epochs
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="1000">
                        Represents the number of complete passes over the dataset during training. A higher number of epochs allows the model to learn better but also increases the risk of overfitting. Techniques like &quot;early stopping&quot; are recommended to halt training when performance on validation data stops improving.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="1200">
                        Batch Size
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="1400">
                        Indicates the number of samples processed before updating the model&#39;s internal parameters. Larger batch sizes can lead to more stable gradient steps, while smaller sizes offer higher variability that can help escape local minima. A commonly used value is 32, though it can be adjusted based on the model&#39;s specific requirements and available computational resources.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="1600">
                        Units
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="1800">
                        Refers to the number of neurons in each LSTM layer. A higher number of units allows the model to capture more complex patterns but also increases the risk of overfitting and computational load. Balancing the model&#39;s capacity with task complexity and dataset size is crucial.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="2000">
                        Activation Function
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="2200">
                        Activation functions introduce non-linearity into the model, enabling it to learn complex relationships in the data. In LSTM layers, functions like hyperbolic tangent (tanh) or sigmoid are commonly used, while dense layers often employ ReLU (Rectified Linear Unit). The choice of activation function depends on the specific task and can influence model convergence and performance.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="2400">
                        Optimizer
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="2600">
                        The optimizer is the algorithm that adjusts the model&#39;s weights to minimize the loss function. Adam is widely used for its efficiency and adaptability, combining the benefits of AdaGrad and RMSProp algorithms. The optimizer choice can affect convergence speed and final model quality.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="2800">
                        Loss Function
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="3000">
                        The loss function quantifies the discrepancy between the model&#39;s predictions and actual values. For regression tasks, such as time series forecasting, Mean Squared Error (MSE) is commonly used, as it penalizes large deviations and provides a clear measure of model performance.
                    </p>
                </div>
            </div>
        </section>
    );
}
