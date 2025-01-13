"use client";

import NavBar from "@/components/common/NavBar";
import LSTMIntroduction from "./modules/LSTMIntroduction";
import LSTMFeaturesSection from "./modules/LSTMFeatures";
import Footer from "@/components/common/Footer";
import LSTMModelParameters from "./modules/LSTMModelParameters";
import LSTMDataPreprocessing from "./modules/LSTMDataPreprocessing";

export default function HomePage() {
    const sections = [
        { id: "introduction", label: "Introduction" },
        { id: "features", label: "Features"}
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
                <section id="features">
                    <LSTMFeaturesSection/>
                </section>
                <section id="parameters">
                    <LSTMModelParameters/>
                </section>
                <section>
                    <LSTMDataPreprocessing/>
                </section>
                <Footer />
            </main>
        </div>
    );
}