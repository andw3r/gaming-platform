import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
// components
import Navbar from "./components/NavBar";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={clsx(
          poppins.className,
          "relative text-white text-base font-normal overflow-x-hidden bg-gradient-to-b from-black to-yellow-950 backdrop-blur-[14px]"
        )}
      >
        <Navbar />
        <main>{children}</main>
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
