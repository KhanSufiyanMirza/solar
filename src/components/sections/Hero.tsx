'use client';

import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '../ThemeProvider';
import LightBulb from '../ui/LightBulb';
import { motion } from 'framer-motion';

export default function Hero() {
  const { theme } = useTheme();
  const imagePath = `${process.env.NODE_ENV === 'production' ? '/solar' : ''}/hero-bg.jpg`;

  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Background overlay */}
        <div 
          className={`absolute inset-0 z-10 transition-colors duration-1000 ${
            theme === 'light' 
              ? 'bg-gradient-to-br from-gray-900/50 via-gray-800/40 to-gray-700/30' 
              : 'bg-gradient-to-br from-gray-900/85 via-gray-800/80 to-gray-700/75'
          }`}
        />
        
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={imagePath}
            alt="Solar panels installation"
            fill
            className={`object-cover scale-[1.02] transition-all duration-1000 ${
              theme === 'light' ? 'brightness-110' : 'brightness-75'
            }`}
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-16 pb-8 md:py-20 relative z-20">
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
          >
            Power Your Future with{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Solar Energy
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl mb-8 max-w-2xl ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}
          >
            Premium Luminous solar panels and inverters for sustainable energy solutions.
            Join the solar revolution today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Products
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animated Light Bulb */}
      <LightBulb />
    </section>
  );
}
