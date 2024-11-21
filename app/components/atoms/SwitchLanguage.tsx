import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";

interface SwitchLanguageProps {
   className?: string;
}

export const SwitchLanguage: FC<SwitchLanguageProps> = ({ className }) => {
   const [selectedOption, setSelectedOption] = useState("en");
   const { locale, locales, asPath } = useRouter();
   const [toggle, setToggle] = useState<boolean>(true);

   const handleOptionChange = (toggle: boolean) => {
      setToggle(toggle);
      setSelectedOption(toggle ? "en" : "es");
   };

   return (
      // <div className={`switch-lang ${toggle && "enable"} ${className}`}>
      //    <Link className="h-full w-full flex items-center" href={asPath} locale={selectedOption}>
      //       <button className={`switch-lang__btn ${toggle && "enable"}`} onClick={() => handleOptionChange(!toggle)}>
      //          {locales?.map((idioma, index) => (
      //             <span key={index}>{idioma === "en" ? "Eng." : "Esp."}</span>
      //          ))}
      //       </button>
      //    </Link>
      // </div>

      <div className={`switch-lang ${toggle && "enable"} ${className}`}>
         <Link className="h-full w-full flex items-center" href={asPath} locale={selectedOption}>
            <button className={`switch-lang__btn ${toggle && "enable"}`} onClick={() => handleOptionChange(!toggle)}>
               {locales?.map((idioma, index) => (
                  <span key={index}>{idioma === "en" ? "ENG" : "ESP"}</span>
               ))}
            </button>
         </Link>
      </div>
   );
};
