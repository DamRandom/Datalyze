"use client";

import NavBar from "@/components/ui/NavBar";
import UploadSection from "@/components/grid/UploadSection";
import HowItWorksSection from "@/components/grid/HowItWorksSection";
import AlgorithmSection from "@/components/grid/AlgorithmSection"; // Importa la nueva sección

export default function HomePage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Section */}
      <main className="pt-0">
        <UploadSection />
        <HowItWorksSection />
        <AlgorithmSection /> {/* Aquí agregamos la nueva sección */}
      </main>
    </div>
  );
}
