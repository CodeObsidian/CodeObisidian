/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}',
    './public/**/*.html',
    './public/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#08080b',
        'bg-elevated': '#0f0f14',
        'bg-card': '#14141a',
        'bg-card-hover': '#1a1a22',
        surface: '#18181f',
        'surface-hover': '#1f1f28',
        primary: '#fafafa',
        secondary: '#a1a1aa',
        muted: '#71717a',
        accent: '#06b6d4',
        'accent-hover': '#22d3ee',
        'accent-muted': 'rgba(6, 182, 212, 0.15)',
        border: 'rgba(255, 255, 255, 0.06)',
        'border-hover': 'rgba(255, 255, 255, 0.12)',
        error: '#f87171',
        success: '#34d399'
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at var(--tw-gradient-x, 50%) var(--tw-gradient-y, 50%), var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, var(--tw-gradient-stops)), radial-gradient(at 80% 0%, var(--tw-gradient-stops)), radial-gradient(at 0% 50%, var(--tw-gradient-stops))'
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(6, 182, 212, 0.25)',
        'glow-sm': '0 0 40px -10px rgba(6, 182, 212, 0.2)',
        card: '0 4px 24px -4px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px -8px rgba(0, 0, 0, 0.5)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
}
