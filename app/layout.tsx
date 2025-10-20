import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/contexts/language-context";
// import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isaac Akonkwa | Fullstack & Mobile Developer",
  description:
    "Fullstack & Mobile Developer passionate about building secure, scalable, and human-centered digital solutions. AI Enthusiast | Cybersecurity Explorer",
  keywords: [
    "Fullstack Developer",
    "Mobile Developer",
    "React",
    "Next.js",
    "React Native",
    "AI",
    "Cybersecurity",
  ],
  authors: [{ name: "Isaac Akonkwa" }],
  creator: "Isaac Akonkwa",
  publisher: "Isaac Akonkwa",
  openGraph: {
    title: "Isaac Akonkwa | Fullstack & Mobile Developer",
    description:
      "Discover my portfolio — Fullstack & Mobile Developer passionate about building scalable, secure, and human-centered digital solutions",
    url: "https://isaacakonkwa.vercel.app",
    siteName: "Isaac Akonkwa Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/jpg" href="/images/Me.jpg" />
        <meta name="theme-color" content="#0f172a" />
        <meta
          property="og:title"
          content="Isaac Akonkwa | Fullstack & Mobile Developer"
        />
        <meta
          property="og:description"
          content="Fullstack & Mobile Developer passionate about secure, scalable, and impactful solutions."
        />
        <meta
          property="og:image"
          content="https://isaacakonkwa.vercel.app/images/Me.jpg"
        />
        <meta property="og:url" content="https://isaacakonkwa.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Isaac Akonkwa | Fullstack & Mobile Developer"
        />
        <meta
          name="twitter:description"
          content="Building secure and scalable web & mobile applications with modern technologies."
        />
        <meta
          name="twitter:image"
          content="https://isaacakonkwa.vercel.app/images/Me.jpg"
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
            {/* <SpeedInsights /> */}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
