/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2e5ac5",
        ice: "#f5f7ff",
        textColor: "#232323",
        textMuted: "#6b7280",
        lightBlue: "#cfd7f6",
        lavenderMist: "#dad5f3",
        peachVeil: "#f8d7ba",
        mintMist: "#c2f9d9",
      },
       backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, rgba(46, 90, 197, 1) 0%, rgba(31, 63, 160, 1) 50%, rgba(9, 9, 121, 1) 100%)",
      },
    },
  },
  plugins: [],
};
