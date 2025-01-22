import React from "react";


import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import AutoencodersInfo from "./modules/AutoencodersInfo";


const CNNPage: React.FC = () => {
    const sections = [
        { id: "introduction", label: "Introduction" },
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
                <Footer />
            </main>
        </div>
    );
};

export default CNNPage;
