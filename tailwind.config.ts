import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'border-light': '#4B4B4B',
        'text-light': '#646464',
        'background-light': '#D1D1D1',
        'border-dark': '#CFCFCF',
        'text-dark': '#B5B5B5',
        'background-dark': '#222222'
      }
    }
  },
  plugins: []
};
export default config;
