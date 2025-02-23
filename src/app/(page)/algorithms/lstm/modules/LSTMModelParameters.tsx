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
                    Parámetros Clave del Modelo (Hiperparámetros)
                </h2>

                {/* Text Content */}
                <div className="mb-8">
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
                        Los hiperparámetros son configuraciones esenciales que impactan significativamente el rendimiento de una red LSTM. A continuación, se explican los principales:
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="400">
                        Tamaño de Ventana
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="600">
                        Define el número de pasos de tiempo utilizados como la secuencia de entrada. Un tamaño de ventana apropiado permite al modelo capturar patrones relevantes en los datos secuenciales. Una ventana que es demasiado pequeña puede perder información importante, mientras que una ventana que es demasiado grande puede introducir ruido y aumentar la complejidad computacional.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="800">
                        Épocas
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="1000">
                        Representa el número de pasadas completas sobre el conjunto de datos durante el entrenamiento. Un mayor número de épocas permite que el modelo aprenda mejor, pero también aumenta el riesgo de sobreajuste. Se recomiendan técnicas como el &quot;early stopping&quot; para detener el entrenamiento cuando el rendimiento en los datos de validación deja de mejorar.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="1200">
                        Tamaño del Lote
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="1400">
                        Indica el número de muestras procesadas antes de actualizar los parámetros internos del modelo. Tamaños de lote más grandes pueden llevar a pasos de gradiente más estables, mientras que tamaños más pequeños ofrecen una mayor variabilidad que puede ayudar a escapar de mínimos locales. Un valor comúnmente utilizado es 32, aunque puede ajustarse según los requisitos específicos del modelo y los recursos computacionales disponibles.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="1600">
                        Unidades
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="1800">
                        Se refiere al número de neuronas en cada capa LSTM. Un mayor número de unidades permite al modelo capturar patrones más complejos, pero también aumenta el riesgo de sobreajuste y la carga computacional. Es crucial equilibrar la capacidad del modelo con la complejidad de la tarea y el tamaño del conjunto de datos.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="2000">
                        Función de Activación
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="2200">
                        Las funciones de activación introducen no linealidad en el modelo, permitiéndole aprender relaciones complejas en los datos. En las capas LSTM, se utilizan comúnmente funciones como la tangente hiperbólica (tanh) o sigmoide, mientras que las capas densas a menudo emplean ReLU (Unidad Lineal Rectificada). La elección de la función de activación depende de la tarea específica y puede influir en la convergencia y el rendimiento del modelo.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="2400">
                        Optimizador
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="2600">
                        El optimizador es el algoritmo que ajusta los pesos del modelo para minimizar la función de pérdida. Adam es ampliamente utilizado por su eficiencia y adaptabilidad, combinando los beneficios de los algoritmos AdaGrad y RMSProp. La elección del optimizador puede afectar la velocidad de convergencia y la calidad final del modelo.
                    </p>

                    <h4 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up" data-aos-delay="2800">
                        Función de Pérdida
                    </h4>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="3000">
                        La función de pérdida cuantifica la discrepancia entre las predicciones del modelo y los valores reales. Para tareas de regresión, como la predicción de series temporales, se utiliza comúnmente el Error Cuadrático Medio (MSE), ya que penaliza grandes desviaciones y proporciona una medida clara del rendimiento del modelo.
                    </p>
                </div>
            </div>
        </section>
    );
}
