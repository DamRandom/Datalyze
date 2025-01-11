import React from "react";


import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import AutoARIMAIntroduction from "./components/AutoARIMAIntroduction";
import AutoARIMAFormulaSection from "./components/ARIMAFormulaSection";
import AutoARIMAHyperparametersSection from "./components/AutoARIMAHyperparametersSection";

const CNNPage: React.FC = () => {
    const sections = [
        { id: "introduction", label: "Introduction" },
        { id: "formula", label: "Formula" },
        { id: "hyperparameters", label: "Hyperparameters" },
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
                    <AutoARIMAFormulaSection />
                </section>
                <section id="hyperparameters">
                <AutoARIMAHyperparametersSection/>
                </section>
                <Footer />
            </main>
        </div>
    );
};

export default CNNPage;
