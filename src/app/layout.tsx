import type { Metadata } from "next";

import "./globals.css";
import Image from "next/image";
import { gilroy } from "./fonts/font";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterDecoration from "./components/FooterDecoration";


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
        {/* <Image
          className="absolute top-0 left-0"
          src="/assets/chop/top-left.png"
          alt=""
          width={514}
          height={514}
        />
        <Image
          className="absolute top-0 right-0 -z-10"
          src="/assets/chop/top-right.png"
          alt=""
          width={682}
          height={682}
        />
        <Image
          className="absolute top-[550px] left-0 -z-10"
          src="/assets/chop/middle-left.png"
          alt=""
          width={514}
          height={514}
        /> */}
        {/* BG of professional gardenar SPOTS  */}


        {/* BG spot proffessional services  */}



        <div className={`${gilroy.className}  max-w-[1200px] mx-2.5 sm:mx-auto`}>
          <Navbar />
          {children}
          <Footer />
          <FooterDecoration />
        </div>

      </body>
    </html>
  );
}
