/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      backgroundColor: {
        "primary" : "#C67C4E",
        "secondary" : "#EDD6C8",
        "dark" : "#313131",
        "ash" : "#E3E3E3",
        "light" : "#F9F2ED",
      },
      colors: {
        "primary" : "#C67C4E",
        "secondary" : "#EDD6C8",
        "dark" : "#313131",
        "ash" : "#E3E3E3",
        "light" : "#F9F2ED",
      },

    },
  },
  plugins: [],
}