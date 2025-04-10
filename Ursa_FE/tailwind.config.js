/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#D6B89E", // 主色 PrimaryHeader
        primaryDark: "#BFA588", // 主色深 Primary DarkHover
        secondary: "#A47148", // 輔助色 Button按鈕背景、互動元素
        secondaryHover: "#8C5F3D", // 輔助色 Hover按鈕 hover 狀態
        background: "#FAF6F1", // 背景色 Background頁面整體底色
        cardBackground: "#EFE7DD", // 書卡背景 Card BG書卡、模組區塊背景
        textMain: "#3B3024", // 主文字色 Text Main主要文字
        textSub: "#5E5146", // 次文字色 Text Sub附加文字
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
