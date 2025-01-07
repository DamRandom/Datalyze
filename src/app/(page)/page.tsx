"use client";

import NavBar from "@/components/ui/NavBar";
import UploadSection from "@/interfaces/UploadSection";
import HowItWorksSection from "@/interfaces/HowItWorksSection";
import AlgorithmSection from "@/interfaces/AlgorithmSection";

export default function HomePage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <main className="pt-0">
        <UploadSection />
        <HowItWorksSection />
        <AlgorithmSection />
      </main>
    </div>
  );
}
