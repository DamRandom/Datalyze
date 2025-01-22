"use client";

import NavBar from "@/components/common/NavBar";
import LSTMIntroduction from "./modules/LSTMIntroduction";
import LSTMFeaturesSection from "./modules/LSTMFeatures";
import Footer from "@/components/common/Footer";
import LSTMModelParameters from "./modules/LSTMModelParameters";
import LSTMDataPreprocessing from "./modules/LSTMDataPreprocessing";
import LSTMTrainingProcess from "./modules/LSTMTrainingProcess";
import LSTMPredictions from "./modules/LSTMPredictions";
import ModelPerformanceMetrics from "./modules/TSTMModelPerformanceMetrics";
import PracticalApplicationsOfLSTMs from "./modules/PracticalApplicationsOfLSTMs";

export default function HomePage() {
    const sections = [
        { id: "introduction", label: "Introduction" },
        { id: "features", label: "Features"},
        { id: "parameters", label: "Parameters"},
        { id: "trainingProcess", label: "Training"},
        { id: "performanceMetrics", label: "Performance"},
        { id: "practicalApplications", label: "Practical Applications"}
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
                <section id='preprocessing'>
                    <LSTMDataPreprocessing/>
                </section>
                <section id='trainingProcess'>
                    <LSTMTrainingProcess/>
                </section>
                <section id='predictions'>
                    <LSTMPredictions/>
                </section>
                <section id='performanceMetrics'>
                    <ModelPerformanceMetrics/>
                </section>
                <section id='practicalApplications'>
                    <PracticalApplicationsOfLSTMs/>
                </section>
                <Footer />
            </main>
        </div>
    );
}