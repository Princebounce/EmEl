// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode and use 'class' to activate it with a class
  theme: {
    extend: {
      screens: {
        xs: '410px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      colors: {
        customEmel: '#0055FF',
        customEmelDark: '#003366', // Darker shade for dark mode
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus', 'active', 'dark'],
    },
  },
  plugins: [],
}
