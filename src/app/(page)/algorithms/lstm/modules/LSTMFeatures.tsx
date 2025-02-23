"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LSTMFeaturesSection() {
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
          Características Principales de los LSTM
        </h2>

        {/* Forget Gate */}
        <div className="mb-8">
          <h3 className="text-3xl font-medium text-[#444] mb-4" data-aos="fade-up">
            Puerta de Olvido
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
            La puerta de olvido determina qué información del estado oculto anterior y la entrada actual debe ser retenida o descartada. Las entradas se procesan a través de una función sigmoide, produciendo valores entre 0 y 1, donde 0 indica olvido y 1 indica retención.
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src="/images/LSTM/ForgetGate.gif"
              alt="Operaciones de la Puerta de Olvido"
              width={700}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Input Gate */}
        <div className="mb-8">
          <h3 className="text-3xl font-medium text-[#444] mb-4" data-aos="fade-up">
            Puerta de Entrada
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
            La puerta de entrada decide qué nueva información debe actualizar el estado de la celda. Combina una función sigmoide, identificando valores importantes, y una función tanh, regulando los rangos de valores. Estas salidas se multiplican para finalizar la actualización del estado de la celda.
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src="/images/LSTM/InputGate.gif"
              alt="Operaciones de la Puerta de Entrada"
              width={700}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Cell State */}
        <div className="mb-8">
          <h3 className="text-3xl font-medium text-[#444] mb-4" data-aos="fade-up">
            Estado de la Celda
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
            El estado de la celda se actualiza combinando las salidas de la puerta de olvido y la puerta de entrada. El estado de la celda existente se multiplica elemento por elemento por la salida de la puerta de olvido, eliminando información irrelevante. Luego, se añade información relevante de la puerta de entrada para crear el estado de la celda actualizado.
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src="/images/LSTM/CellState.gif"
              alt="Cálculo del Estado de la Celda"
              width={700}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Output Gate */}
        <div className="mb-8">
          <h3 className="text-3xl font-medium text-[#444] mb-4" data-aos="fade-up">
            Puerta de Salida
          </h3>
          <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
            La puerta de salida define el siguiente estado oculto, decidiendo qué información retener para las predicciones. Utiliza una función sigmoide en la entrada y el estado oculto anterior, y una función tanh en el estado de la celda actualizado. Estas salidas se multiplican para generar el estado oculto final.
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src="/images/LSTM/OutputGate.gif"
              alt="Operaciones de la Puerta de Salida"
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
