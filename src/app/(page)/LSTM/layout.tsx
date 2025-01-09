import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "../../globals.css";

// Configuración de fuentes más adecuadas para un diseño profesional y analítico
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ForecEdu - Empowering Predictive Insights",
  description:
    "ForecEdu is a cutting-edge platform leveraging AI and statistical tools to optimize faculty composition and educational strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Optionally add any additional SEO meta tags here */}
      </head>
      <body
        className={`${inter.variable} ${sourceCodePro.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
