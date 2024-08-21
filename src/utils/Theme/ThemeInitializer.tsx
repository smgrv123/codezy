'use client';

import { useEffect } from 'react';
import { useTheme } from './ThemeProvider';

const ThemeInitializer: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return null;
};

export default ThemeInitializer;
