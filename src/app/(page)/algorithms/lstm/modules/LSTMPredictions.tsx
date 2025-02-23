"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function LSTMPredictions() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: true,
        });
    }, []);

    return (
        <section className="bg-[#f4f4f4] py-16 px-4 mt-12">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Column: Text */}
                <div>
                    <h2
                        className="text-4xl font-semibold text-[#333] mb-6"
                        data-aos="fade-up"
                    >
                        Predicción con LSTMs
                    </h2>
                    <p
                        className="text-lg text-[#555] mb-6 text-justify"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Las LSTMs están diseñadas para entender las relaciones temporales en los datos secuenciales, permitiéndoles prever valores futuros al analizar la ventana de información más reciente. Este enfoque ayuda en aplicaciones como la predicción de métricas educativas, tendencias financieras o datos climáticos.
                    </p>
                    <p
                        className="text-lg text-[#555] mb-6 text-justify"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        El preprocesamiento juega un papel crucial en la obtención de resultados confiables. Los datos se escalan a rangos normalizados para mejorar la estabilidad numérica y asegurar un cálculo eficiente. Este paso es esencial para gestionar conjuntos de datos diversos.
                    </p>
                    <p
                        className="text-lg text-[#555] mb-6 text-justify"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        Después de la predicción, los resultados se reescalan a su rango original y se ajustan según sea necesario para obtener información útil. Por ejemplo, predecir el segundo semestre de 2024 implica usar datos pasados para prever tendencias en varios dominios.
                    </p>
                </div>

                {/* Right Column: Visual Steps */}
                <div className="space-y-8" data-aos="fade-up" data-aos-delay="800">
                    {/* Step 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                        <Image
                            src="/images/icons/ic--outline-input.svg"
                            alt="Ícono de Datos de Entrada"
                            width={80}
                            height={80}
                        />
                        <div>
                            <h3 className="text-xl font-semibold text-[#333] mb-2">
                                Datos de Entrada
                            </h3>
                            <p className="text-sm text-[#555]">
                                El modelo utiliza la ventana de datos más reciente para analizar patrones y generar pronósticos.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                        <Image
                            src="/images/icons/ic--baseline-linear-scale.svg"
                            alt="Ícono de Preprocesamiento"
                            width={80}
                            height={80}
                        />
                        <div>
                            <h3 className="text-xl font-semibold text-[#333] mb-2">
                                Preprocesamiento
                            </h3>
                            <p className="text-sm text-[#555]">
                                Los datos de entrada se escalan a un rango normalizado para estabilidad y eficiencia de cálculo.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                        <Image
                            src="/images/icons/ic--baseline-escalator.svg"
                            alt="Ícono de Post-Procesamiento"
                            width={80}
                            height={80}
                        />
                        <div>
                            <h3 className="text-xl font-semibold text-[#333] mb-2">
                                Post-Procesamiento
                            </h3>
                            <p className="text-sm text-[#555]">
                                Las predicciones se reescalan y redondean para obtener resultados útiles e interpretables.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
