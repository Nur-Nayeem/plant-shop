import type { Metadata } from "next";

import "./globals.css";
import Image from "next/image";
import { gilroy } from "./fonts/font";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterDecoration from "./components/FooterDecoration";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Plant Shop",
  description: "The best plant shop in the town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <div className={`${gilroy.className}  container px-2.5 sm:px-0 mx-auto`}>
          <Navbar />
          {children}
          <Footer />
          <FooterDecoration />
        </div>

      </body>
    </html>
  );
}
