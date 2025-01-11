import React from "react";


import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import AutoARIMAIntroduction from "./components/AutoARIMAIntroduction";
import AutoARIMAFormula from "./components/ARIMAFormula";
import AutoARIMAHyperparameters from "./components/AutoARIMAHyperparameters";
import ARIMAModelFitting from "./components/ARIMAModelFitting";

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
                    <AutoARIMAIntroduction/>
                </section>
                <section id="formula">
                    <AutoARIMAFormula/>
                </section>
                <section id="hyperparameters">
                <AutoARIMAHyperparameters/>
                </section>
                <section>
                    <ARIMAModelFitting/>
                </section>
                <Footer />
            </main>
        </div>
    );
};

export default CNNPage;
