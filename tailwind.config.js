module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        accent:  '#06b6d4',
        deep:    '#050c1a',
        violet:  '#7c3aed',
        electric:'#06b6d4',
        pink:    '#ec4899',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow:         '0 0 40px rgba(124,58,237,0.3)',
        'glow-cyan':  '0 0 40px rgba(6,182,212,0.25)',
        'glow-sm':    '0 0 16px rgba(124,58,237,0.2)',
        card:         '0 20px 60px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'brand':           'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
        'brand-warm':      'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' }
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'spin-slow': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        float:       'float 6s ease-in-out infinite',
        shimmer:     'shimmer 3s linear infinite',
        'fade-up':   'fade-up 0.6s ease-out forwards',
        'spin-slow': 'spin-slow 8s linear infinite',
      }
    }
  },
  plugins: []
}
