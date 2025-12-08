/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#6366F1',
        secondary: '#06B6D4',
        accent: '#16A34A',
        // Semantic Colors
        midnight: 'var(--bg)',
        surface: 'var(--card-bg)',
        glass: 'var(--card-border)',

        // Mapped Text Colors (for backward comp if needed, but prefer classes)
        'body-text': 'var(--text-primary)',
        'muted-text': 'var(--text-secondary)',
      },
      boxShadow: {
        glow: 'var(--shadow-glow)', // Adaptive: Neon in dark, Soft in light
        glass: 'var(--shadow-surface)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        aurora: {
          '0%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(-10px, -6px, 0) scale(1.05)' },
          '100%': { transform: 'translate3d(0,0,0) scale(1)' },
        },
        'gradient-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.35 },
          '50%': { opacity: 0.75 },
        },
      },
      animation: {
        float: 'float 12s ease-in-out infinite',
        aurora: 'aurora 18s ease-in-out infinite',
        'gradient-move': 'gradient-move 16s ease infinite',
        'pulse-glow': 'pulse-glow 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

