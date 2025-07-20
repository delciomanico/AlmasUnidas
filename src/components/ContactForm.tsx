// components/ContactForm.tsx
'use client';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiPhone } from 'react-icons/fi';

export default function ContactForm() {
  return (
    <section className="py-20 bg-[#F9F5F0]" id='contato'>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto e informações */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#3A3226] mb-6">
              Entre em Contato Conosco
            </h2>
            <p className="text-lg text-[#3A3226]/80 mb-8">
              Tem dúvidas, sugestões ou quer saber mais sobre nosso trabalho? 
              Preencha o formulário ou utilize nossos canais diretos de contato.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-[#a80e0e] mr-4 mt-1">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#3A3226]">Email</h4>
                  <a href="mailto:contato@almassunidas.org.br" className="text-[#3A3226]/80 hover:text-[#a80e0e] transition-colors">
                    contato@almassunidas.org.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#a80e0e] mr-4 mt-1">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#3A3226]">Telefone</h4>
                  <a href="tel:+5511987654321" className="text-[#3A3226]/80 hover:text-[#a80e0e] transition-colors">
                    (11) 98765-4321
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#a80e0e] mr-4 mt-1">
                  <FiMessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#3A3226]">Redes Sociais</h4>
                  <p className="text-[#3A3226]/80">
                    Nos siga no Instagram e Facebook
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#3A3226] mb-1">
                  Seu Nome
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#3A3226]/50">
                    <FiUser />
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="block w-full pl-10 pr-3 py-3 border border-[#3A3226]/20 rounded-lg focus:ring-2 focus:ring-[#a80e0e]/50 focus:border-[#a80e0e] outline-none transition-all"
                    placeholder="Digite seu nome completo"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#3A3226] mb-1">
                  Seu Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#3A3226]/50">
                    <FiMail />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full pl-10 pr-3 py-3 border border-[#3A3226]/20 rounded-lg focus:ring-2 focus:ring-[#a80e0e]/50 focus:border-[#a80e0e] outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#3A3226] mb-1">
                  Telefone (opcional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#3A3226]/50">
                    <FiPhone />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full pl-10 pr-3 py-3 border border-[#3A3226]/20 rounded-lg focus:ring-2 focus:ring-[#a80e0e]/50 focus:border-[#a80e0e] outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#3A3226] mb-1">
                  Sua Mensagem
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 text-[#3A3226]/50">
                    <FiMessageSquare />
                  </div>
                  <textarea
                    id="message"
                    rows={5}
                    className="block w-full pl-10 pr-3 py-3 border border-[#3A3226]/20 rounded-lg focus:ring-2 focus:ring-[#a80e0e]/50 focus:border-[#a80e0e] outline-none transition-all"
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#a80e0e] hover:bg-[#8c0c0c] text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all"
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}