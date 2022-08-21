module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ["light", "garden", "dark", "night", "retro", "dracula",],
  },
};
