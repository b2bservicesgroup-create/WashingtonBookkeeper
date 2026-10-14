import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Manrope', 'system-ui', 'sans-serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: '#004078',
        gray: {
          DEFAULT: '#777777',
        },
        accent: '#1660D0',
        sky: '#EEF5FF',
        sky2: '#F5F9FF',
        ink: '#1B2A41',
        muted: '#33445C',
        success: '#0F7A55',
      },
    },
  },
  plugins: [typography],
};
