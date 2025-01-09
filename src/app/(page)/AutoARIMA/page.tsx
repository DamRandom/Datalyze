"use client";

import React from "react";

import AA_Introduction from "../AutoARIMA/interfaces/AA_Introduction";
import AA_HowItWorks from "../AutoARIMA/interfaces/AA_HowItWorks";
import AA_Hyperparameters from "../AutoARIMA/interfaces/AA_Hyperparameters";
import AA_Predictions from "../AutoARIMA/interfaces/AA_Predictions";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";

const AutoARIMA = () => {
  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "how-it-works", label: "How It Works" },
    { id: "hyperparameters", label: "Hyperparameters" },
    { id: "predictions", label: "Predictions" },
  ];

  return (
    <section className="min-h-screen bg-[#f9fafb]">
        {/* Navigation Bar */}
        <NavBar sections={sections} />

        {/* Main Content */}
        <section id="introduction">
          <AA_Introduction />
        </section>
        <section id="how-it-works">
          <AA_HowItWorks />
        </section>
        <section id="hyperparameters">
          <AA_Hyperparameters />
        </section>
        <section id="predictions">
          <AA_Predictions />
        </section>

      {/* Footer spans full width */}
      <Footer />
    </section>
  );
};

export default AutoARIMA;
