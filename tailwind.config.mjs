/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_landing: "#140E22",
        button_bg_1: "#35245E",
        button_bg_2: "#8367ED",
        brand: "#35245E",
        nav_text: "#4C4C4C",
        service_bg: "#C9C8FD",
        service_title: "#764AE1",
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(144.47% 144.47% at 50% -19.33%, #FFFFFF 0%, #E9EAFF 34.68%, #F3EEFF 61.56%, #EEE8FF 92.45%)",
        "custom-linear": "linear-gradient(90deg, #35245E 0%, #6F4BC4 100%)",
      },
    },
  },
  plugins: [],
};
