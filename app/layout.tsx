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

const Onest = localFont({
  src: [
    {
      path: "./fonts/Onest/OnestThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Onest/OnestLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Onest/OnestRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Onest/OnestMedium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/Onest/OnestBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Onest/OnestExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Onest/OnestBlack.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--header",
});
const Geist = localFont({
  src: [
    {
      path: "./fonts/Geist/Geist-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Geist/Geist-UltraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Geist/Geist-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Geist/Geist-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Geist/Geist-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/Geist/Geist-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Geist/Geist-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Geist/Geist-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Geist/Geist-UltraBlack.otf",
      weight: "1000",
      style: "normal",
    },
  ],
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
      <body className={`${Geist.className} ${Onest.variable} grid-bg`}>
        {/* <SalesNavbar /> */}
        {children}
        <Footer />
        <Analytics />
        <ToastContainer />
      </body>
    </html>
  );
}
