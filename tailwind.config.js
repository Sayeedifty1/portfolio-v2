// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         "site-bg": "#202020",
//       },
//     },
//   },
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   plugins: [addVariablesForColors],
// };

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "site-bg": "#202020",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
