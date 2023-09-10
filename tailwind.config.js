/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      darkBrown: "#876B39",
      semiDarkBrown: "#A3874E",
      semilightBrown: "#BCA268",
      lightBrown: "#DEC78C",
      darkBeige: "#CBB49E",
      semiDarkBeige: "#E0CFBE",
      semilightBeige: "#EFE4D7",
      lightBeige: "#FFF8F0",
      error: "#F44336",
    }
  },
  plugins: [],
}
