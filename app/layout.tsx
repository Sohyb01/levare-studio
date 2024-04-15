import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./css/texts.css";
import "./css/backgrounds.css";
import "./css/effects.css";
import "react-toastify/dist/ReactToastify.css";
import { Manrope } from "next/font/google";
import { ToastContainer } from "react-toastify";

const BasementGrotesque = localFont({
  src: "./fonts/BasementGrotesque-Black.otf",
  variable: "--header",
  display: "swap",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// const aileron = localFont({
//   src: [
//     // Normal (Non-Italic)
//     {
//       path: "./fonts/aileron/Aileron-UltraLight.otf",
//       weight: "200",
//       style: "normal",
//     },
//     {
//       path: "./fonts/aileron/Aileron-Thin.otf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "./fonts/aileron/Aileron-Regular.otf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./fonts/aileron/Aileron-SemiBold.otf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "./fonts/aileron/Aileron-Bold.otf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "./fonts/aileron/Aileron-Heavy.otf",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "./fonts/aileron/Aileron-Black.otf",
//       weight: "900",
//       style: "normal",
//     },
//     //
//     // Italic
//     //
//     {
//       path: "./fonts/aileron/Aileron-UltraLightItalic.otf",
//       weight: "200",
//       style: "italic",
//     },
//     {
//       path: "./fonts/aileron/Aileron-ThinItalic.otf",
//       weight: "300",
//       style: "italic",
//     },
//     {
//       path: "./fonts/aileron/Aileron-Italic.otf",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "./fonts/aileron/Aileron-SemiBoldItalic.otf",
//       weight: "600",
//       style: "italic",
//     },
//     {
//       path: "./fonts/aileron/Aileron-BoldItalic.otf",
//       weight: "700",
//       style: "italic",
//     },
//     {
//       path: "./fonts/aileron/Aileron-HeavyItalic.otf",
//       weight: "800",
//       style: "italic",
//     },
//     {
//       path: "./fonts/aileron/Aileron-BlackItalic.otf",
//       weight: "900",
//       style: "italic",
//     },
//   ],
//   display: "swap",
// });

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
      <body className={`${manrope.className} ${BasementGrotesque.variable}`}>
        {/* <SalesNavbar /> */}
        {children}
      </body>
      <ToastContainer />
    </html>
  );
}
