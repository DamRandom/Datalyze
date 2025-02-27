import React from "react";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AutoencodersInfo from "./modules/AutoencodersInfo";
import AutoencodersArchitecture from "./modules/AutoencodersArchitecture";
import AutoencodersTypes from "./modules/AutoencodersTypes";
import TrainingProcess from "./modules/TrainingProcess";
import ApplicationsOfAutoencoders from "./modules/ApplicationsOfAutoencoders";
import PracticalImplementation from "./modules/PracticalImplementation";
import ChallengesAndConsiderations from "./modules/ChallengesAndConsiderations";

const CNNPage: React.FC = () => {
    const sections = [
        { id: "introduction", label: "Introducción" },
        { id: "architecture", label: "Arquitectura" },
        { id: "types", label: "Tipos" },
        { id: "trainingProcess", label: "Proceso de Entrenamiento" },
        { id: "applications", label: "Aplicaciones" },
        { id: "practicalImplementation", label: "Implementación Práctica" },
        { id: "challengesAndConsiderations", label: "Desafíos" }
    ];

    return (
        <div className="bg-[#f8f9fa] text-[#333] min-h-screen">
            {/* Header */}
            <NavBar sections={sections} />

            {/* Main Content */}
            <main className="pt-16">
                <section id="introduction">
                    <AutoencodersInfo />
                </section>
                <section id='architecture'>
                    <AutoencodersArchitecture />
                </section>
                <section id='types'>
                    <AutoencodersTypes />
                </section>
                <section id='trainingProcess'>
                    <TrainingProcess />
                </section>
                <section id='applications'>
                    <ApplicationsOfAutoencoders />
                </section>
                <section id='practicalImplementation'>
                    <PracticalImplementation />
                </section>
                <section id='challengesAndConsiderations'>
                    <ChallengesAndConsiderations />
                </section>
                <Footer />
            </main>
        </div>
    );
};

export default CNNPage;
