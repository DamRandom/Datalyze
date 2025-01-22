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
                    Architecture of an Autoencoder
                </h2>

                {/* Text Content */}
                <div className="mb-8">
                    <h3
                        className="text-3xl font-medium text-[#444] mb-4"
                        data-aos="fade-up"
                    >
                        Encoder and Decoder
                    </h3>
                    <p
                        className="text-lg text-[#555] mb-6 text-justify"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        An autoencoder consists of two main components: the encoder and the decoder. The encoder compresses the input data into a smaller, more compact representation, often referred to as the latent space or bottleneck. The decoder then reconstructs the original data from this compressed representation. Together, they form a pipeline that seeks to preserve as much meaningful information as possible while reducing the dimensionality of the data.
                    </p>
                    <h3
                        className="text-3xl font-medium text-[#444] mb-4"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        Latent Layer: The Bottleneck
                    </h3>
                    <p
                        className="text-lg text-[#555] mb-6 text-justify"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        The latent layer, often called the bottleneck, is a critical part of an autoencoder. This layer represents the compressed encoding of the input data. It forces the model to prioritize and retain only the most essential features, effectively filtering out noise or redundant information. The size and design of this layer heavily influence the performance and application of the autoencoder.
                    </p>

                    <h3
                        className="text-3xl font-medium text-[#444] mb-4"
                        data-aos="fade-up"
                        data-aos-delay="800"
                    >
                        Layers and Activation Functions
                    </h3>
                    <p
                        className="text-lg text-[#555] mb-6 text-justify"
                        data-aos="fade-up"
                        data-aos-delay="1000"
                    >
                        Autoencoders commonly utilize fully connected (dense) layers, though convolutional layers are preferred for image data. Activation functions like ReLU (Rectified Linear Unit) are often used in the encoder to introduce non-linearity, while the decoder may use sigmoid or tanh functions to ensure the output matches the range of the input data. The choice of layers and activations depends on the type of data and the problem being addressed.
                    </p>
                </div>

                {/* Optional Image Section */}
                <div className="bg-white shadow-xl rounded-lg p-8 mb-6">
                    <div className="flex justify-center mb-4">
                        <Image
                            src="/images/AutoEcoders/autoencoder_diagram.avif"
                            alt="Autoencoder Diagram"
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
                    <span className="font-semibold text-[#333]">Source: </span>
                    <a
                        href="https://www.datacamp.com/tutorial/introduction-to-autoencoders"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                    >
                        Introduction to Autoencoders: From The Basics to Advanced Applications in PyTorch
                    </a>
                </div>

                {/* Bottom Text */}
                <div
                    className="mb-8 text-justify"
                    data-aos="fade-up"
                    data-aos-delay="1400"
                >
                    <p className="text-lg text-[#555]">
                        The modular design of autoencoders allows them to be adapted for various tasks, from noise removal in images to feature extraction for complex datasets. Understanding their architecture is key to leveraging their full potential in real-world applications.
                    </p>
                </div>
            </div>
        </section>
    );
}
