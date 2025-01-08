import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";

// NOTE: Confirm if Geist and Geist Mono align with the visual theme of ForecEdu (professional, analytical). Consider alternatives if needed.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ForecEdu - Empowering Predictive Insights", // NOTE: Adjust the title to reflect the purpose of the site clearly.
  description:
    "ForecEdu is a cutting-edge platform leveraging AI and statistical tools to optimize faculty composition and educational strategies.", // NOTE: Revise the description to ensure it captures the essence of the platform. Keep it concise yet informative.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`} // NOTE: Adjust background and text colors if needed to better align with the design guidelines.
      >
        {children}
      </body>
    </html>
  );
}
