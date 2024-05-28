import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./css/texts.css";
import "./css/backgrounds.css";
import "./css/effects.css";
import "react-toastify/dist/ReactToastify.css";
import { Manrope } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components-custom/Footer";

const OrpheusPro = localFont({
  src: "./fonts/OrpheusPro.ttf",
  variable: "--header",
  display: "swap",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Levare Studio",
  description: "Branding & Web Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${OrpheusPro.variable}`}>
        {/* <SalesNavbar /> */}
        {children}
        <Footer />
        <Analytics />
        <ToastContainer />
      </body>
    </html>
  );
}
