// components/Footer.tsx
'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { FiInstagram, FiFacebook, FiTwitter, FiMail, FiPhone } from "react-icons/fi";
import { ReactElement } from 'react';

interface FooterLink {
  icon?: ReactElement;
  text: string;
}

interface FooterSection {
  title: string;
  links: (string | FooterLink)[];
}

export default function Footer() {
  const sections: FooterSection[] = [
    {
      title: "Links Rápidos",
      links: ["Sobre Nós", "Nossos Projetos", "Transparência", "Seja Voluntário"]
    },
    {
      title: "Doações",
      links: ["Doar Alimentos", "Doar Financeiro", "Doar como Empresa", "Campanhas Ativas"]
    },
    {
      title: "Contato",
      links: [
        { icon: <FiMail className="mr-2" />, text: "contato@almassunidas.org.br" },
        { icon: <FiPhone className="mr-2" />, text: "(11) 98765-4321" },
        { text: "São Paulo - SP" }
      ]
    }
  ];

  const socialIcons = [FiInstagram, FiFacebook, FiTwitter];

  return (
    <footer className="bg-[#3A3226] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Almass Unidas</h3>
            <p className="mb-6 opacity-80">
              Transformando solidariedade em ações concretas contra a fome desde 2015.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="bg-[#a80e0e] hover:bg-[#4A7B5E] w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h4 className="text-xl font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {typeof link === 'string' ? (
                      <Link href="#" className="opacity-80 hover:opacity-100 hover:text-[#a80e0e] transition">
                        {link}
                      </Link>
                    ) : (
                      <Link href="#" className="flex items-center opacity-80 hover:opacity-100 hover:text-[#a80e0e] transition">
                        {link.icon} {link.text}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-[#a80e0e]/30 mt-12 pt-8 text-center opacity-70 text-sm"
        >
          <p>© {new Date().getFullYear()} Almass Unidas. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 12.345.678/0001-90 • Organização da Sociedade Civil de Interesse Público</p>
        </motion.div>
      </div>
    </footer>
  );
}