import React from "react";


import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import AutoencodersInfo from "./modules/AutoencodersInfo";
import AutoencodersArchitecture from "./modules/AutoencodersArchitecture";
import AutoencodersTypes from "./modules/AutoencodersTypes";
import TrainingProcess from "./modules/TrainingProcess";
import ApplicationsOfAutoencoders from "./modules/ApplicationsOfAutoencoders";


const CNNPage: React.FC = () => {
    const sections = [
        { id: "introduction", label: "Introduction" },
        { id: "architecture", label: "Architecture"}
    ];

    return (
        <div className="bg-[#f8f9fa] text-[#333] min-h-screen">
            {/* Header */}
            <NavBar sections={sections} />

            {/* Main Content */}
            <main className="pt-16">
                <section id="introduction">
                    <AutoencodersInfo />
                </section>
                <section id='architecture'>
                    <AutoencodersArchitecture />
                </section>
                <section>
                    <AutoencodersTypes />
                </section>
                <section>
                    <TrainingProcess />
                </section>
                <section>
                    <ApplicationsOfAutoencoders />
                </section>
                <Footer />
            </main>
        </div>
    );
};

export default CNNPage;
