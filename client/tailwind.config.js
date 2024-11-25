/** Design system settings */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette with blue theme
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // Main theme color
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          light: '#f8fafc',  // Light background
          DEFAULT: '#1e293b', // Text color
          dark: '#0f172a',    // Dark background
        },
        accent: {
          blue: '#60a5fa',    
          indigo: '#818cf8',  
          cyan: '#22d3ee',    
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1e293b',
            h1: {
              fontWeight: '700',
              fontSize: '2.5rem',
              lineHeight: '1.2',
              marginBottom: '1rem',
            },
            h2: {
              fontWeight: '600',
              fontSize: '2rem',
              lineHeight: '1.3',
              marginBottom: '0.75rem',
            },
            h3: {
              fontWeight: '600',
              fontSize: '1.5rem',
              lineHeight: '1.4',
              marginBottom: '0.5rem',
            },
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),  
  ],
}
