import { FC } from "react";
import { useGenerals } from "../../context/generals.context";

interface SocialsProps {
   className?: string;
}

export const Socials: FC<SocialsProps> = ({ className }) => {
   const { general } = useGenerals();

   return (
      <div className={`socials ${className}`}>
         {general.social_network.map(({ type, url }, i: number) => (
            <div key={i} title={`${!url ? "Coming soon" : type}`} className="socials__items">
               <a
                  className={`socials__items-link ${!url ? "pointer-events-none" : ""}`}
                  href={url ? url : "#"}
                  target="_blank"
                  rel="noreferrer"
               >
                  <i className={`socials__items-icon icon-${type} `} />
               </a>
            </div>
         ))}
      </div>
   );
};
