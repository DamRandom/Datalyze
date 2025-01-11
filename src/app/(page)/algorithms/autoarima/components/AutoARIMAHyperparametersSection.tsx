"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AutoARIMAHyperparametersSection() {
    useEffect(() => {
        AOS.init({
            duration: 800, // Tiempo de duración de la animación
            delay: 200,    // Retraso inicial
            once: true,
        });
    }, []);

    return (
        <section className="bg-[#f4f4f4] py-16 px-4 relative">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl font-semibold text-center text-[#333] mb-10" data-aos="fade-up">
                    AutoARIMA Hyperparameters
                </h2>

                {/* Description Section */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-2xl font-medium text-[#444] mb-4">Description of Hyperparameters</h3>
                    <p className="text-lg text-[#555] mb-6 text-justify">
                        The following hyperparameters play a crucial role in tuning the AutoARIMA model:
                    </p>

                    {/* Parameter: seasonal=True */}
                    <div className="mb-4">
                        <h4 className="text-xl font-semibold text-[#444]">seasonal=True</h4>
                        <p className="text-lg text-[#555] text-justify">
                            This parameter is essential for capturing seasonal patterns in the data. When set to <strong>True</strong>, the model allows for seasonal effects to be considered, enabling it to handle data with repeating cycles or periodic fluctuations over time.
                        </p>
                    </div>

                    {/* Parameter: m=2 */}
                    <div className="mb-4">
                        <h4 className="text-xl font-semibold text-[#444]">m=2</h4>
                        <p className="text-lg text-[#555] text-justify">
                            The parameter <strong>m=2</strong> determines the expected seasonal period. In this case, it specifies a seasonal period of two time points, typically indicating biannual data patterns. This setting is key to aligning the model with the frequency of seasonal variations.
                        </p>
                    </div>

                    {/* Parameter: max_order=5 */}
                    <div className="mb-4">
                        <h4 className="text-xl font-semibold text-[#444]">max_order=5</h4>
                        <p className="text-lg text-[#555] text-justify">
                            This parameter restricts the maximum complexity of the model by limiting the order of the AR and MA components to 5. A smaller value helps prevent overfitting by ensuring the model remains simple and interpretable.
                        </p>
                    </div>

                    {/* Parameter: error_action="ignore" */}
                    <div className="mb-4">
                        <h4 className="text-xl font-semibold text-[#444]">error_action=&quot;ignore&quot;</h4>
                        <p className="text-lg text-[#555] text-justify">
                            The <strong>error_action=&quot;ignore&quot;</strong> setting instructs the model to continue fitting even if errors are encountered during the optimization process. This allows the model to bypass minor issues and proceed with fitting, reducing interruptions.
                        </p>
                    </div>

                    {/* Parameter: suppress_warnings=True */}
                    <div className="mb-4">
                        <h4 className="text-xl font-semibold text-[#444]">suppress_warnings=True</h4>
                        <p className="text-lg text-[#555] text-justify">
                            By setting <strong>suppress_warnings=True</strong>, the model suppresses non-critical warnings that could otherwise distract the user. This ensures that only significant issues are flagged during model fitting.
                        </p>
                    </div>
                </div>

                {/* Notes Section - Floating on the right, adjusted position */}
                <div className="absolute top-1/4 right-0 w-48 p-4 bg-[#e4e4e4] border-l-4 border-[#636363] shadow-lg mt-10">
                    <h3 className="text-xl font-medium text-[#444] mb-3">Notes</h3>
                    <p className="text-md text-[#555] text-justify">
                        These hyperparameters are essential for fine-tuning the model. Properly configuring <strong>seasonal=True</strong> and <strong>m=2</strong> is crucial for capturing seasonal patterns accurately in cyclic data.
                    </p>
                </div>
            </div>
        </section>
    );
}
