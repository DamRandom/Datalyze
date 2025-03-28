import type { Metadata } from "next";
import "../../../globals.css";

export const metadata: Metadata = {
  title: "Datalyze - Empowering Predictive Insights",
  description:
    "Datalyze is a cutting-edge platform leveraging AI and statistical tools to optimize faculty composition and educational strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
