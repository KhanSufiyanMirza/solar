'use client';

import { motion } from 'framer-motion';
import { useTheme } from '../ThemeProvider';
import { useMemo } from 'react';

const LightBulb = () => {
  const { theme } = useTheme();

  const sparkPositions = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      const baseLeft = 30 + (i * 40) % 45;
      const baseTop = 25 + (i * 35) % 50;
      const xOffset = ((i * 17) % 40) - 20;
      const yOffset = ((i * 23) % 40) - 20;
      
      return {
        baseLeft,
        baseTop,
        xOffset,
        yOffset,
      };
    });
  }, []);

  const bulbVariants = {
    light: {
      filter: [
        'drop-shadow(0 0 30px rgba(56, 189, 248, 0.8)) brightness(1.2) blur(0.5px)',
        'drop-shadow(0 0 50px rgba(56, 189, 248, 0.95)) brightness(1.5) blur(1px)',
        'drop-shadow(0 0 40px rgba(56, 189, 248, 0.9)) brightness(1.3) blur(0.7px)',
        'drop-shadow(0 0 45px rgba(56, 189, 248, 0.92)) brightness(1.4) blur(0.8px)',
      ],
      scale: [1, 1.02, 1.01, 1],
      transition: {
        duration: 3,
        times: [0, 0.4, 0.7, 1],
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    dark: {
      filter: [
        'drop-shadow(0 0 25px rgba(56, 189, 248, 0.5)) brightness(1.05)',
        'drop-shadow(0 0 40px rgba(56, 189, 248, 0.7)) brightness(1.3)',
        'drop-shadow(0 0 30px rgba(56, 189, 248, 0.6)) brightness(1.15)',
        'drop-shadow(0 0 35px rgba(56, 189, 248, 0.65)) brightness(1.2)',
      ],
      scale: [1, 1.02, 1.01, 1],
      transition: {
        duration: 3,
        times: [0, 0.4, 0.7, 1],
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const sparkVariants = {
    light: {
      opacity: [0.4, 1, 0.4],
      scale: [0.8, 1.3, 0.8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1],
      },
    },
    dark: {
      opacity: [0.2, 0.8, 0.2],
      scale: [0.8, 1.3, 0.8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1],
      },
    },
  };

  const pathVariants = {
    light: {
      pathLength: [0, 1],
      opacity: [0.4, 1, 0.4],
      scale: [0.98, 1.02, 0.98],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    dark: {
      pathLength: [0, 1],
      opacity: [0.3, 0.9, 0.3],
      scale: [0.98, 1.02, 0.98],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Background Glow */}
      <div className="relative w-full h-full max-w-[28rem] max-h-[28rem]">
        <motion.div
          className={`absolute inset-0 bg-gradient-radial from-sky-400/40 via-sky-400/20 to-transparent dark:from-sky-400/30 dark:via-sky-400/15 blur-3xl`}
          animate={{
            opacity: [0.8, 1, 0.9, 1],
            scale: [0.95, 1.1, 1, 1.05],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Electric Sparks Container */}
      <div className="absolute inset-0 overflow-hidden">
        {sparkPositions.map((pos, i) => (
          <motion.div
            key={`spark-${i}`}
            className={`absolute w-0.5 h-0.5 rounded-full ${
              theme === 'light' ? 'bg-sky-400' : 'bg-sky-500'
            }`}
            style={{
              left: `${pos.baseLeft}%`,
              top: `${pos.baseTop}%`,
            }}
            animate={{
              x: [0, pos.xOffset],
              y: [0, pos.yOffset],
              opacity: [0, 1, 0],
              scale: [0.5, 2, 0.5],
            }}
            transition={{
              duration: 0.8 + (i * 0.1),
              repeat: Infinity,
              delay: i * 0.1,
              ease: [0.4, 0, 0.6, 1],
            }}
          />
        ))}
      </div>

      {/* Main Light Bulb */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full relative z-10"
        animate={theme}
        variants={bulbVariants}
      >
        {/* Bulb Glass */}
        <path
          d="M35 20C35 15 42 10 50 10C58 10 65 15 65 20C65 40 65 45 65 50C65 60 58 65 50 65C42 65 35 60 35 50C35 45 35 40 35 20Z"
          fill={theme === 'light' ? 'rgba(186, 230, 253, 0.9)' : 'rgba(186, 230, 253, 0.7)'}
          className="filter drop-shadow-lg"
        />

        {/* Electric Symbol */}
        <motion.path
          d="M45 25L55 25L48 40L55 40L42 60L45 45L38 45L45 25"
          fill="none"
          stroke={theme === 'light' ? '#0EA5E9' : '#0284C7'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          className="filter drop-shadow"
        />

        {/* Base */}
        <path
          d="M40 65L35 75C35 78 40 80 50 80C60 80 65 78 65 75L60 65"
          fill={theme === 'light' ? '#475569' : '#334155'}
        />

        {/* Metal Cap */}
        <path
          d="M35 75L33 80C33 85 40 87 50 87C60 87 67 85 67 80L65 75"
          fill={theme === 'light' ? '#334155' : '#1E293B'}
        />
      </motion.svg>
      
      {/* Light Effect */}
      <motion.div
        className={`absolute inset-0 mix-blend-soft-light`}
        animate={theme}
        variants={sparkVariants}
      >
        <div className={`absolute inset-0 bg-gradient-radial from-sky-400/60 via-sky-400/30 to-transparent blur-2xl`} />
      </motion.div>
    </div>
  );
};

export default LightBulb;
