module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#111827", // gray-900
          card: "#1F2937", // gray-800
          border: "#374151", // gray-700
        },
      },
    },
  },
  plugins: [],
};
