import type { Metadata } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import { AmbientBackground } from "@/components/effects/ambient-background";
import { IntroPreloader } from "@/components/effects/intro-preloader";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranav | IT Student Portfolio",
  description:
    "Professional portfolio for an IT student featuring projects, skills, experience, and an MDX blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <IntroPreloader />
        <ScrollProgress />
        <AmbientBackground />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
