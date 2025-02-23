"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PracticalApplicationsOfLSTMs() {
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
                    Aplicaciones Prácticas de los LSTMs
                </h2>
                <p
                    className="text-lg text-[#555] mb-8 text-justify"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    El potencial transformador de las redes de memoria a largo y corto plazo (LSTMs) radica en su capacidad única para procesar y aprender de datos secuenciales. Su versatilidad les permite adaptarse a una multitud de desafíos, impulsando la innovación en campos que dependen de la identificación de patrones y dependencias a lo largo del tiempo.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Column 1 */}
                    <div data-aos="fade-right">
                        <h3 className="text-2xl font-semibold text-[#333] mb-6">
                            Impulsando Pronósticos Precisos
                        </h3>
                        <p className="text-[#555] text-justify mb-4">
                            Los LSTMs sobresalen en aplicaciones de pronóstico, donde analizar tendencias históricas para predecir resultados futuros es crítico. En finanzas, estos modelos descubren tendencias en los datos del mercado de valores, ayudando en las decisiones de inversión. La industria de la salud se beneficia de los LSTMs al predecir métricas de salud de los pacientes, asegurando intervenciones oportunas. De manera similar, las empresas de energía utilizan LSTMs para pronosticar la demanda de electricidad, mejorando la eficiencia en la gestión de la red.
                        </p>
                        <p className="text-[#555] text-justify">
                            Al incorporar dependencias a largo plazo en sus pronósticos, los LSTMs reducen errores y permiten estrategias proactivas, diferenciándolos de los modelos estadísticos tradicionales.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div data-aos="fade-left">
                        <h3 className="text-2xl font-semibold text-[#333] mb-6">
                            Revolucionando la Comprensión del Lenguaje Natural
                        </h3>
                        <p className="text-[#555] text-justify mb-4">
                            En el ámbito del Procesamiento del Lenguaje Natural (NLP), los LSTMs desempeñan un papel vital en la captura de la esencia de las secuencias lingüísticas. Desde alimentar sistemas de traducción automática hasta realizar análisis de sentimientos, estas redes cierran brechas en la interacción humano-computadora. Por ejemplo, permiten a las plataformas interpretar reseñas de clientes o traducir texto con precisión contextual.
                        </p>
                        <p className="text-[#555] text-justify">
                            Su capacidad para manejar estructuras de oraciones complejas y longitudes variables los hace indispensables para romper barreras lingüísticas y comprender el sentimiento del usuario.
                        </p>
                    </div>

                    {/* Full-width Section */}
                    <div className="col-span-1 lg:col-span-2 mt-12" data-aos="fade-up">
                        <h3 className="text-2xl font-semibold text-[#333] mb-6 text-center">
                            Mejorando el Procesamiento de Videos y la Detección de Anomalías
                        </h3>
                        <p className="text-[#555] text-justify mb-4">
                            Más allá del texto y los números, los LSTMs han logrado avances significativos en el análisis de video. Sus capacidades de aprendizaje secuencial permiten identificar patrones en los fotogramas de video, lo cual es crítico para aplicaciones como la detección de anomalías en tiempo real en sistemas de vigilancia. Al analizar secuencias de video, los LSTMs identifican irregularidades, asegurando medidas de seguridad y protección mejoradas.
                        </p>
                        <p className="text-[#555] text-justify">
                            Además, estas redes ayudan en la generación de subtítulos automáticos, generando contenido descriptivo para datos visuales. Esta innovación no solo aumenta la accesibilidad, sino que también mejora la gestión de contenido en plataformas digitales.
                        </p>
                    </div>
                </div>

                {/* Closing Statement */}
                <div
                    className="mt-12 p-6 bg-[#e4e4e4] rounded-lg"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                >
                    <h3 className="text-2xl font-semibold text-[#333] mb-4 text-center">
                        Dando Forma a las Innovaciones del Mañana
                    </h3>
                    <p className="text-[#555] text-justify">
                        Desde la previsión hasta la comprensión del lenguaje y el análisis de datos visuales, los LSTMs están a la vanguardia del avance tecnológico. Su impacto se extiende a través de las industrias, demostrando el poder de las redes neuronales para resolver desafíos del mundo real. A medida que continuamos innovando, el potencial de los LSTMs para dar forma al futuro de las soluciones impulsadas por IA sigue siendo ilimitado.
                    </p>
                </div>
            </div>
        </section>
    );
}
