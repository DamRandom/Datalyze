"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AutoencodersArchitecture() {
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
                <h2
                    className="text-4xl font-semibold text-center text-[#333] mb-10"
                    data-aos="fade-up"
                >
                    Arquitectura de un Autoencoder
                </h2>

                {/* Text Content */}
                <div className="mb-8">
                    <h3
                        className="text-3xl font-medium text-[#444] mb-4"
                        data-aos="fade-up"
                    >
                        Codificador y Decodificador
                    </h3>
                    <p
                        className="text-lg text-[#555] mb-6 text-justify"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Un autoencoder consta de dos componentes principales: el codificador y el decodificador. El codificador comprime los datos de entrada en una representación más pequeña y compacta, a menudo denominada espacio latente o cuello de botella. Luego, el decodificador reconstruye los datos originales a partir de esta representación comprimida. Juntos, forman un flujo de trabajo que busca preservar la mayor cantidad de información significativa posible mientras reduce la dimensionalidad de los datos.
                    </p>
                    <h3
                        className="text-3xl font-medium text-[#444] mb-4"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        Capa Latente: El Cuello de Botella
                    </h3>
                    <p
                        className="text-lg text-[#555] mb-6 text-justify"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        La capa latente, a menudo llamada cuello de botella, es una parte crítica de un autoencoder. Esta capa representa la codificación comprimida de los datos de entrada. Obliga al modelo a priorizar y retener solo las características más esenciales, filtrando efectivamente el ruido o la información redundante. El tamaño y el diseño de esta capa influyen en gran medida en el rendimiento y la aplicación del autoencoder.
                    </p>

                    <h3
                        className="text-3xl font-medium text-[#444] mb-4"
                        data-aos="fade-up"
                        data-aos-delay="800"
                    >
                        Capas y Funciones de Activación
                    </h3>
                    <p
                        className="text-lg text-[#555] mb-6 text-justify"
                        data-aos="fade-up"
                        data-aos-delay="1000"
                    >
                        Los autoencoders utilizan comúnmente capas completamente conectadas (densas), aunque se prefieren las capas convolucionales para datos de imágenes. Funciones de activación como ReLU (Rectified Linear Unit) se utilizan a menudo en el codificador para introducir no linealidad, mientras que el decodificador puede utilizar funciones sigmoid o tanh para asegurar que la salida coincida con el rango de los datos de entrada. La elección de capas y activaciones depende del tipo de datos y del problema que se aborda.
                    </p>
                </div>

                {/* Optional Image Section */}
                <div className="bg-white shadow-xl rounded-lg p-8 mb-6">
                    <div className="flex justify-center mb-4">
                        <Image
                            src="/images/AutoEcoders/autoencoder_diagram.avif"
                            alt="Diagrama de Autoencoder"
                            width={900}
                            height={450}
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* Image Source */}
                <div
                    className="text-sm text-center text-[#555] mb-8"
                    data-aos="fade-up"
                    data-aos-delay="1200"
                >
                    <span className="font-semibold text-[#333]">Fuente: </span>
                    <a
                        href="https://www.datacamp.com/tutorial/introduction-to-autoencoders"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                    >
                        Introducción a los Autoencoders: Desde lo Básico hasta Aplicaciones Avanzadas en PyTorch
                    </a>
                </div>

                {/* Bottom Text */}
                <div
                    className="mb-8 text-justify"
                    data-aos="fade-up"
                    data-aos-delay="1400"
                >
                    <p className="text-lg text-[#555]">
                        El diseño modular de los autoencoders permite adaptarlos a diversas tareas, desde la eliminación de ruido en imágenes hasta la extracción de características para conjuntos de datos complejos. Comprender su arquitectura es clave para aprovechar su máximo potencial en aplicaciones del mundo real.
                    </p>
                </div>
            </div>
        </section>
    );
}
