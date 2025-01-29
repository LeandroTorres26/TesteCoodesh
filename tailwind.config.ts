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
        orange: '#ED672B',
        orangeHover: '#E95808',
        purple: '#8224CB',
        inputHover: '#EDF1F4',
        link: '#2362AF'
      },

      height: {
        '78': '78px',
        'banner': '640px',
      },
      fontSize: {
        '34': '34px',
      },
      gridRow: {
        '1/3': '1/3',
      },
      gridColumn: {
        '3/4': '3/4'
      },
    },
  },
  plugins: [],
} satisfies Config;
