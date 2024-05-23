/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Include all Vue files
    "../views/PocetnaView.vue", // Path to PocetnaView
    "../views/KluboviView.vue", // Path to KluboviView
    "../views/MatchesView.vue", // Path to MatchesView
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}