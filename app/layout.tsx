import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Fraunces } from "next/font/google";

const montserrat = Montserrat({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});
const fraunces = Fraunces({
  display: "swap",
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Product Card",
  description: "Frontend Mentor Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
