import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { domAnimation, LazyMotion } from "framer-motion";
import Layout from "@/components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Associacao Almas Unidas",
  description: "Uma organização solidaria não governamental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html>
  <body>
  
    <LazyMotion features={domAnimation}>
      <Layout>

        {children}
      </Layout>
      </LazyMotion>
  </body>
</html>
    );
}
