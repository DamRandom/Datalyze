"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ARIMAModelFittingSection() {
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
                    Ajuste y Pronóstico del Modelo ARIMA
                </h2>

                {/* Explanation Section */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Proceso de Ajuste del Modelo</h3>
                    <p className="text-lg text-[#555] mb-6 text-justify">
                        Ajustar un modelo ARIMA (Promedio Móvil Integrado Autorregresivo) implica estimar sus parámetros 
                        para representar de la mejor manera los patrones subyacentes en los datos de series temporales. El proceso 
                        generalmente incluye identificar los valores óptimos para tres componentes clave: AR (Autorregresivo), I (Integrado) y MA (Promedio Móvil).
                    </p>

                    <p className="text-lg text-[#555] mb-6 text-justify">
                        Si el proceso estándar de ajuste de ARIMA no converge o produce resultados subóptimos, se puede utilizar un modelo ARIMA más simple 
                        con parámetros predefinidos como alternativa. Un modelo de reserva comúnmente utilizado es ARIMA(1, 1, 0), donde los componentes AR 
                        y MA están fijos, proporcionando una predicción básica pero confiable.
                    </p>

                    <p className="text-lg text-[#555] mb-6 text-justify">
                        Una vez que el modelo está ajustado, los valores pronosticados a menudo se redondean al número entero más cercano. Este proceso de redondeo 
                        asegura que las predicciones sean más interpretables y fáciles de aplicar, especialmente en escenarios de toma de decisiones en el mundo real.
                    </p>

                    <h3 className="text-2xl font-medium text-[#444] mb-4">Proceso de Pronóstico</h3>
                    <p className="text-lg text-[#555] mb-6 text-justify">
                        Después de ajustar el modelo ARIMA, el siguiente paso es generar pronósticos para períodos futuros. Estas predicciones 
                        se basan típicamente en los datos históricos y los parámetros ajustados. En casos donde están involucradas múltiples variables o 
                        series temporales, el pronóstico puede ser la suma de las predicciones de series individuales, o se podría utilizar un método de 
                        agregación más complejo para producir un pronóstico final general.
                    </p>
                </div>
            </div>
        </section>
    );
}
