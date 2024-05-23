/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        goku: ['Goku', 'sans-serif'],
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        'custom-white': 'rgba(255, 255, 255, 1)',
      },
      fontWeight: {
        100: '100',
      },
      margin: {
        '0': '0px',
      },
      fontFamily: {
        goku: ['Goku', 'sans-serif'],
      },
      colors: {
        'custom-black': 'rgba(0, 0, 0, 0.2)',
        'custom-white': 'rgba(255, 255, 255, 1)',
      },
      inset: {
        '-6%': '-6%',
        '-17%': '-17%',
      },
      fontWeight: {
        100: '100',
      },
      margin: {
        '0': '0px',
      },
    },
  },
  plugins: [],
}

