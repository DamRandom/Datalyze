"use client";

import NavBar from "@/components/common/NavBar";
import LSTMIntroduction from "./components/LSTMIntroduction";
import Footer from "@/components/common/Footer";

export default function HomePage() {
    const sections = [
        { id: "introduction", label: "Introduction" },
    ];

    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            {/* Navigation Bar */}
            <NavBar sections={sections} />

            {/* Main Content */}
            <main className="pt-0">
                <section id="introduction">
                    <LSTMIntroduction />
                </section>
                <Footer />
            </main>
        </div>
    );
}