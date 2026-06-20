export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#6528F7',
          'purple-light': '#8B5CF6',
          'purple-dark': '#4318D1',
          'purple-glow': 'rgba(101, 40, 247, 0.35)',
        },
        dark: {
          900: '#0D0614',
          800: '#0F172A',
          700: '#1A1030',
          600: '#251845',
        },
        lavender: '#F2F0FE',
        'lavender-muted': '#C4B8F8',
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': 'clamp(3rem, 8vw, 10rem)',
        'display-xl': 'clamp(2.5rem, 6vw, 7.5rem)',
        'display-lg': 'clamp(2rem, 4.5vw, 5.5rem)',
        'display-md': 'clamp(1.5rem, 3vw, 3.5rem)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'purple-glow':
          'radial-gradient(ellipse at center, rgba(101,40,247,0.6) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(101, 40, 247, 0.4)',
        'glow-md': '0 0 30px rgba(101, 40, 247, 0.5)',
        'glow-lg': '0 0 60px rgba(101, 40, 247, 0.6)',
        card: '0 4px 24px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 8px 40px rgba(101, 40, 247, 0.3)',
      },
      animation: {
        shimmer: 'shimmer 2.5s infinite linear',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(101,40,247,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(101,40,247,0.8)' },
        },
      },
      screens: {
        xs: '375px',
        '3xl': '1920px',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'back-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'circ-out': 'cubic-bezier(0, 0.55, 0.45, 1)',
      },
    },
  },
  plugins: [],
};
