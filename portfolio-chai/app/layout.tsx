import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import AnimatedBackground from "../components/AnimatedBackground";
import CustomCursor from "../components/CustomCursor";
import ScrollAnimations from "../components/ScrollAnimations";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chaitanya Ambekar | Software Engineer & Backend Developer",
  description: "Passionate Software Engineer specializing in Java, Spring Boot, AWS cloud deployment, and microservices architecture. 1+ years of experience building scalable, secure applications with modern technologies.",
  keywords: [
    "Software Engineer", 
    "Backend Developer", 
    "Java Developer", 
    "Spring Boot", 
    "AWS", 
    "Microservices", 
    "DevOps", 
    "REST APIs", 
    "Cloud Computing", 
    "Full Stack Developer",
    "Portfolio",
    "Chaitanya Ambekar"
  ],
  authors: [{ name: "Chaitanya Ambekar", url: "https://chaitanya-ambekar.dev" }],
  creator: "Chaitanya Ambekar",
  publisher: "Chaitanya Ambekar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chaitanya-ambekar.dev",
    title: "Chaitanya Ambekar | Software Engineer & Backend Developer",
    description: "Passionate Software Engineer specializing in Java, Spring Boot, AWS cloud deployment, and microservices architecture.",
    siteName: "Chaitanya Ambekar Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chaitanya Ambekar - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaitanya Ambekar | Software Engineer & Backend Developer",
    description: "Passionate Software Engineer specializing in Java, Spring Boot, AWS cloud deployment, and microservices architecture.",
    images: ["/og-image.jpg"],
    creator: "@chaitanya_ambekar",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#00D9FF",
  colorScheme: "dark light",
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} cursor-none`}>
        <CustomCursor />
        <ScrollAnimations />
        <AnimatedBackground />
        <Navbar />
        {children}
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
