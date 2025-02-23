"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ChallengesAndConsiderations() {
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
                    Desafíos y Consideraciones
                </h2>

                {/* Introductory Paragraph */}
                <p className="text-lg text-[#555] text-justify mb-8" data-aos="fade-up">
                    Aunque los autoencoders son versátiles y potentes, su implementación conlleva desafíos y consideraciones
                    únicas. Comprender estos aspectos es crucial para construir modelos robustos y desplegarlos de manera
                    responsable en aplicaciones del mundo real.
                </p>

                {/* Overfitting and Prevention */}
                <article className="mb-12" data-aos="fade-up">
                    <h3 className="text-3xl font-medium text-[#444] mb-4">Overfitting y su Prevención</h3>
                    <p className="text-lg text-[#555] text-justify">
                        El overfitting ocurre cuando el autoencoder aprende a reconstruir los datos de entrenamiento demasiado bien,
                        incluyendo ruido o detalles irrelevantes, lo que resulta en una mala generalización a nuevos datos. Este
                        problema se puede mitigar empleando técnicas como dropout, regularización de pesos (penalizaciones L1/L2),
                        o detención temprana durante el entrenamiento.
                    </p>
                    <div className="bg-[#f4f4f4] p-4 mt-4 rounded-md">
                        <pre className="text-sm text-[#333] overflow-x-auto">
                            {`from tensorflow.keras import layers

# Adding dropout for regularization
encoded = layers.Dropout(0.2)(encoded)

# Compile the model with L2 regularization
autoencoder.compile(optimizer='adam', loss='mse', metrics=['mae'])`}
                        </pre>
                    </div>
                </article>

                {/* Limitations Compared to Other Models */}
                <article className="mb-12" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-3xl font-medium text-[#444] mb-4">
                        Limitaciones en Comparación con Otros Modelos Generativos
                    </h3>
                    <p className="text-lg text-[#555] text-justify">
                        A diferencia de modelos generativos más avanzados, como GANs o Autoencoders Variacionales, los autoencoders
                        tradicionales tienen dificultades para generar nuevas muestras realistas. Se centran principalmente en la
                        reconstrucción y carecen del elemento estocástico necesario para la generación creativa de datos. Estas
                        limitaciones los hacen menos adecuados para tareas que requieren salidas generativas de alta calidad.
                    </p>
                </article>

                {/* Ethical Considerations */}
                <article className="mb-12" data-aos="fade-up" data-aos-delay="400">
                    <h3 className="text-3xl font-medium text-[#444] mb-4">Consideraciones Éticas</h3>
                    <p className="text-lg text-[#555] text-justify">
                        Los autoencoders pueden aplicarse en áreas sensibles, como la atención médica y la vigilancia, donde las
                        implicaciones éticas deben evaluarse cuidadosamente. Cuestiones como la privacidad de los datos, los
                        sesgos potenciales en los datos de entrenamiento y el uso indebido de la detección de anomalías para
                        propósitos discriminatorios destacan la importancia de un despliegue de modelos transparente y
                        responsable.
                    </p>
                </article>
            </div>
        </section>
    );
}
