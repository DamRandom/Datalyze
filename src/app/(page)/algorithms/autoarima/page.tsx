import React from "react";


import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import AutoARIMAIntroduction from "./components/AutoARIMAIntroduction";

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
          <AutoARIMAIntroduction />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default CNNPage;
