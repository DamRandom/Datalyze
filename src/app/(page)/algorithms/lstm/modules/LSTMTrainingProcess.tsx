"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LSTMTrainingProcess() {
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
                    Proceso de Entrenamiento de LSTM
                </h2>

                {/* Text Content */}
                <div className="mb-8">
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
                        Entrenar un modelo LSTM implica un proceso iterativo donde los datos se pasan a través de múltiples épocas y se dividen en lotes más pequeños. Cada época representa un pase completo por el conjunto de datos, mientras que los lotes permiten que el modelo actualice sus pesos de manera incremental. Este enfoque permite que la red generalice mejor y adapte sus parámetros de manera efectiva con el tiempo.
                    </p>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="400">
                        En el núcleo de este proceso, las capas LSTM sobresalen en la identificación de patrones temporales dentro de datos secuenciales. Al procesar las entradas un paso de tiempo a la vez, capturan dependencias a lo largo de secuencias largas, lo que las hace ideales para tareas que requieren entender el orden de los eventos o relaciones de series temporales.
                    </p>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="600">
                        Asegurar la reproducibilidad es un aspecto crítico del entrenamiento. Establecer semillas aleatorias ayuda a mantener la consistencia en la inicialización de pesos y el barajado de datos, lo que permite comparaciones justas entre diferentes experimentos o ejecuciones. Esta práctica es particularmente importante en entornos de investigación y colaboración.
                    </p>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="800">
                        A pesar de sus fortalezas, los modelos LSTM pueden encontrar desafíos durante el entrenamiento. El sobreajuste es un problema común, especialmente con datos limitados, donde el modelo aprende el ruido en lugar de los patrones subyacentes. Técnicas como dropout, regularización y detención temprana son efectivas para mitigar este problema. También pueden surgir dificultades de convergencia, particularmente en redes profundas o con hiperparámetros mal elegidos. Monitorear el proceso de entrenamiento y ajustar parámetros puede mejorar significativamente el rendimiento.
                    </p>
                </div>
            </div>
        </section>
    );
}
