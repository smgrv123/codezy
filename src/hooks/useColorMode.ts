'use client';

import { useEffect, useState } from 'react';

const useColorMode = () => {
  const [colorMode, setColorMode] = useState('light');

  useEffect(() => {
    const savedColorMode = localStorage.getItem('colorMode');
    console.log('first', savedColorMode);
    if (savedColorMode) {
      setColorMode(savedColorMode);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setColorMode('dark');
    }
  }, []);

  useEffect(() => {
    if (colorMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('colorMode', colorMode);
  }, [colorMode]);

  return { colorMode, setColorMode };
};

export default useColorMode;
