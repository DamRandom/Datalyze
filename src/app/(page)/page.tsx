"use client";

import NavBar from "@/components/common/NavBar";
import UploadSection from "@/app/(page)/home/UploadSection";
import HowItWorksSection from "@/app/(page)/home/HowItWorksSection";
import AlgorithmSection from "@/app/(page)/home/AlgorithmSection";
import ExampleResultSection from "@/app/(page)/home/ExampleResultSection";
import ContactSection from "@/app/(page)/home/ContactSection";
import Footer from "@/components/common/Footer";

export default function HomePage() {
  const sections = [
    { id: "upload", label: "Upload" },
    { id: "how-it-works", label: "How It Works" },
    { id: "algorithms", label: "Algorithms" },
    { id: "examples", label: "Examples" },
    { id: "contact", label: "Contact" },
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