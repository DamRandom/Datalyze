"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LSTMHyperparameters: React.FC = () => {
  // Establecer un estado para verificar si estamos en el cliente
  const [isClient, setIsClient] = useState(false);

  // Usamos useEffect para actualizar el estado solo en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Aseguramos que AOS solo se inicialice en el cliente
  useEffect(() => {
    if (isClient) {
      AOS.init();
    }
  }, [isClient]);

  return (
    <section className="bg-[#f9fafa] py-16 px-8">
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h2
            className="text-3xl font-semibold text-[#1E293B]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            LSTM Model Hyperparameters
          </h2>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Explanation */}
          <div
            className="text-justify flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3 className="text-xl font-semibold text-[#1E293B] mb-4">
              Understanding the Hyperparameters
            </h3>
            <p className="text-[#475569] mb-6">
              The performance of an LSTM model depends heavily on the
              configuration of its hyperparameters. These parameters dictate the
              model&apos;s behavior and efficiency in learning from data. The
              choice of hyperparameters can significantly impact how well the
              model generalizes and makes predictions. Below, we explain each
              hyperparameter used in our LSTM model and its role in the training
              process.
            </p>
          </div>

          {/* Hyperparameter List */}
          <div
            className="text-justify"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h3 className="text-xl font-semibold text-[#1E293B] mb-4">
              Key Hyperparameters
            </h3>
            <p className="text-[#475569] mb-4">
              <strong>window_size:</strong> Defines the number of time steps
              used to create input sequences. Set to 3 in this model, it means
              the model uses the previous three time steps to predict the next
              one. This choice helps capture short-term temporal dependencies.
            </p>
            <p className="text-[#475569] mb-4">
              <strong>epochs:</strong> Specifies the number of times the model
              iterates over the entire training dataset. A higher number of
              epochs gives the model more opportunities to adjust its weights,
              though it also increases the risk of overfitting.
            </p>
            <p className="text-[#475569] mb-4">
              <strong>batch_size:</strong> Determines how many samples are
              processed before the model’s weights are updated. Proper batch
              size ensures efficient training and helps maintain the balance
              between model performance and training speed.
            </p>
            <p className="text-[#475569] mb-4">
              <strong>units in LSTM layers:</strong> The first LSTM layer has
              64 units, while the second has 32. These units determine the
              model’s capacity to learn complex temporal patterns in the data,
              with more units typically allowing the model to capture more
              intricate relationships.
            </p>
            <p className="text-[#475569] mb-4">
              <strong>Activation:</strong> The ReLU activation function is used
              in all LSTM layers and the final dense layer. ReLU helps the model
              converge faster and mitigate the vanishing gradient problem,
              making it suitable for training deep networks.
            </p>
            <p className="text-[#475569] mb-4">
              <strong>Optimizer:</strong> Adam optimizer is employed for its
              efficiency in adjusting the learning rate for each parameter. This
              allows the model to converge quickly and effectively, especially
              in the case of deep neural networks.
            </p>
            <p className="text-[#475569] mb-4">
              <strong>Loss:</strong> Mean Squared Error (MSE) is used as the
              loss function, measuring the difference between predicted and
              actual values. MSE penalizes large errors, pushing the model to
              focus on minimizing discrepancies in its predictions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LSTMHyperparameters;
