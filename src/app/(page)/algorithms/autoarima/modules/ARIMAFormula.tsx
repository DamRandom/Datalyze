"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ARIMAFormula() {
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
                    Fórmula y Parámetros del Modelo ARIMA
                </h2>

                {/* Formula Section */}
                <h3 className="text-2xl font-medium text-[#444] mb-4">Fórmula del Modelo</h3>
                <p className="text-lg text-[#555] mb-6 text-justify">
                    El modelo ARIMA se representa mediante una fórmula matemática que combina componentes autorregresivos, integrados y de media móvil. 
                    La estructura general de la fórmula implica pronosticar valores futuros basándose en observaciones pasadas, datos diferenciales para lograr estacionariedad, 
                    y errores pasados. Esta fórmula ayuda a crear predicciones al tener en cuenta tanto las tendencias como la aleatoriedad en los datos.
                </p>
                
                {/* Explanation of Parameters */}
                <div className="mb-8">
                    <h3 className="text-2xl font-medium text-[#444] mb-4" data-aos="fade-up">
                        Explicación de los Parámetros
                    </h3>
                    <p className="text-lg text-[#555] mb-6 text-justify" data-aos="fade-up" data-aos-delay="200">
                        El modelo ARIMA consta de tres componentes principales:
                    </p>
                    <ul className="text-lg text-[#555] mb-6 pl-4 list-disc" data-aos="fade-up" data-aos-delay="400">
                        <li>
                            <strong>AR (Autorregresivo):</strong> Refleja el impacto de los valores anteriores en la serie temporal sobre el valor actual. Esto se controla mediante el parámetro <em>p</em>.
                        </li>
                        <li>
                            <strong>I (Integrado):</strong> Representa el número de operaciones de diferenciación aplicadas a los datos para hacerlos estacionarios, controlado por el parámetro <em>d</em>.
                        </li>
                        <li>
                            <strong>MA (Media Móvil):</strong> Tiene en cuenta la relación entre los errores de pronóstico pasados y los valores actuales, controlada por el parámetro <em>q</em>.
                        </li>
                    </ul>
                    <p className="text-lg text-[#555] text-justify" data-aos="fade-up" data-aos-delay="600">
                        Estos parámetros se ajustan según el comportamiento de los datos. El parámetro <em>p</em> se ajusta a menudo en función de la autocorrelación presente, 
                        mientras que el parámetro <em>d</em> se utiliza para lograr la estacionariedad en los datos, y el parámetro <em>q</em> se establece según los errores de pronóstico observados.
                    </p>
                </div>

                {/* Key Takeaways */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="800">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Conclusiones Clave</h3>
                    <p className="text-lg text-[#555] text-justify">
                        El modelo ARIMA es una herramienta poderosa para la predicción de series temporales, ya que puede captar varios patrones como tendencias y estacionalidad. 
                        Al seleccionar cuidadosamente valores apropiados para los parámetros <em>p</em>, <em>d</em> y <em>q</em>, el modelo puede ser ajustado de manera efectiva 
                        para predecir valores futuros y adaptarse a diferentes tipos de datos de series temporales.
                    </p>
                </div>
            </div>
        </section>
    );
}
