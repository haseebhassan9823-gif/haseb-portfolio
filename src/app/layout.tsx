import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/ui/Navbar";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Haseeb Hassan // Software Developer & Computer Science Student (UOS)",
  description:
    "Ultra-high-end 3D interactive portfolio of Muhammad Haseeb Hassan, Computer Science student at University of Sargodha. Specializing in Advanced Python Development, Desktop Voice Agent Architecture, Java, SQL, Prompt Engineering R&D, and IELTS Instruction (7.0 Bands).",
  keywords: [
    "Muhammad Haseeb Hassan",
    "University of Sargodha",
    "Sargodha Pakistan",
    "Python Developer",
    "Desktop Voice Assistant",
    "Prompt Engineering",
    "Hospital Management System",
    "PUBG Esports Tournament",
    "IELTS 7.0 Bands",
    "Java",
    "SQL",
  ],
  authors: [{ name: "Muhammad Haseeb Hassan" }],
  openGraph: {
    title: "Muhammad Haseeb Hassan // Software Developer & Creative Technologist",
    description: "3D interactive portfolio, Python voice agent, software systems, and AI R&D.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${plusJakarta.variable} dark`}>
      <body className="bg-[#050507] text-[#f8fafc] font-sans antialiased selection:bg-cyber-cyan/30 selection:text-cyber-cyan">
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          <main className="relative min-h-screen flex flex-col">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
