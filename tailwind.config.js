/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        hero_green: "#2B892E",
        grey_bg: "#989898",
        article_dark_grey: "#131313",
        secondary_color: "#48D64C", // green
      },
      colors: {
        light_grey: "#BDBDBD",
        green_intro: "#2B892E", // dark green
        secondary_color: "#48D64C", // light green
      },
      backgroundImage: {
        hero: "url('./images/hero_mask.svg')",
        hero_mask_desktop: " url('./images/hero_mask_desktop.png')",
        "article-mask": "url('./images/article_mask.svg')",
        financial_plan_mask_dsktop:
          "url('./images/financial_plan_mask_desktop.svg')",
        seamless_mask: "url('./images/seamless_mask_desktop.svg')",
      },
      backgroundSize: {
        mask: "100% 30%",
      },
      objectPosition: {
        happy: "50px -50px",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite backwards",
      },

      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-200%)" },
        },
      },
    },
  },
  plugins: [],
};
