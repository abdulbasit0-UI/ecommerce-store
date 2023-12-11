import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ModalProvider from "@/providers/provider";
import ToastProvider from "@/providers/toastProvider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Umartech - Your one stop computer shop",
  description:
    "Umartech is a computer store based in Durban, South Africa, specialized in computers and laptops for more than 20 years",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
