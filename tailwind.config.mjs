import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2C5F2D',
        'primary-dark': '#1E3F1E',
        secondary: '#97BC62',
        accent: '#D4A373',
        'accent-light': '#E8C9A0',
        cream: '#FDF8F3',
        'cream-dark': '#F5EDE4',
        earth: {
          50: '#F7F5F2',
          100: '#EDE8E0',
          200: '#D9D0C3',
          300: '#C0B3A0',
          400: '#A38F75',
          500: '#8B7654',
          600: '#6E5B42',
          700: '#564633',
          800: '#423628',
          900: '#322C21',
        },
        warm: {
          50: '#FAF7F2',
          100: '#F5EDE4',
          200: '#EAD9C8',
          300: '#DBC2A6',
          400: '#C9A77D',
          500: '#B88954',
          600: '#A46D3A',
          700: '#85532F',
          800: '#6B4128',
          900: '#563223',
        },
      },
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        display: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        body: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2' }],
        'display-sm': ['1.875rem', { lineHeight: '1.25' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body-md': ['1rem', { lineHeight: '1.75' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(44, 95, 45, 0.08)',
        'medium': '0 4px 30px rgba(44, 95, 45, 0.12)',
        'large': '0 8px 40px rgba(44, 95, 45, 0.16)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;