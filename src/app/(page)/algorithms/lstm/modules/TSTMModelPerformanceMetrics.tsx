"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ModelPerformanceMetrics() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: true,
        });
    }, []);

    return (
        <section className="bg-[#f4f4f4] py-16 px-4 mt-12">
            <div className="max-w-6xl mx-auto">
                <h2
                    className="text-4xl font-semibold text-[#333] mb-8"
                    data-aos="fade-up"
                >
                    Entendiendo las Métricas de Rendimiento del Modelo
                </h2>
                <p
                    className="text-lg text-[#555] mb-8 text-justify"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Evaluar el rendimiento de un modelo predictivo es crucial para asegurar su fiabilidad y precisión en escenarios del mundo real. Diferentes métricas ofrecen perspectivas únicas sobre cuán bien las predicciones del modelo se alinean con los resultados reales. A continuación, exploramos las métricas de rendimiento clave, su importancia y un ejemplo para contextualizar estos conceptos.
                </p>

                <div className="space-y-12">
                    {/* Metric 1: MSE */}
                    <div
                        className="bg-white p-6 rounded-lg shadow-md"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <h3 className="text-2xl font-semibold text-[#333] mb-4">
                            Error Cuadrático Medio (MSE)
                        </h3>
                        <p className="text-[#555] text-justify mb-4">
                            El MSE mide la diferencia cuadrática media entre los valores predichos y los reales. Penaliza fuertemente los errores más grandes, lo que lo hace particularmente sensible a los valores atípicos. Esta métrica es útil para tareas donde minimizar grandes desviaciones es crucial, ya que enfatiza las discrepancias significativas en las predicciones.
                        </p>
                        <p className="text-[#555] text-justify mb-4">
                            <strong>Ejemplo:</strong> Si el modelo predice una serie de puntajes de rendimiento de estudiantes, y los puntajes reales difieren significativamente para algunos estudiantes, el MSE destacará esos errores más prominentemente que otras métricas.
                        </p>
                        <div className="text-center text-[#333]">
                            <strong>Resultado de Ejemplo:</strong> MSE = 23302.59
                        </div>
                    </div>

                    {/* Metric 2: MAE */}
                    <div
                        className="bg-white p-6 rounded-lg shadow-md"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <h3 className="text-2xl font-semibold text-[#333] mb-4">
                            Error Absoluto Medio (MAE)
                        </h3>
                        <p className="text-[#555] text-justify mb-4">
                            El MAE calcula la media de las diferencias absolutas entre los valores predichos y los reales. A diferencia del MSE, trata todos los errores por igual, independientemente de su magnitud, proporcionando una visión más equilibrada de la precisión general de la predicción.
                        </p>
                        <p className="text-[#555] text-justify mb-4">
                            <strong>Ejemplo:</strong> En la previsión de números de matrícula, si el modelo constantemente sobreestima o subestima por un pequeño margen, el MAE refleja estas desviaciones consistentes sin exagerar su impacto.
                        </p>
                        <div className="text-center text-[#333]">
                            <strong>Resultado de Ejemplo:</strong> MAE = 110.67
                        </div>
                    </div>

                    {/* Metric 3: MAPE */}
                    <div
                        className="bg-white p-6 rounded-lg shadow-md"
                        data-aos="fade-up"
                        data-aos-delay="800"
                    >
                        <h3 className="text-2xl font-semibold text-[#333] mb-4">
                            Error Absoluto Porcentual Medio (MAPE)
                        </h3>
                        <p className="text-[#555] text-justify mb-4">
                            El MAPE evalúa la precisión de las predicciones en términos porcentuales, lo que lo hace intuitivo para interpretar resultados en un contexto relativo. Sin embargo, puede ser sensible a valores reales muy pequeños, lo que podría inflar desproporcionadamente los porcentajes de error.
                        </p>
                        <p className="text-[#555] text-justify mb-4">
                            <strong>Ejemplo:</strong> Al predecir tasas de asistencia, el MAPE ayuda a expresar el error como un porcentaje, lo que a menudo es más significativo para las partes interesadas que los valores de error absolutos.
                        </p>
                        <div className="text-center text-[#333]">
                            <strong>Resultado de Ejemplo:</strong> MAPE = 95.88%
                        </div>
                    </div>
                </div>

                {/* Summary */}
                <div
                    className="mt-12 p-6 bg-[#e4e4e4] rounded-lg"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                >
                    <h3 className="text-2xl font-semibold text-[#333] mb-4">
                        Por Qué Estas Métricas Son Importantes
                    </h3>
                    <p className="text-[#555] text-justify">
                        Cada métrica ofrece perspectivas distintas sobre el rendimiento del modelo. El MSE enfatiza los errores grandes, el MAE equilibra las desviaciones generales y el MAPE proporciona precisión basada en porcentajes. Juntas, forman un marco de evaluación integral, permitiendo decisiones basadas en datos y una mejora continua del modelo.
                    </p>
                </div>
            </div>
        </section>
    );
}
