import { FC } from "react";
import { useGenerals } from "../../context/generals.context";
import { Socials } from "../atoms";
import { Container } from "../globals";
import { SwitchLanguage } from "../atoms/SwitchLanguage";
import { useRouter } from "next/router";

export const InfoHeader: FC = () => {
   const { general } = useGenerals();

   const { locale, locales, asPath } = useRouter();
   const partes = general.schedule.split("/");
   const primeraParte = partes[0];
   const segundaParte = partes[1];
   const lbl_schedule = locale === "en" ? primeraParte : segundaParte;

   return (
      <div className="infoHeader">
         <Container className="infoHeader-container">
            <Socials></Socials>

            <ul className="infoHeader-info">
               <li>
                  <a href={`${general.map_url}`} target="_blank" rel="noreferrer">
                     <i className="icon-gps"></i> {general.address}
                  </a>
               </li>
               <li className="infoHeader-item">
                  <i className="icon-schedule"></i>
                  {lbl_schedule}
               </li>

               <li className="infoPhone ">
                  <a className="infoHeader-item" href={`tel:${general.phone_firts}`} target="_blank" rel="noreferrer">
                     <i className="icon-phone"></i>
                     {general.phone_firts}
                  </a>
                  <span> - </span>
                  <a className="infoHeader-item" href={`tel:${general.phone_second}`} target="_blank" rel="noreferrer">
                     {general.phone_second}
                  </a>
               </li>
               <SwitchLanguage />
            </ul>
         </Container>
      </div>
   );
};
