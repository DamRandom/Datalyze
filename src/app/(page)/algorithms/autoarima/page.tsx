import React from "react";

import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import AutoARIMAIntroduction from "./modules/AutoARIMAIntroduction";
import AutoARIMAFormula from "./modules/ARIMAFormula";
import AutoARIMAHyperparameters from "./modules/AutoARIMAHyperparameters";
import ARIMAModelFitting from "./modules/ARIMAModelFitting";
import ARIMAMetrics from "./modules/ARIMAMetrics";
import ModelPredictionOutput from "./modules/ModelPredictionOutput";
import AdditionalConsiderations from "./modules/AdditionalConsiderations";

const CNNPage: React.FC = () => {
    const sections = [
        { id: "introduction", label: "Introducción" },
        { id: "hyperparameters", label: "Hiperparámetros" },
        { id: "modelfitting", label: "Ajuste del Modelo" },
        { id: "metrics", label: "Métricas" },
        { id: "prediction", label: "Salida de Predicción del Modelo" },
        { id: "considerations", label: "Consideraciones Adicionales" },
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
