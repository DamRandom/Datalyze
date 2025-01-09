"use client";

import { useEffect, useState } from "react";
import LSTMIntro from "../LSTM/interfaces/LTSMIntro";
import LSTMHyperparameters from "../LSTM/interfaces/LSTMHyperparameters";
import LSTMTraining from "../LSTM/interfaces/LSTMTraining";
import LSTMResults from "../LSTM/interfaces/LSTMResults";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";

export default function LSTMPages() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Esto asegura que todo el código solo se ejecute en el cliente
  }, []);

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "hyperparameters", label: "Hyperparameters" },
    { id: "training", label: "Training" },
    { id: "results", label: "Results" },
  ];

  // Espera a que se haya montado en el cliente antes de renderizar
  if (!isClient) {
    return null; // O puedes poner un "loading..." mientras se carga en el cliente
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Navigation Bar */}
      <NavBar sections={sections} />

      {/* Main Content */}
      <main className="pt-0">
        <section id="overview">
          <LSTMIntro />
        </section>
        <section id="hyperparameters">
          <LSTMHyperparameters />
        </section>
        <section id="training">
          <LSTMTraining />
        </section>
        <section id="results">
          <LSTMResults />
        </section>
        <Footer />
      </main>
    </div>
  );
}
