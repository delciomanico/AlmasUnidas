// components/AssociationPostsCarousel.tsx
'use client';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FiHeart, FiMessageSquare, FiShare2 } from 'react-icons/fi';
import Image from 'next/image';

interface AssociationPost {
  id: number;
  imageUrl: string;
  caption: string;
  date: string;
  likes: number;
  comments: number;
}

export default function AssociationPostsCarousel() {
  const posts: AssociationPost[] = [
    {
      id: 1,
      imageUrl: '/images/post1.jpg',
      caption: 'Distribuição de cestas básicas na comunidade Jardim São Luiz. Obrigado aos doadores que tornaram isso possível!',
      date: '15/05/2023',
      likes: 142,
      comments: 23
    },
    {
      id: 2,
      imageUrl: '/images/post2.jpg',
      caption: 'Nossa equipe de voluntários em ação no último sábado. Juntos fazemos a diferença!',
      date: '22/05/2023',
      likes: 89,
      comments: 12
    },
    {
      id: 3,
      imageUrl: '/images/post3.jpg',
      caption: 'Campanha do agasalho 2023 - Mais de 500 peças arrecadadas para o inverno.',
      date: '30/05/2023',
      likes: 210,
      comments: 45
    },
    {
      id: 4,
      imageUrl: '/images/post4.jpg',
      caption: 'Oficina de capacitação para mulheres da comunidade. Empoderamento através da educação.',
      date: '05/06/2023',
      likes: 176,
      comments: 32
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
          Nossas Ações em Destaque
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper pb-12"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="relative h-64">
              
                    <Image 
                      src={post.imageUrl} 
                      alt={post.caption} 
                      width={'1000'}
                      height={'1000'}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <span className="text-white text-sm">{post.date}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#3A3226] mb-4 line-clamp-3">{post.caption}</p>
                    <div className="flex justify-between items-center text-[#a80e0e]">
                      <div className="flex space-x-4">
                        <span className="flex items-center">
                          <FiHeart className="mr-1" /> {post.likes}
                        </span>
                        <span className="flex items-center">
                          <FiMessageSquare className="mr-1" /> {post.comments}
                        </span>
                      </div>
                      <button className="hover:text-[#3A3226] transition-colors">
                        <FiShare2 />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href="https://www.instagram.com/almass.unidas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-[#a80e0e] text-[#a80e0e] rounded-full hover:bg-[#a80e0e] hover:text-white transition-colors"
          >
            Ver mais no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}