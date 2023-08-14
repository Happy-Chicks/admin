/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        Background: "#E7E7E7",
        Text: "#5D5D5D",
        SideBar: "#D4BBB5",
        ShedBackground: "#D6C8C4",
        deathColor: "#306E88",
        reportBackground: "#4F4F4F",
      },
    },
    
  },
  plugins: [
    
  ],
};
