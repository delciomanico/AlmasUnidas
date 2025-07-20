// components/AboutUs.tsx
'use client';
import { motion } from 'framer-motion';
import { FiUsers, FiHeart, FiAward, FiMapPin } from 'react-icons/fi';
import Image from 'next/image';

interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export default function AboutUs() {
  const values: ValueCard[] = [
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Inclusão",
      description: "Atendemos todas as comunidades sem distinção"
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Solidariedade",
      description: "Acreditamos no poder da ajuda mútua"
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Transparência",
      description: "Prestamos contas de todas as doações"
    },
    {
      icon: <FiMapPin className="w-8 h-8" />,
      title: "Impacto Local",
      description: "Trabalhamos diretamente nas comunidades"
    }
  ];

  const team: TeamMember[] = [
    {
      name: "Ana Silva",
      role: "Fundadora",
      image: "/images/team.png"
    },
    {
      name: "Carlos Mendes",
      role: "Coordenador",
      image: "/images/team.png"
    },
    {
      name: "Mariana Oliveira",
      role: "Voluntária Sênior",
      image: "/images/team.png"
    },
    {
      name: "João Santos",
      role: "Logística",
      image: "/images/team.png"
    }
  ];

  return (
    <section className="py-20 bg-white" id='sobre-nos'>
      <div className="container mx-auto px-6">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#3A3226] mb-4">
            Nossa História e Missão
          </h2>
          <div className="w-20 h-1 bg-[#a80e0e] mx-auto mb-6"></div>
          <p className="text-xl text-[#3A3226]/80 max-w-3xl mx-auto">
            Desde 2015 transformando vidas através da solidariedade e ação comunitária
          </p>
        </motion.div>

        {/* Nossa História */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <Image 
              src="/images/about-us.jpg" 
              alt="Equipe Almass Unidas em ação" 
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-[#3A3226] mb-6">
              Quem Somos
            </h3>
            <p className="text-[#3A3226]/80 mb-4">
              A Almass Unidas nasceu em 2015 a partir da iniciativa de moradores do bairro que perceberam a necessidade 
              de ações concretas contra a fome e a desigualdade social em nossa região.
            </p>
            <p className="text-[#3A3226]/80 mb-4">
              Começamos como um pequeno grupo de voluntários distribuindo cestas básicas e hoje somos uma rede de mais 
              de 200 pessoas dedicadas a transformar realidades.
            </p>
            <p className="text-[#3A3226]/80">
              Nossa atuação se expandiu para projetos de capacitação, apoio educacional e desenvolvimento comunitário, 
              sempre mantendo o foco no combate à fome e na promoção da dignidade humana.
            </p>
          </motion.div>
        </div>

        {/* Nossos Valores */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-[#3A3226] mb-12 text-center">
            Nossos Valores
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#F9F5F0] rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-[#a80e0e] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-[#3A3226] mb-2">
                  {value.title}
                </h4>
                <p className="text-[#3A3226]/80">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nossa Equipe */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-[#3A3226] mb-12 text-center">
            Conheça Nossa Equipe
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative h-64 w-full mb-4 rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#3A3226]">
                  {member.name}
                </h4>
                <p className="text-[#a80e0e]">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-[#3A3226] mb-6">
            Quer fazer parte dessa história?
          </h3>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#a80e0e] hover:bg-[#8c0c0c] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
          >
            Seja um Voluntário
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}