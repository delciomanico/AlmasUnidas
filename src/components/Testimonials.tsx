// components/Testimonials.tsx
'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import { FiInstagram, FiFacebook, FiTwitter, FiMail, FiPhone } from "react-icons/fi";

interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      quote: "Graças às doações, meus filhos têm comida na mesa todos os dias. Que Deus abençoe todos que ajudam.",
      author: "Maria, mãe de 3 filhos",
      location: "Comunidade do Jardim São Luiz"
    },
    {
      quote: "Participar como voluntário mudou minha vida. Ver o sorriso das pessoas quando recebem os alimentos não tem preço.",
      author: "Carlos, voluntário há 2 anos",
      location: "São Paulo - SP"
    },
    {
      quote: "Como empresa, nos orgulhamos de apoiar o Almass Unidas. Sabemos que cada doação faz diferença real.",
      author: "Ana, parceira institucional",
      location: "Empresa Solidária Ltda"
    }
  ];

  return (
    <section className="py-20 bg-[#F5F0E8]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-[#3A3226] mb-16"
        >
          Vozes que Inspiram
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ 
                opacity: activeIndex === index ? 1 : 0,
                x: activeIndex === index ? 0 : (index % 2 === 0 ? 50 : -50),
                zIndex: activeIndex === index ? 1 : 0
              }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 ${activeIndex === index ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="bg-white p-8 rounded-xl shadow-md">
                <blockquote className="text-xl italic text-[#3A3226] mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-right">
                  <p className="font-semibold text-[#a80e0e]">{testimonial.author}</p>
                  <p className="text-sm text-[#3A3226]/80">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="flex justify-center mt-96 pt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-[#a80e0e]' : 'bg-[#3A3226]/30'}`}
                aria-label={`Mostrar depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}