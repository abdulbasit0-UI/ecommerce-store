import type { Metadata } from "next";
import { Monoton, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ModalProvider from "@/providers/provider";
import ToastProvider from "@/providers/toastProvider";

export const font = Monoton({
  subsets: ["latin"],
  weight: "400"
});

export const josefin_Sans = Josefin_Sans({
  subsets: ['latin']
})

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
      <body className={josefin_Sans.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
