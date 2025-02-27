"use client";

import NavBar from "@/components/NavBar";
import UploadSection from "@/app/(page)/home/UploadSection";
import HowItWorksSection from "@/app/(page)/home/HowItWorksSection";
import AlgorithmSection from "@/app/(page)/home/AlgorithmSection";
import ExampleResultSection from "@/app/(page)/home/ExampleResultSection";
import ContactSection from "@/app/(page)/home/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  const sections = [
    { id: "upload", label: "Subir" }, 
    { id: "how-it-works", label: "Cómo Funciona" },
    { id: "algorithms", label: "Algoritmos" }, 
    { id: "examples", label: "Ejemplos" }, 
    { id: "contact", label: "Contacto" }, 
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Navigation Bar */}
      <NavBar sections={sections} />

      {/* Main Content */}
      <main className="pt-0">
        <section id="upload">
          <UploadSection />
        </section>
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <section id="algorithms">
          <AlgorithmSection />
        </section>
        <section id="examples">
          <ExampleResultSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      </main>
    </div>
  );
}
