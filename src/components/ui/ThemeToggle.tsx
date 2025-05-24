'use client';

import { useTheme } from '@/components/ThemeProvider';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <HiMoon className="w-5 h-5 text-gray-800 dark:text-gray-200 transition-colors duration-300" />
      ) : (
        <HiSun className="w-5 h-5 text-gray-800 dark:text-gray-200 transition-colors duration-300" />
      )}
    </button>
  );
}
