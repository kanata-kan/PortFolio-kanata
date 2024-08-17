'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Particles from 'react-tsparticles';

export default function HeroSection() {
  return (
    <section
      className='relative flex flex-col md:flex-row items-center justify-center py-24 text-center md:text-left px-6 md:px-10 lg:px-20 overflow-hidden'
      style={{
        backgroundImage: 'url("/mnt/data/image.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* جزيئات متحركة في الخلفية */}
      <Particles
        className='absolute inset-0 z-0'
        options={{
          particles: {
            number: {
              value: 100,
            },
            color: {
              value: '#30D5C8',
            },
            size: {
              value: 3,
            },
            move: {
              direction: 'random',
              speed: 0.5,
            },
          },
        }}
      />

      {/* الصورة الشخصية مع التأثيرات الجديدة */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05, rotate: 3 }}
        className='relative z-10 mb-6 md:mb-0 md:mr-8 hero-image-wrapper'
      >
        <Image
          src='/images/portfolio.png'
          alt='Abdelilah Wajid'
          width={400}
          height={500}
          className='hero-image md:w-[450px] md:h-auto shadow-lg'
        />
      </motion.div>

      {/* النصوص */}
      <div className='flex flex-col items-center md:items-start relative z-10'>
        <motion.h1
          className='text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-white max-w-xs md:max-w-full'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Abdelilah Wajid
        </motion.h1>
        <motion.h2
          className='text-xl md:text-2xl font-light text-green mb-2 md:mb-4 max-w-xs md:max-w-full'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Fullstack JS Developer
        </motion.h2>

        {/* النبذة المختصرة */}
        <motion.p
          className='text-base md:text-lg max-w-sm md:max-w-xl mb-4 md:mb-6 text-white'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        >
          I'm a passionate Fullstack JS Developer with a strong focus on
          creating dynamic and responsive web applications using modern
          JavaScript frameworks.
        </motion.p>

        {/* زر التعرف عليّ */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.9 }}
          className='bg-green-dark text-black px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-green-light transition-colors duration-300'
        >
          Learn More About Me
        </motion.button>
      </div>
    </section>
  );
}
