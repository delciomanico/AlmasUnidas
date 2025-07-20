// components/DonationSteps.tsx
'use client';
import { motion } from "framer-motion";
import { FiDollarSign, FiCreditCard, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { ReactElement } from 'react';

interface Step {
  icon: ReactElement;
  title: string;
  description: string;
  options: string[];
}

export default function DonationSteps() {
  const steps: Step[] = [
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: "Escolha o Valor",
      description: "Qualquer valor faz diferença. Doe uma vez ou mensalmente.",
      options: ["R$ 20", "R$ 50", "R$ 100", "Outro valor"]
    },
    {
      icon: <FiCreditCard className="w-8 h-8" />,
      title: "Forma de Pagamento",
      description: "PIX, cartão de crédito ou transferência bancária.",
      options: ["PIX (instantâneo)", "Cartão de Crédito", "Transferência"]
    },
    {
      icon: <FiMapPin className="w-8 h-8" />,
      title: "Pontos de Coleta",
      description: "Também aceitamos doações físicas em nossos postos.",
      options: ["Ver mapa completo"]
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: "Confirmação",
      description: "Enviaremos um comprovante e relatório de impacto.",
      options: ["Receber relatórios por email"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-[#3A3226] mb-4"
        >
          Como Doar
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-center text-[#3A3226]/80 mb-16 max-w-2xl mx-auto"
        >
          Em poucos passos, sua doação estará transformando vidas.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#F9F5F0] rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-[#a80e0e] mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-[#3A3226] mb-3">{step.title}</h3>
              <p className="text-[#3A3226]/80 mb-5">{step.description}</p>
              
              <div className="space-y-3">
                {step.options.map((option, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left px-4 py-2 bg-white rounded-lg text-[#3A3226] hover:text-[#a80e0e] transition-colors"
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#a80e0e] hover:bg-[#4A7B5E] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
          >
            Iniciar Doação
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}