"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ModelPredictionOutput() {
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
                    Salida de Predicción del Modelo
                </h2>

                {/* Introduction */}
                <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
                    En la predicción de series temporales, modelos como ARIMA generan predicciones para futuros puntos de datos basados en patrones históricos. 
                    Comprender cómo interpretar y visualizar estas predicciones es crucial para una toma de decisiones efectiva.
                </p>

                {/* Prediction Visualization */}
                <div className="bg-white p-6 mb-8 shadow-lg" data-aos="fade-up" data-aos-delay="400">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Visualización de Predicciones</h3>
                    <p className="text-lg text-[#555] mb-6 text-justify">
                        Visualizar las predicciones del modelo junto con los datos reales ayuda a evaluar el rendimiento del modelo. 
                        A continuación se muestra un ejemplo de cómo se pueden presentar las predicciones:
                    </p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="text-left text-gray-600">
                                    <th className="py-2 px-4">Período de Tiempo</th>
                                    <th className="py-2 px-4">Valor Real</th>
                                    <th className="py-2 px-4">Valor Predicho</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example rows */}
                                <tr className="hover:bg-gray-100">
                                    <td className="py-2 px-4">T+1</td>
                                    <td className="py-2 px-4">--</td>
                                    <td className="py-2 px-4">Valor Predicho 1</td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="py-2 px-4">T+2</td>
                                    <td className="py-2 px-4">--</td>
                                    <td className="py-2 px-4">Valor Predicho 2</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Interpretation of Predictions */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="600">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Interpretación de Predicciones</h3>
                    <p className="text-lg text-[#555] mb-6 text-justify">
                        Al interpretar las predicciones del modelo, considera lo siguiente:
                    </p>
                    <ul className="list-disc list-inside text-lg text-[#555] mb-6">
                        <li>
                            <strong>Análisis de Tendencias:</strong> Identificar si las predicciones indican una tendencia ascendente o descendente, lo que puede informar decisiones estratégicas.
                        </li>
                        <li>
                            <strong>Efectos de Estacionalidad:</strong> Determinar si el modelo ha capturado patrones estacionales presentes en los datos.
                        </li>
                        <li>
                            <strong>Intervalos de Predicción:</strong> Evaluar los intervalos de confianza para entender la incertidumbre asociada con las predicciones.
                        </li>
                    </ul>
                </div>

                {/* Best Practices */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="800">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Mejores Prácticas para Predicciones del Modelo</h3>
                    <p className="text-lg text-[#555] mb-6 text-justify">
                        Para mejorar la fiabilidad de las predicciones de tu modelo:
                    </p>
                    <ul className="list-disc list-inside text-lg text-[#555] mb-6">
                        <li>
                            <strong>Preprocesamiento de Datos:</strong> Asegúrate de que los datos estén limpios y apropiadamente preprocesados antes de modelar.
                        </li>
                        <li>
                            <strong>Validación del Modelo:</strong> Utiliza técnicas como la validación cruzada para evaluar el rendimiento del modelo en datos no vistos.
                        </li>
                        <li>
                            <strong>Actualizaciones Regulares:</strong> Periódicamente vuelve a entrenar el modelo con nuevos datos para mantener su precisión con el tiempo.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
