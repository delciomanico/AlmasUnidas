// pages/_app.tsx
import type { AppProps } from 'next/app';
import { LazyMotion, domAnimation } from "framer-motion";
import Layout from "@/components/Layout";
import "../globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LazyMotion>
  );
}

export default MyApp;