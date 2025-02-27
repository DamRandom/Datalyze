import React from "react";

import CNNIntroduction from "./modules/CNNIntroduction";
import CNNHowWorks from "./modules/CNNHowWorks";
import CNNTraining from "./modules/CNNTraining";
import CNNEvaluation from "./modules/CNNEvaluation";
import CNNArchitectures from "./modules/CNNArchitectures";
import CNNApplications from "./modules/CNNApplications";
import CNNAdvantagesDisadvantages from "./modules/CNNAdvantagesDisadvantages";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const CNNPage: React.FC = () => {
  const sections = [
    { id: "introduction", label: "Introducción" },
    { id: "how-works", label: "Cómo Funciona" },
    { id: "training", label: "Entrenamiento" },
    { id: "evaluation", label: "Evaluación" },
    { id: "architectures", label: "Arquitecturas" },
    { id: "applications", label: "Aplicaciones" },
    { id: "advantages-disadvantages", label: "Ventajas y Desventajas" },
  ];

  return (
    <div className="bg-[#f8f9fa] text-[#333] min-h-screen">
      {/* Header */}
      <NavBar sections={sections} />

      {/* Main Content */}
      <main className="pt-16"> {/* Adjustment to avoid content being covered by the header */}
        <section id="introduction">
          <CNNIntroduction />
        </section>
        <section id="how-works">
          <CNNHowWorks />
        </section>
        <section id="training">
          <CNNTraining />
        </section>
        <section id="evaluation">
          <CNNEvaluation />
        </section>
        <section id="architectures">
          <CNNArchitectures />
        </section>
        <section id="applications">
          <CNNApplications />
        </section>
        <section id="advantages-disadvantages">
          <CNNAdvantagesDisadvantages />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default CNNPage;
