import React from "react";


import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import AutoARIMAIntroduction from "./components/AutoARIMAIntroduction";
import AutoARIMAFormula from "./components/ARIMAFormula";
import AutoARIMAHyperparameters from "./components/AutoARIMAHyperparameters";
import ARIMAModelFitting from "./components/ARIMAModelFitting";
import ARIMAMetrics from "./components/ARIMAMetrics";
import ModelPredictionOutput from "./components/ModelPredictionOutput";
import AdditionalConsiderations from "./components/AdditionalConsiderations";

const CNNPage: React.FC = () => {
    const sections = [
        { id: "introduction", label: "Introduction" },
        { id: "hyperparameters", label: "Hyperparameters" },
        { id: "modelfitting", label: "Model Fitting" },
        { id: "metrics", label: "Metrics" },
        { id: "prediction", label: "ModelPredictionOutput" },
        { id: "considerations", label: "Additional Considerations" },
    ];

    return (
        <div className="bg-[#f8f9fa] text-[#333] min-h-screen">
            {/* Header */}
            <NavBar sections={sections} />

            {/* Main Content */}
            <main className="pt-16">
                <section id="introduction">
                    <AutoARIMAIntroduction />
                </section>
                <section id="formula">
                    <AutoARIMAFormula />
                </section>
                <section id="hyperparameters">
                    <AutoARIMAHyperparameters />
                </section>
                <section id="modelfitting">
                    <ARIMAModelFitting />
                </section>
                <section id="metrics">
                    <ARIMAMetrics />
                </section>
                <section id="prediction">
                    <ModelPredictionOutput />
                </section>
                <section id="considerations">
                    <AdditionalConsiderations />
                </section>
                <Footer />
            </main>
        </div>
    );
};

export default CNNPage;
