/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{html,js,ts,jsx,tsx}',
    './public/**/*.html',
    './public/**/*.js'
  ],
  theme: {
    colors: {
      'bg': '#1D1D1D',
      'shade': '#242424',
      'shade-hover': '#282828',
      'primary': '#EFEFEF',
      'secondary': '#BFBFBF',
      'oldAccent': '#98B6E6',
      'accent': '#417efd',
      'accent-2': '#002D3C',
      'error': '#aa4f4f'
    },
    extend: {
      'borderRadius': {
        'md': '0.25rem'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle closest-side, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

