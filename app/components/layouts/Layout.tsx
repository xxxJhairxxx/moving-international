import { Source_Sans_Pro, Georama } from "next/font/google";
import { FC, PropsWithChildren } from "react";
import { CustomHead } from "../globals";
import { InfoHeader } from "../molecules";
import { Header, Footer } from "../ui";
import ObserverTop from "../atoms/ObserverTop";

const primary = Source_Sans_Pro({
   subsets: ["latin"],
   weight: ["200", "300", "400", "600", "700", "900"],
   variable: "--font-primary",
});

const secundary = Georama({
   subsets: ["latin"],
   weight: ["200", "300", "400", "600", "700", "900"],
   variable: "--font-secundary",
});

export const Layout: FC<PropsWithChildren> = ({ children }) => {
   return (
      <div className={`${primary.variable} ${secundary.variable}`}>
         <CustomHead />
         <InfoHeader />
         <ObserverTop />
         <Header />
         {children}
         <Footer />
         {/* <div className="prueba-ob"></div> */}
      </div>
   );
};
