import type { Metadata } from "next";
import "../app/globals.css";

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
      <head>
        {/* Aquí agregas el link al favicon */}
        <link
          rel="icon"
          type="image/png"
          href="/images/icons/favicon.png"
        />
      </head>
      <body className="antialiased bg-gray-50 text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
