"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ARIMAMetrics() {
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
                    Métricas de Rendimiento de AutoARIMA
                </h2>

                {/* MSE Section */}
                <div className="mb-8" data-aos="fade-up">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Error Cuadrático Medio (MSE)</h3>
                    <p className="text-lg text-[#555] text-justify">
                        El MSE cuantifica la diferencia cuadrada promedio entre los valores predichos y las observaciones reales. 
                        Se calcula sumando las diferencias cuadradas y dividiendo por el número total de observaciones. 
                        Esta métrica es sensible a errores más grandes, lo que la hace particularmente útil para detectar atípicos. Un MSE más bajo indica un mejor rendimiento del modelo.
                    </p>
                </div>

                {/* MAE Section */}
                <div className="mb-8" data-aos="fade-up">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Error Absoluto Medio (MAE)</h3>
                    <p className="text-lg text-[#555] text-justify">
                        El MAE mide la magnitud promedio de las diferencias absolutas entre los valores predichos y los valores reales. 
                        A diferencia del MSE, trata todos los errores de manera equitativa sin enfatizar los errores más grandes. El MAE proporciona una medida clara y 
                        directa de la precisión del modelo, donde valores más bajos significan predicciones mejoradas.
                    </p>
                </div>

                {/* MAPE Section */}
                <div className="mb-8" data-aos="fade-up">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Error Porcentual Absoluto Medio (MAPE)</h3>
                    <p className="text-lg text-[#555] text-justify">
                        El MAPE calcula el error porcentual promedio entre los valores predichos y los valores reales. Se calcula dividiendo 
                        el error absoluto por los valores reales, promediando los resultados y multiplicando por 100 para expresarlo como un porcentaje. 
                        Esta métrica es particularmente intuitiva para entender el error en relación con la escala de los datos, aunque se necesita precaución cuando los valores reales se acercan a cero.
                    </p>
                </div>

                {/* General Considerations */}
                <div className="mb-8" data-aos="fade-up">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Consideraciones Generales</h3>
                    <p className="text-lg text-[#555] text-justify">
                        Estas métricas son esenciales para evaluar la precisión de modelos de series temporales como AutoARIMA. Cada métrica 
                        proporciona perspectivas únicas: el MSE resalta el impacto de errores grandes, el MAE ofrece una medida directa de 
                        precisión promedio y el MAPE permite la interpretación del error relativo. La selección de la métrica adecuada 
                        depende de las características del conjunto de datos y los objetivos del análisis.
                    </p>
                </div>
            </div>
        </section>
    );
}
