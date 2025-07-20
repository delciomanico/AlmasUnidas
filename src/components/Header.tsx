// components/Header.tsx
'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navItems = ['Início', 'sobre-nos', 'Contato'];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <Image 
            src="/images/logo.jpg" 
            alt="Almass Unidas" 
            width={20} 
            height={40}
            className="hover:opacity-90 transition-opacity"
            priority
          />
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[#3A3226] hover:text-[#a80e0e] transition-colors font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#a80e0e] text-white px-6 py-2 rounded-full font-medium"
        >
          Doar Agora
        </motion.button>
      </div>
    </motion.header>
  );
}