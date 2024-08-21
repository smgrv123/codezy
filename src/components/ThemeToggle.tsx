'use client';

import { Moon, Sun } from 'lucide-react';
import React from 'react';
import { useTheme } from '../utils/Theme/ThemeProvider';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='p-2 rounded-full bg-background-light border-border-light border-2 dark:bg-background-dark dark:border-border-dark'
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;
