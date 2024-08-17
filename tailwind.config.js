/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // الألوان المخصصة
        black: {
          DEFAULT: '#000000',
          light: '#333333',
          lighter: '#666666',
          darkest: '#0a0a0a',
        },
        green: {
          DEFAULT: '#30D5C8', // الأخضر الفيروزي الأساسي
          dark: '#29b2a1', // الأخضر الفيروزي الداكن
          light: '#6fe7e0', // الأخضر الفيروزي الفاتح
        },
        white: {
          DEFAULT: '#FFFFFF',
          light: '#F5F5F5',
          dark: '#E5E5E5',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
