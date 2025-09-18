// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Adicione estas duas seções:
      animation: {
        shockwave: 'shockwave 2s ease-out infinite',
      },
      keyframes: {
        shockwave: {
          '0%': {
            transform: 'scale(1)',
            boxShadow: '0 0 2px rgba(37, 211, 102, .5), inset 0 0 1px rgba(37, 211, 102, .5)',
          },
          '95%': {
            boxShadow: '0 0 50px transparent, inset 0 0 30px transparent',
          },
          '100%': {
            transform: 'scale(1.2)',
          },
        },
      },
      // ... (suas outras extensões, se houver)
    },
  },
  plugins: [],
};