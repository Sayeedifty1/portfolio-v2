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

import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      "site-bg": "#202020",
    },
  },
};
export const plugins = [addVariablesForColors];

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
