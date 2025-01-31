import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: {
          "50": "#fef5ee",
          "100": "#fde9d7",
          "200": "#f9d0af",
          "300": "#f5ae7c",
          "400": "#f08247",
          "500": "#ed672b",
          "600": "#E95808",
          "700": "#b83516",
          "800": "#922c1a",
          "900": "#762718",
          "950": "#40110a",
        },
        purple: {
          "50": "#faf5ff",
          "100": "#f4e8ff",
          "200": "#ead6fe",
          "300": "#dab5fd",
          "400": "#c386fa",
          "500": "#ac57f5",
          "600": "#9835e8",
          "700": "#8224cb",
          "800": "#652D91",
          "900": "#5b1d86",
          "950": "#3e0863",
        },
      },
      gridRow: {
        "1/3": "1/3",
      },
      gridColumn: {
        "3/4": "3/4",
      },
      backgroundImage: {
        "image-gradient":
          "linear-gradient(90deg, rgba(0,0,0, .6) 0%, transparent 45%), url('/images/banner-portugal-desktop.png')",
        "white-to-gray":
          "linear-gradient(90deg, rgba(255,255,255, 1), rgba(237, 241, 244, 1) 30%)",
        "gray-to-white":
          "linear-gradient(360deg, rgba(250,249,247, 1), rgba(255, 255, 255, 1))",
      },
    },
  },
  plugins: [],
} satisfies Config;
