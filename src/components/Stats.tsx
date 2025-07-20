// components/Stats.tsx
'use client';
import { motion } from "framer-motion";
import CountUp from 'react-countup';

interface StatItem {
  value: number;
  label: string;
}

export default function Stats() {
  const stats: StatItem[] = [
    { value: 500, label: "Famílias atendidas mensalmente" },
    { value: 12000, label: "Kg de alimentos distribuídos" },
    { value: 200, label: "Voluntários ativos" },
    { value: 100, label: "Parceiros solidários" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-[#3A3226] mb-16"
        >
          Nosso Impacto em Números
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#F9F5F0] p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-5xl font-bold text-[#a80e0e] mb-4">
                <CountUp end={stat.value} duration={3} />+
              </div>
              <p className="text-lg text-[#3A3226]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}