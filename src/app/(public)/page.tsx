// pages/index.js
import Head from 'next/head';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import DonationSteps from '@/components/DonationSteps';
import AssociationPostsCarousel from '@/components/AssociationPostCarousel';
import ContactForm from '@/components/ContactForm';
import AboutUs from '@/components/AboutUs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Almass Unidas | Doe Alimentos, Transforme Vidas</title>
        <meta name="description" content="Juntos contra a fome. Sua doação alimenta esperanças." />
      </Head>
      <Hero />
      <AboutUs/>
      <AssociationPostsCarousel/>
     <ContactForm/>
    </>
  );
}