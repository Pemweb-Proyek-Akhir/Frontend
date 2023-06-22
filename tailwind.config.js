/** @type {import('tailwindcss').Config} */
/**@type {import('tailwindcss/colors')} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#299AFE",
        secondary: "#69B1F1",
        white: "#FFFFFF",
        flower: {
          100: "#ECF5FD",
          200: "#DAECFC",
          300: "#B4D8F8",
          400: "#8FC5F5",
          500: "#69B1F1",
          600: "#449EEE",
          700: "#367EBE",
          800: "#295F8F",
          900: "#1B3F5F",
        },
      },
    },
  },
  plugins: [],
};
