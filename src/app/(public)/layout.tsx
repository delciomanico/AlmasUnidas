'use client'
import { LazyMotion, domAnimation } from "framer-motion";
import Layout from "@/components/Layout";

function MyApp({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <LazyMotion features={domAnimation}>
      <Layout>
        {children}
      </Layout>
    </LazyMotion>
  );
}
export default MyApp;
