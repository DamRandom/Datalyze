"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AutoARIMAHyperparameters() {
    useEffect(() => {
        AOS.init({
            duration: 800, 
            delay: 200,  
            once: true,
        });
    }, []);

    return (
        <section className="bg-[#f4f4f4] py-16 px-4 relative">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
                    Hiperparámetros de AutoARIMA
                </h2>

                {/* General Description of Hyperparameters */}
                <div className="mb-4">
                    <p className="text-lg text-[#555] text-justify">
                        Los hiperparámetros en el modelo AutoARIMA son cruciales para controlar la complejidad y el comportamiento del modelo. 
                        Al ajustar estas configuraciones, el modelo puede ser optimizado para manejar efectivamente diferentes patrones de series temporales, 
                        como la estacionalidad, la tendencia y el ruido. La configuración de estos parámetros afecta directamente el rendimiento, la 
                        precisión y la estabilidad del modelo. Ajustarlos adecuadamente según las características del conjunto de datos es esencial 
                        para mejorar la capacidad del modelo para detectar patrones subyacentes y realizar predicciones precisas.
                    </p>
                </div>
            </div>
        </section>
    );
}
