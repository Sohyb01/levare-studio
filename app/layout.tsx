import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";

const oldSchoolGrotesk = localFont({
  src: [
    {
      path: "./fonts/OldschoolGrotesk-NormalLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/OldschoolGrotesk-NormalRegular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-oldschool-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Levare | Branding & Web Design",
  description: "Elevate Your Brand & Increase Your Business Value",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oldSchoolGrotesk.className} antialiased gradient-bg`}>
        <ActiveSectionContextProvider>
          {/* Animated header */}
          {/* <MotionHeader/> */}
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
