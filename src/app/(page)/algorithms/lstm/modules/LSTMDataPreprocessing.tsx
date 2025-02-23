"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LSTMDataPreprocessing() {
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
                    Flujo de Trabajo de Preprocesamiento de Datos para Modelos LSTM
                </h2>

                {/* Text Content */}
                <div className="mb-8">
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
                        Preparar tus datos es un paso crucial en el entrenamiento de cualquier modelo de aprendizaje automático, especialmente en redes LSTM. Un preprocesamiento adecuado asegura que los datos estén en un formato adecuado, mejorando la precisión y eficiencia del modelo. A continuación, se presentan los pasos clave en la tubería de preprocesamiento para modelos LSTM:
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="400">
                        Paso 1: Separación de Características y Etiquetas
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="600">
                        El primer paso consiste en separar el conjunto de datos en características y etiquetas. Las características representan los datos de entrada, mientras que las etiquetas son la salida objetivo. Este paso es esencial ya que permite que el modelo LSTM aprenda de los patrones relevantes en las características de entrada y prediga los valores futuros en las etiquetas.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="800">
                        Paso 2: Escalado de Datos de Entrada y Salida
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="1000">
                        Para mejorar el rendimiento del modelo, es necesario escalar los datos de entrada y salida a un rango que el modelo pueda procesar de manera eficiente. El MinMaxScaler escala todos los valores a un rango entre 0 y 1, lo que ayuda al modelo a converger más rápido y evita problemas con diferentes magnitudes de características.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="1200">
                        Paso 3: Creación de Ventanas Deslizantes para Datos Secuenciales
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="1400">
                        Los modelos LSTM están diseñados para trabajar con datos secuenciales, por lo que crear ventanas deslizantes asegura que el modelo reciba secuencias de entrada para el entrenamiento. Este paso implica generar secuencias a partir de los datos, típicamente con un tamaño de ventana predefinido que representa el número de pasos de tiempo anteriores utilizados para predecir el siguiente valor.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="1600">
                        Paso 4: Formato 3D para la Entrada LSTM
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="1800">
                        Los modelos LSTM esperan que los datos de entrada estén en un formato específico 3D: `[samples, timesteps, features]`. Este paso remodela los datos a este formato, donde `samples` son el número de secuencias, `timesteps` son el número de pasos de tiempo por secuencia y `features` son el número de características en cada paso de tiempo.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="2000">
                        Por Qué el Preprocesamiento es Crucial
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="2200">
                        Un preprocesamiento adecuado es esencial para entrenar un modelo LSTM preciso y eficiente. Sin un preprocesamiento adecuado, el modelo puede tener problemas con datos ruidosos, escalado inapropiado o características irrelevantes, lo que lleva a un rendimiento deficiente. Al seguir los pasos descritos anteriormente, aseguras que los datos sean adecuados para aprender patrones complejos y hacer predicciones precisas.
                    </p>
                </div>
            </div>
        </section>
    );
}
