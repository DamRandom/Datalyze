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
          Implementación Práctica
        </h2>

        {/* Introductory Paragraph */}
        <p className="text-lg text-[#555] text-justify mb-8" data-aos="fade-up">
          Construir un autoencoder implica múltiples pasos, desde la preprocesamiento de datos hasta el entrenamiento y la
          evaluación. En esta sección, recorreremos el proceso de crear un autoencoder simple utilizando TensorFlow/Keras, un
          marco de aprendizaje automático ampliamente utilizado.
        </p>

        {/* Step 1: Data Preprocessing */}
        <article className="mb-12" data-aos="fade-up">
          <h3 className="text-3xl font-medium text-[#444] mb-4">1. Preprocesamiento de Datos</h3>
          <p className="text-lg text-[#555] text-justify">
            Antes de entrenar el autoencoder, los datos de entrada deben normalizarse y prepararse. Por ejemplo, en el
            procesamiento de imágenes, los valores de los píxeles a menudo se escalan a un rango entre 0 y 1. Además, los
            datos se dividen típicamente en conjuntos de entrenamiento y validación para monitorear el rendimiento del
            modelo durante el entrenamiento.
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
          <h3 className="text-3xl font-medium text-[#444] mb-4">2. Construyendo el Autoencoder</h3>
          <p className="text-lg text-[#555] text-justify">
            Un autoencoder consiste en un codificador, una capa de representación latente y un decodificador. TensorFlow/Keras
            nos permite definir estos componentes utilizando su API funcional o modelo Secuencial.
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
          <h3 className="text-3xl font-medium text-[#444] mb-4">3. Entrenamiento y Evaluación</h3>
          <p className="text-lg text-[#555] text-justify">
            El autoencoder se entrena minimizando la pérdida de reconstrucción, que mide la diferencia entre la entrada y la
            salida reconstruida. Después del entrenamiento, el rendimiento del modelo se puede evaluar utilizando métricas
            como el Error Cuadrático Medio (MSE).
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
