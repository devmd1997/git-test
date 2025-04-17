// tailwind.config.js

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"], // Make sure this points to your files
  theme: {
    extend: {
      fontFamily: {
        // Add your custom font family here
        // The key ('sans', 'serif', 'custom', etc.) is what you'll use in your class name (e.g., font-custom)
        // The value is an array of font names, starting with your custom font, followed by fallbacks.
        custom: ["Outfit", ...defaultTheme.fontFamily.sans], // Example using 'custom' as the key
        // If you want it to be the default sans-serif font:
        // 'sans': ['YourCustomFontName', ...defaultTheme.fontFamily.sans],
      },
      // You might also want to add custom font sizes, weights, etc. here if needed
      // Example:
      // fontWeight: {
      //   'normal': 400, // Assuming your regular font has weight 400
      //   'bold': 700,   // Assuming your bold font has weight 700
      // }
    },
  },
  plugins: [],
};
