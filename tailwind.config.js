/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4",
        backdrop: "#fsfaff",
       // dark: "#090808",
        dark: "#134264",
        secondary: "#f16b86",
        yell:"#f9b940",
      },
    },
  },
  plugins: [],
};
