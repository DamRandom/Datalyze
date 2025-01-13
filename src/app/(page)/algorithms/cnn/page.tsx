import React from "react";

import CNNIntroduction from "./modules/CNNIntroduction";
import CNNHowWorks from "./modules/CNNHowWorks";
import CNNTraining from "./modules/CNNTraining";
import CNNEvaluation from "./modules/CNNEvaluation";
import CNNArchitectures from "./modules/CNNArchitectures";
import CNNApplications from "./modules/CNNApplications";
import CNNAdvantagesDisadvantages from "./modules/CNNAdvantagesDisadvantages";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

const CNNPage: React.FC = () => {
  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "how-works", label: "How It Works" },
    { id: "training", label: "Training" },
    { id: "evaluation", label: "Evaluation" },
    { id: "architectures", label: "Architectures" },
    { id: "applications", label: "Applications" },
    { id: "advantages-disadvantages", label: "Advantages & Disadvantages" },
  ];

  return (
    <div className="bg-[#f8f9fa] text-[#333] min-h-screen">
      {/* Header */}
      <NavBar sections={sections} />

      {/* Main Content */}
      <main className="pt-16"> {/* Ajuste para evitar que el contenido quede tapado por el header */}
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
