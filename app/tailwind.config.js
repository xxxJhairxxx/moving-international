/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "#F24822",
            secundary: "#083056",
            warning: "#494949",
            success: "#093F51",
            gris: {
               100: "#FAFAFA",
               200: "#D0D0D0",
               300: "#606060",
            },
            dark: {
               100: "##1E1E1E",
               200: "#202020",
            },
         },
         fontFamily: {
            primary: ["var(--font-primary)"],
            secundary: ["var(--font-secundary)"],
         },
         screens: {
            phone: "414px",
            tablet: "768px",
            tabletlg: "960px",
            tabletxl: "1024px",
            laptop: "1200px",
            laptoplg: "1400px",
            desktop: "1700px",
         },
      },
   },
   plugins: [],
};
