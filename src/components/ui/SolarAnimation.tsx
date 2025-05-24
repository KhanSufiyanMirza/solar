import { motion } from 'framer-motion';
import { useTheme } from '../ThemeProvider';

export default function SolarAnimation() {
  const { theme } = useTheme();

  const panelVariants = {
    light: {
      scale: [1, 1.02, 1],
      filter: [
        'brightness(1.1) drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))',
        'brightness(1.3) drop-shadow(0 0 30px rgba(59, 130, 246, 0.7))',
        'brightness(1.1) drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))',
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    dark: {
      scale: [1, 1.02, 1],
      filter: [
        'brightness(1.2) drop-shadow(0 0 20px rgba(96, 165, 250, 0.6))',
        'brightness(1.4) drop-shadow(0 0 30px rgba(96, 165, 250, 0.8))',
        'brightness(1.2) drop-shadow(0 0 20px rgba(96, 165, 250, 0.6))',
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const sunVariants = {
    light: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
    dark: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const energyFlowVariants = {
    light: {
      pathLength: [0, 1],
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    dark: {
      pathLength: [0, 1],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="absolute right-10 top-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80">
      {/* Rotating Sun */}
      <motion.div
        className="absolute inset-0"
        initial={theme}
        animate={theme}
        variants={sunVariants}
      >
        <div className={`absolute inset-0 bg-[conic-gradient(from_0deg,${
          theme === 'light'
            ? 'rgba(251,191,36,0) 0deg,rgba(251,191,36,0.2) 90deg,rgba(251,191,36,0) 180deg,rgba(251,191,36,0.2) 270deg,rgba(251,191,36,0) 360deg'
            : 'rgba(251,191,36,0) 0deg,rgba(251,191,36,0.1) 90deg,rgba(251,191,36,0) 180deg,rgba(251,191,36,0.1) 270deg,rgba(251,191,36,0) 360deg'
        })] rounded-full`} />
      </motion.div>

      {/* Solar Panel */}
      <motion.svg
        viewBox="0 0 100 100"
        fill="none"
        initial={theme}
        animate={theme}
        variants={panelVariants}
        className="w-full h-full relative z-10"
      >
        {/* Panel Frame */}
        <rect
          x="20"
          y="30"
          width="60"
          height="40"
          rx="2"
          fill={theme === 'light' ? '#1E40AF' : '#1D4ED8'}
          className="filter drop-shadow-lg"
        />

        {/* Solar Cells Grid */}
        {Array.from({ length: 6 }).map((_, i) =>
          Array.from({ length: 4 }).map((_, j) => (
            <rect
              key={`cell-${i}-${j}`}
              x={22 + i * 10}
              y={32 + j * 10}
              width="8"
              height="8"
              rx="1"
              fill={theme === 'light' ? '#3B82F6' : '#60A5FA'}
              className="filter drop-shadow"
            />
          ))
        )}

        {/* Energy Flow Lines */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.path
            key={`flow-${i}`}
            d={`M${30 + i * 20} 70 L${30 + i * 20} 85 Q${50} 95 ${70 - i * 20} 85 L${70 - i * 20} 70`}
            stroke={theme === 'light' ? '#FCD34D' : '#FBBF24'}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            variants={energyFlowVariants}
            initial={theme}
            animate={theme}
            style={{ pathLength: 0 }}
          />
        ))}

        {/* Reflective Overlay */}
        <rect
          x="20"
          y="30"
          width="60"
          height="40"
          rx="2"
          fill="url(#panelGradient)"
          className="mix-blend-soft-light opacity-30"
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="panelGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
            <stop offset="50%" stopColor="transparent" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
