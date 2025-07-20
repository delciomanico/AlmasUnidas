// components/Layout.tsx
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F5F0]">
      <Head>
        <title>Almass Unidas | Doe Alimentos, Transforme Vidas</title>
        <meta name="description" content="Juntos contra a fome. Sua doação alimenta esperanças." />
      </Head>
      
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}