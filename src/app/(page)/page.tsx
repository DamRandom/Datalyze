"use client";

import NavBar from "@/components/ui/NavBar";
import UploadSection from "@/components/grid/UploadSection";

export default function HomePage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Section */}
      <main className="pt-0">
        <UploadSection />
      </main>
    </div>
  );
}
