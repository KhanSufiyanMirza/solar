'use client';

import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-2"
    >
      <div className="relative w-8 h-8">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3v18M12 3l7 4.2M12 3L5 7.2M12 21l7-4.2M12 21l-7-4.2M19 7.2v9.6M5 7.2v9.6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Nalanda
        </span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 -mt-1">
          Inverter
        </span>
      </div>
    </motion.div>
  );
}
