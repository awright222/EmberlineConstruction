import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          light: '#D4A574',
          DEFAULT: '#8B6F47',
          dark: '#4A3A28',
        },
        ember: {
          light: '#FF6B35',
          DEFAULT: '#D64933',
          dark: '#8B2F1F',
        },
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        display: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
