import type { Metadata } from "next";
import { Inter } from "next/font/google";
import  SmoothScroll  from "@/lib/SmoothScroll"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});





export const metadata: Metadata = {
  title: "Muhammad Indrawan",
  description: "portfolio",
  icons: {
    icon: "/smartWeb.svg",
  },
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no">
      <body
        className={`${inter.className} antialiased`}
      >
      <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
