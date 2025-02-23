"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AdditionalConsiderations() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: true,
        });
    }, []);

    return (
        <section className="bg-[#f4f4f4] py-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
                    Consideraciones Adicionales
                </h2>

                {/* Limitations of the Model */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Limitaciones del Modelo</h3>
                    <p className="text-lg text-[#555] mb-6 text-justify">
                        Aunque los modelos ARIMA son herramientas poderosas para la predicción de series temporales, tienen ciertas limitaciones. Asumen relaciones lineales dentro de los datos, lo que puede no captar patrones complejos y no lineales presentes en algunos conjuntos de datos. Además, los modelos ARIMA requieren una cantidad sustancial de datos históricos para producir pronósticos fiables; con datos limitados, el rendimiento del modelo puede degradarse significativamente. Además, ARIMA puede tener dificultades con conjuntos de datos que presentan patrones estacionales fuertes, a menos que se amplíe a ARIMA estacional (SARIMA).
                    </p>
                </div>

                {/* Handling Insufficient Data */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="400">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Manejo de Datos Insuficientes</h3>
                    <p className="text-lg text-[#555] mb-6 text-justify">
                        En escenarios donde los datos son insuficientes, como columnas con pocas observaciones o valores constantes, los modelos ARIMA pueden no rendir de manera óptima. Para columnas con datos mínimos, el modelo podría recurrir a predicciones simplistas, como usar la media de las observaciones disponibles, lo que puede llevar a pronósticos inexactos. De manera similar, para columnas con valores constantes, el modelo puede no identificar patrones significativos, resultando en predicciones que no reflejan tendencias subyacentes potenciales. Es crucial evaluar la adecuación de sus datos antes de aplicar modelos ARIMA para asegurar resultados de pronóstico significativos y fiables.
                    </p>
                </div>
            </div>
        </section>
    );
}
