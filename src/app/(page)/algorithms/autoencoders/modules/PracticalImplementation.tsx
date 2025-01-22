"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PracticalImplementation() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#ffffff] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
          Practical Implementation
        </h2>

        {/* Introductory Paragraph */}
        <p className="text-lg text-[#555] text-justify mb-8" data-aos="fade-up">
          Building an autoencoder involves multiple steps, from data preprocessing to training and evaluation. In this
          section, we will walk through the process of creating a simple autoencoder using TensorFlow/Keras, a widely
          used machine learning framework.
        </p>

        {/* Step 1: Data Preprocessing */}
        <article className="mb-12" data-aos="fade-up">
          <h3 className="text-3xl font-medium text-[#444] mb-4">1. Data Preprocessing</h3>
          <p className="text-lg text-[#555] text-justify">
            Before training the autoencoder, the input data needs to be normalized and prepared. For example, in image
            processing, pixel values are often scaled to a range between 0 and 1. Additionally, the data is typically
            split into training and validation sets to monitor the model&apos;s performance during training.
          </p>
          <div className="bg-[#f4f4f4] p-4 mt-4 rounded-md">
            <pre className="text-sm text-[#333] overflow-x-auto">
              {`import numpy as np
from tensorflow.keras.datasets import mnist

# Load and normalize the MNIST dataset
(x_train, _), (x_test, _) = mnist.load_data()
x_train = x_train.astype('float32') / 255.0
x_test = x_test.astype('float32') / 255.0

# Flatten the images
x_train = x_train.reshape((x_train.shape[0], -1))
x_test = x_test.reshape((x_test.shape[0], -1))`}
            </pre>
          </div>
        </article>

        {/* Step 2: Building the Autoencoder */}
        <article className="mb-12" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-3xl font-medium text-[#444] mb-4">2. Building the Autoencoder</h3>
          <p className="text-lg text-[#555] text-justify">
            An autoencoder consists of an encoder, a latent representation layer, and a decoder. TensorFlow/Keras allows
            us to define these components using its functional API or Sequential model.
          </p>
          <div className="bg-[#f4f4f4] p-4 mt-4 rounded-md">
            <pre className="text-sm text-[#333] overflow-x-auto">
              {`from tensorflow.keras import layers, models

# Define the dimensions
input_dim = x_train.shape[1]
latent_dim = 64

# Encoder
input_layer = layers.Input(shape=(input_dim,))
encoded = layers.Dense(latent_dim, activation='relu')(input_layer)

# Decoder
decoded = layers.Dense(input_dim, activation='sigmoid')(encoded)

# Autoencoder
autoencoder = models.Model(input_layer, decoded)
autoencoder.compile(optimizer='adam', loss='mse')

autoencoder.summary()`}
            </pre>
          </div>
        </article>

        {/* Step 3: Training and Evaluation */}
        <article className="mb-12" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-3xl font-medium text-[#444] mb-4">3. Training and Evaluation</h3>
          <p className="text-lg text-[#555] text-justify">
            The autoencoder is trained by minimizing the reconstruction loss, which measures the difference between the
            input and the reconstructed output. After training, the model&apos;s performance can be evaluated using metrics
            such as Mean Squared Error (MSE).
          </p>
          <div className="bg-[#f4f4f4] p-4 mt-4 rounded-md">
            <pre className="text-sm text-[#333] overflow-x-auto">
              {`# Train the autoencoder
history = autoencoder.fit(
    x_train, x_train,
    epochs=20,
    batch_size=256,
    shuffle=True,
    validation_data=(x_test, x_test)
)

# Evaluate the model
loss = autoencoder.evaluate(x_test, x_test)
print(f"Reconstruction loss: {loss}")`}
            </pre>
          </div>
        </article>
      </div>
    </section>
  );
}
